import { LitElement, html, css, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant } from "../ha-types";
import { applyRippleEffect } from "../animations";
import { localize } from "../localize/localize";
import { navigate } from "custom-card-helpers";
import { getOrDefault } from "../shared/utils";
import {
  _renderAppIcon,
  openGoogleHome,
  openNetflix,
  openSpotify,
  openYouTube,
} from "./google-media-mapper";

@customElement("google-media-overlay")
export class GoogleMediaOverlay extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @property() public entity!: string;

  @state() private _closing = false;
  @state() private _volume = 0; // 0..1
  @state() private _progress = 0; // 0..100
  @state() private _isPlaying = false; // Rimosso @property
  @state() private _isPaused = false;
  @state() private _isOff = true;
  @state() private _isConnected = false;
  @state() private _isDragging = false;

  // Variabili private per animazioni
  private _animationFrameId: number | null = null;
  private _lastPosition = 0; // secondi
  private _lastDuration = 1; // secondi
  private _lastFrameTime = 0; // ms, usato dall'animazione
  private _dragPositionSeconds = 0; // ms, usato dall'animazione

  private _close() {
    this._closing = true;
    setTimeout(() => {
      this.dispatchEvent(
        new CustomEvent("close-overlay", {
          bubbles: true,
          composed: true,
        })
      );
    }, 200);
  }

  private _callService(service: string, data: any = {}) {
    if (!this.entity) {
      console.error("No entity defined for service call");
      return;
    }

    try {
      this.hass.callService("media_player", service, {
        entity_id: this.entity,
        ...data,
      });
    } catch (error) {
      console.error("Error calling service:", error);
    }
  }

  // Helper: calcola la posizione "corrente" usando media_position_updated_at
  private _computeServerPosition(stateObj: any): number {
    const media_pos = Number(stateObj?.attributes?.media_position) || 0;
    const updated_at = stateObj?.attributes?.media_position_updated_at;
    // se non è presente updated_at, ritorna media_pos come fallback
    if (!updated_at) return media_pos;

    const updatedMs = Date.parse(updated_at);
    if (isNaN(updatedMs)) return media_pos;

    const nowMs = Date.now();
    // elapsed in secondi dal momento in cui HA ha calcolato media_position
    const elapsed = Math.max(0, (nowMs - updatedMs) / 1000);
    return media_pos + elapsed;
  }

  protected updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    if (!this.hass || !this.entity) return;
    const stateObj = this.hass?.states?.[this.entity];
    if (!stateObj) return;

    // Solo aggiorna se è cambiato hass o entity (evita loop)
    if (changedProperties.has("hass")) {
      // Aggiorna volume
      const newVolume = stateObj.attributes.volume_level ?? 0;
      if (Math.abs(newVolume - this._volume) > 0.01) {
        this._volume = newVolume;
      }

      // Aggiorna progress
      const duration = Number(stateObj.attributes.media_duration) || 1;
      const serverPos = this._computeServerPosition(stateObj);

      this._lastDuration = Math.max(duration, 1);
      this._lastPosition = Math.min(serverPos, this._lastDuration);
      const newProgress =
        Math.round((this._lastPosition / this._lastDuration) * 1000) / 10;

      if (Math.abs(newProgress - this._progress) > 0.1) {
        this._progress = newProgress;
      }

      // Aggiorna stato riproduzione
      this.changePlyingState(stateObj);

      // Aggiorna stati connessione
      this._isConnected = ["playing", "paused", "idle"].includes(
        stateObj.state
      );
      this._isOff = stateObj.state === "off";

      this._lastFrameTime = Date.now();
    }
  }

  changePlyingState(stateObj: any) {
    const isPlaying =
      stateObj.state === "playing" && stateObj.attributes.media_title;
    const isPaused = stateObj.state === "paused";
    const wasPlaying = this._isPlaying;
    this._isPaused = isPaused;

    if (isPlaying !== wasPlaying) {
      this._isPlaying = isPlaying;

      // Gestisci animazione
      if (
        this._isPlaying &&
        this._animationFrameId === null &&
        !this._isDragging
      ) {
        this._animateProgress();
      } else if (!this._isPlaying && this._animationFrameId !== null) {
        cancelAnimationFrame(this._animationFrameId);
        this._animationFrameId = null;
      }
    }
  }

  // Animazione fluida basata sul riferimento temporale riallineato
  private _animateProgress() {
    const step = () => {
      // se siamo in drag o non più in play interrompi l'animazione
      if (!this._isPlaying || this._isDragging) {
        this._animationFrameId = null;
        return;
      }

      const now = Date.now();
      const delta = (now - this._lastFrameTime) / 1000; // secondi
      this._lastFrameTime = now;

      this._lastPosition = Math.min(
        this._lastPosition + delta,
        this._lastDuration
      );
      this._progress =
        (this._lastPosition / Math.max(1, this._lastDuration)) * 100;

      // Forza aggiornamento dell'UI per la barra di progresso
      this.requestUpdate();

      this._animationFrameId = requestAnimationFrame(step);
    };

    if (this._animationFrameId === null) {
      this._lastFrameTime = Date.now();
      this._animationFrameId = requestAnimationFrame(step);
    }
  }

  // Modifica il seek per essere più stabile
  private _startSeek(e: MouseEvent | TouchEvent) {
    e.preventDefault();
    const progressBar =
      this.renderRoot.querySelector<HTMLDivElement>(".progress-bar");
    if (!progressBar) return;

    this._isDragging = true;

    const getClientX = (ev: any) =>
      ev.touches ? ev.touches[0].clientX : ev.clientX;

    const updateProgress = (ev: MouseEvent | TouchEvent) => {
      const rect = progressBar.getBoundingClientRect();
      const clientX = getClientX(ev as any);
      let p = (clientX - rect.left) / rect.width;
      p = Math.min(Math.max(p, 0), 1);

      // durata corrente (prendi da hass)
      const stateObj = this.hass?.states?.[this.entity];
      const duration = Number(stateObj?.attributes?.media_duration) || 1;

      // aggiorno le variabili locali (visuale live)
      this._dragPositionSeconds = p * duration;
      this._progress = p * 100;

      // aggiorna visivamente subito (no aspettare HA)
      const fill = progressBar.querySelector<HTMLDivElement>(".progress-fill");
      const thumb =
        progressBar.querySelector<HTMLDivElement>(".progress-thumb");
      if (fill) fill.style.width = `${this._progress}%`;
      if (thumb) thumb.style.left = `calc(${this._progress}% - 6px)`;
    };

    const moveHandler = (ev: MouseEvent | TouchEvent) => updateProgress(ev);

    const upHandler = (ev: MouseEvent | TouchEvent) => {
      // ultimo aggiornamento visivo
      updateProgress(ev);

      const stateObj = this.hass?.states?.[this.entity];
      const duration = Number(stateObj?.attributes?.media_duration) || 1;

      // effettua il seek reale
      const targetSeconds = this._dragPositionSeconds;
      this._callService("media_seek", { seek_position: targetSeconds });

      // riallinea subito le variabili locali con il valore appena chiesto
      this._lastPosition = Math.min(targetSeconds, duration);
      this._lastDuration = Math.max(duration, 1);
      this._lastFrameTime = Date.now();
      this._progress = (this._lastPosition / this._lastDuration) * 100;

      this._isDragging = false;

      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseup", upHandler);
      window.removeEventListener("touchmove", moveHandler);
      window.removeEventListener("touchend", upHandler);
    };

    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("mouseup", upHandler);
    window.addEventListener("touchmove", moveHandler, {
      passive: false,
    } as any);
    window.addEventListener("touchend", upHandler);

    // iniziale
    updateProgress(e);
  }

  // Variabili per swipe
  private _touchStartX: number | null = null;
  private _touchCurrentX: number | null = null;

  // Threshold di swipe (px)
  private _swipeThreshold = 80;
  private _swipeEdge = 50; // solo swipe da bordo sinistro

  private _onTouchStart = (e: TouchEvent) => {
    this._touchStartX = e.changedTouches[0].clientX;
    this._touchCurrentX = this._touchStartX;
  };

  private _onTouchMove = (e: TouchEvent) => {
    this._touchCurrentX = e.changedTouches[0].clientX;

    // Previeni scroll indietro solo se partenza dal bordo
    if (this._touchStartX !== null && this._touchStartX < this._swipeEdge) {
      e.preventDefault(); // fondamentale per iOS
    }
  };

  private _onTouchEnd = () => {
    if (this._touchStartX === null || this._touchCurrentX === null) return;

    const diffX = this._touchCurrentX - this._touchStartX;

    if (this._touchStartX < this._swipeEdge && diffX > this._swipeThreshold) {
      this._close(); // chiudi overlay
    }

    this._touchStartX = null;
    this._touchCurrentX = null;
  };

  // Aggiungi i listener
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("touchstart", this._onTouchStart, { passive: true });
    this.addEventListener("touchmove", this._onTouchMove, { passive: false }); // passive:false per preventDefault
    this.addEventListener("touchend", this._onTouchEnd);
  }

  // Rimuovi i listener
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("touchstart", this._onTouchStart);
    this.removeEventListener("touchmove", this._onTouchMove);
    this.removeEventListener("touchend", this._onTouchEnd);

    if (this._animationFrameId !== null) {
      cancelAnimationFrame(this._animationFrameId);
      this._animationFrameId = null;
    }
  }

  // Volume Bar - CORRETTA
  private _startDrag(e: MouseEvent | TouchEvent) {
    try {
      e.preventDefault();
      e.stopPropagation(); // Previene la propagazione dell'evento

      const sliderContainer =
        this.renderRoot.querySelector<HTMLDivElement>(".volume-card");
      if (!sliderContainer) return;

      const updateVolume = (ev: MouseEvent | TouchEvent) => {
        const rect = sliderContainer.getBoundingClientRect();

        const clientX =
          ev instanceof TouchEvent ? ev.touches[0].clientX : ev.clientX;
        let volume = (clientX - rect.left) / rect.width;

        volume = Math.min(Math.max(volume, 0), 1);

        this._volume = volume;

        this._callService("volume_set", { volume_level: volume });

        // Forza l'update immediato della UI
        //const slider = sliderContainer.querySelector<HTMLDivElement>("#slider");
        //const volumeText =
        //  sliderContainer.querySelector<HTMLSpanElement>("#volumeText");

        //if (slider) {
        //  slider.style.width = `${volume * 100}%`;
        //}
        //if (volumeText) {
        //  volumeText.textContent = `${Math.round(volume * 100)}%`;
        //}
      };

      const moveHandler = (ev: MouseEvent | TouchEvent) => {
        ev.preventDefault();
        updateVolume(ev);
      };

      const upHandler = (ev: MouseEvent | TouchEvent) => {
        ev.preventDefault();
        window.removeEventListener("mousemove", moveHandler);
        window.removeEventListener("mouseup", upHandler);
        window.removeEventListener("touchmove", moveHandler);
        window.removeEventListener("touchend", upHandler);
      };

      window.addEventListener("mousemove", moveHandler, {
        passive: false,
      } as any);
      window.addEventListener("mouseup", upHandler);
      window.addEventListener("touchmove", moveHandler, {
        passive: false,
      } as any);
      window.addEventListener("touchend", upHandler);

      //updateVolume(e);
    } catch (error) {
      console.error("Error updating volume:", error);
    }
  }

  public _onClick(event: MouseEvent) {
    // Feedback tattile (se supportato)
    //navigator.vibrate?.(50);
    applyRippleEffect(event.currentTarget as HTMLElement, event);
  }

  private _onRemoteClick(e: any) {
    this._onClick(e);
    this._moreInfo();
  }

  private _moreInfo() {
    if (!this.hass || !this.entity) return;

    this._close();

    const event = new CustomEvent("hass-more-info", {
      detail: { entityId: this.entity },
      bubbles: true,
      composed: true,
    });

    // forza dispatch sul root
    document.querySelector("home-assistant")?.dispatchEvent(event);
  }

  private async _turnOnDevice(e: any) {
    this._onClick(e);
    this._callService("turn_on");
  }

  private _stopCast(e: any) {
    this._onClick(e);

    const stateObj = this.hass.states[this.entity];
    if (!stateObj) return;

    const supportsStop =
      stateObj.attributes.supported_features &&
      stateObj.attributes.supported_features & (1 << 13); // media_stop = bit 13

    if (supportsStop) {
      this._callService("media_stop"); // ferma la riproduzione/cast
    } else {
      this._callService("turn_off"); // fallback
    }
  }

  private _togglePlay(e?: Event) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (!this.hass || !this.entity) return;

    const service = this._isPlaying ? "media_pause" : "media_play";

    // Aggiorna lo stato locale subito
    this._isPlaying = !this._isPlaying;
    this._isPaused = !this._isPaused;
    this.requestUpdate();

    this.hass
      .callService("media_player", service, { entity_id: this.entity })
      .then(() => {
        if (this._isPlaying) {
          this._animateProgress();
        } else {
          cancelAnimationFrame(this._animationFrameId!);
        }
      })
      .catch((error) => console.error(`Error calling ${service}:`, error));
  }

  private _settings() {
    if (!this.hass || !this.entity) return;

    const stateObj = this.hass.states[this.entity];
    if (!stateObj) return;

    const entityRegistry = this.hass.entities?.[this.entity];
    const deviceId = entityRegistry?.device_id;

    this._close();

    setTimeout(() => {
      if (deviceId) {
        // navigazione interna (funziona in app mobile e browser)
        navigate(this, `/config/devices/device/${deviceId}`);
      } else {
        this._moreInfo();
      }
    }, 200);
  }

  // Esempio di utilizzo
  //openGoogleHome(e: any) {
  //  this._onClick(e);
  //  const url = getGoogleHomeURL();
  //  window.location.href = url;
  //}

  openLinks(e: any, appName: string) {
    this._onClick(e);
    if (appName == "Google") openGoogleHome();
    if (appName == "YouTube") openYouTube();
    if (appName == "Spotify") openSpotify();
    if (appName == "Netflix") openNetflix();
  }

  //openLinks(e: any, appName: string) {
  //  if (appName == "YouTube") this.openYouTube(e);
  //  if (appName == "Spotify") this.openSpotify(e);
  //  if (appName == "Netflix") this.openNetflix(e);
  //}
  //
  //openYouTube(e: any) {
  //  this._onClick(e);
  //  const url = getYouTubeURL();
  //  window.location.href = url;
  //}
  //
  //openSpotify(e: any) {
  //  this._onClick(e);
  //  const url = getSpotifyURL();
  //  window.location.href = url;
  //}
  //
  //openNetflix(e: any) {
  //  this._onClick(e);
  //  const url = getNetflixURL();
  //  window.location.href = url;
  //}
  //
  //private _renderAppIcon(appName: string, cover?: string) {
  //  switch (appName) {
  //    case "Spotify":
  //      return html`<img
  //        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-google-components/refs/heads/master/src/shared/assets/logo/Spotify.webp"
  //        width="24"
  //        height="24"
  //        style="border-radius: 50px; object-fit: cover;z-index: 1;"
  //      />`;
  //    case "YouTube":
  //      return html`<img
  //        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-google-components/refs/heads/master/src/shared/assets/logo/YouTube.png"
  //        width="24"
  //        height="24"
  //        style="border-radius: 50px; object-fit: cover;"
  //      />`;
  //    case "Netflix":
  //      return html`<img
  //        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-google-components/refs/heads/master/src/shared/assets/logo/Netflix.webp"
  //        width="24"
  //        height="24"
  //        style="border-radius: 50px; object-fit: cover;"
  //      />`;
  //    case "Prime Video":
  //      return html`<img
  //        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-google-components/refs/heads/master/src/shared/assets/logo/Netflix.webp"
  //        width="24"
  //        height="24"
  //        style="border-radius: 50px; object-fit: cover;"
  //      />`;
  //    default:
  //      return html`<ha-icon
  //        icon="m3r:play-circle"
  //        style="${cover
  //          ? "color: #e3e3e5;"
  //          : "color: var(--md-sys-color-on-secondary-container)"}"
  //      ></ha-icon>`;
  //  }
  //}

  protected render(): TemplateResult {
    const stateObj = this.hass.states[this.entity];
    if (!stateObj) return html``;

    const { attributes } = stateObj;
    const isPlaying = getOrDefault(
      this._isPlaying,
      stateObj.state == "playing"
    );
    const isPaused = getOrDefault(this._isPaused, stateObj.state == "paused");
    const hasControlButton: boolean =
      (isPlaying || isPaused) && attributes.media_title;
    const volume = Math.round(this._volume * 100);
    const mediaTitle =
      attributes.media_title ??
      (getOrDefault(this._isPlaying, stateObj.state == "playing")
        ? localize("google_media_overlay.media_card.playing")
        : localize("google_media_overlay.media_card.no_content"));
    const mediaArtist = attributes.media_artist ?? "";
    const appName = attributes.app_name ?? "";
    const cover = attributes.entity_picture_local;
    const videoCardStyle = cover
      ? `background-image: url(${cover}); 
     background-size: cover; 
     background-position: center; 
     filter: brightness(0.4);` // scurisce l'immagine
      : "";
    const isOff = this._isOff;
    const theme = this.hass?.themes?.darkMode ? "dark" : "light";

    this._setStyleProperty(
      "--volume-brightness",
      theme == "dark" ? "brightness(0.7)" : "brightness(1.05)"
    );

    return html`
      <div class="overlay ${this._closing ? "closing" : ""}">
        <div class="header">
          <div class="header-left">
            <ha-icon-button @click=${this._close} class="close-btn">
              <ha-icon
                icon="m3rf:close"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Close"
              ></ha-icon>
            </ha-icon-button>

            <span class="friendly-name">${attributes.friendly_name}</span>
          </div>
          <div class="header-right">
            <ha-icon-button @click=${this._settings} class="settings-btn">
              <ha-icon
                icon="m3r:settings"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Settings"
              ></ha-icon>
            </ha-icon-button>
            <ha-icon-button @click=${this._moreInfo} class="settings-btn">
              <ha-icon
                icon="mdi:dots-vertical"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Menu"
              ></ha-icon>
            </ha-icon-button>
          </div>
        </div>

        <!-- Video Player Card -->
        <div class="video-card">
          <div class="video-card-bg" style="${videoCardStyle}"></div>
          ${_renderAppIcon(appName, cover)}
          
          ${
            isOff || !hasControlButton
              ? html``
              : html`<ha-icon
                  class="pause-button"
                  icon=${isPlaying ? "mdi:pause" : "mdi:play"}
                  @click=${(e: Event) => this._togglePlay(e)}
                  title=${isPlaying ? "Pause" : "Play"}
                  style=${`
                    ${isPlaying ? "" : "border-radius: 50px;"}
                    transition: width 1s ease-in-out, background-color 1s ease-in-out;
                    background-color: ${
                      stateObj.attributes.media_title
                        ? "var(--md-sys-color-tertiary-container)"
                        : "var(--md-sys-color-secondary-container)"
                    };
                    color: ${
                      stateObj.attributes.media_title
                        ? "var(--md-sys-color-on-tertiary-container)"
                        : "var(--md-sys-color-on-secondary-container)"
                    };
                  `}
                >
                </ha-icon>`
          }

          <div class="video-info">
            <div
              class="video-title ellipsis"
              style="${
                cover
                  ? "color: #e3e3e5;"
                  : "color: var(--md-sys-color-on-secondary-container)"
              }"
            >
              ${mediaTitle}
            </div>
            <div
              class="video-channel"
              style="${
                cover
                  ? "color: #e3e3e5;"
                  : "color: var(--md-sys-color-on-secondary-container)"
              }"
            >
              ${mediaArtist}
            </div>
          </div>

          <!-- Video Controls -->
          <div class="video-controls">
            <ha-icon
              class="${isOff || !hasControlButton ? "disabled" : ""}"
              style="cursor: pointer; ${
                cover
                  ? "color: #e3e3e5;"
                  : "color: var(--md-sys-color-on-secondary-container)"
              }"
              icon="m3r:skip-previous"
              @click=${() => this._callService("media_previous_track")}
            ></ha-icon>
            <div
              class="progress-bar ${isOff || !hasControlButton ? "disabled" : ""}"
              @mousedown=${this._startSeek}
              @touchstart=${this._startSeek}
            >
              <div
                class="progress-fill"
                style="width: ${this._progress}%; ${
                  cover
                    ? "background-color: #fff;"
                    : "background-color: var(--md-sys-color-on-secondary-container);"
                }"
              ></div>
              <div
                class="progress-thumb"
                style="left: calc(${this._progress}% - 6px); ${
                  cover
                    ? "background-color: #fff; border: 1px solid #fff;"
                    : "background-color: var(--md-sys-color-on-secondary-container); border: 1px solid var(--md-sys-color-on-secondary-container);"
                }""
              ></div>
            </div>
            <ha-icon
              class="${isOff || !hasControlButton ? "disabled" : ""}"
              style="cursor: pointer; ${
                cover
                  ? "color: #e3e3e5;"
                  : "color: var(--md-sys-color-on-secondary-container)"
              }"
              icon="m3r:skip-next"
              @click=${() => this._callService("media_next_track")}
            ></ha-icon>
          </div>
        </div>

        ${
          volume
            ? html`<div
                class="volume-card"
                @mousedown=${this._startDrag}
                @touchstart=${this._startDrag}
              >
                <div
                  id="slider"
                  class="animate"
                  style="width: ${this._volume * 100}%"
                ></div>
                <ha-icon class="volume-icon" icon="m3rf:volume-up"></ha-icon>
                <span class="volume-text" id="volumeText">${volume}%</span>
              </div>`
            : html``
        }

        <!-- Menu Cards -->
        <div class="menu-card remote" @click=${this._onRemoteClick}>
          <ha-icon icon="m3o:google-tv-remote"></ha-icon>
          <span class="menu-text"
            >${localize("google_media_overlay.remote")}</span
          >
        </div>

        ${
          isOff || !this._isConnected
            ? html`<div class="menu-card link" @click=${this._turnOnDevice}>
                <ha-icon icon="m3r:cast"></ha-icon>
                <span class="menu-text"
                  >${localize("google_media_overlay.cast")}</span
                >
              </div>`
            : html`<div
                class="menu-card cast"
                style="color: var(--md-sys-color-on-secondary-container)"
                @click=${this._stopCast}
              >
                <ha-icon icon="m3rf:cast"></ha-icon>
                <span class="menu-text"
                  >${localize("google_media_overlay.stop_cast")}</span
                >
              </div>`
        }
        ${
          appName == "YouTube" ||
          appName == "Spotify" ||
          appName == "Netflix" ||
          appName == "Prime Video"
            ? html`<div
                class="menu-card link"
                @click=${(e: Event) => this.openLinks(e, appName)}
              >
                <ha-icon icon="m3rf:open-in-new"></ha-icon>
                <span class="menu-text"
                  >${localize("google_media_overlay.open")} ${appName}</span
                >
              </div>`
            : html``
        }
        <div class="menu-card link" @click=${(e: Event) => this.openLinks(e, "Google")}>
          <ha-icon icon="m3of:home-app-logo"></ha-icon>
          <span class="menu-text"
            >${localize("google_media_overlay.open_google")}</span
          >
        </div>
      </div>
    `;
  }

  _setStyleProperty(
    name: string,
    value: any,
    transform = (value: any): string => value
  ): void {
    if (value !== undefined && value !== null && value !== "") {
      this.style.setProperty(name, transform(value));
    }
  }

  static styles = css`
    :host {
      -webkit-tap-highlight-color: transparent;
    }

    .overlay {
      font-family: "Google Sans", "Roboto", "Inter", sans-serif;
      position: fixed;
      inset: 0;
      /*background: var(--card-background-color, #121212);*/
      background: var(
        --view-background,
        var(--lovelace-background, var(--primary-background-color))
      );
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 14px; /* aggiornato */
      z-index: 9999;
      animation: fadeIn 0.3s ease;
      gap: 18px; /* spazio verticale tra blocchi */
    }

    .overlay.closing {
      animation: fadeOut 0.3s ease forwards;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .header-left .friendly-name {
      color: var(--primary-text-color);
      font-size: 20px;
      font-weight: 450;
    }

    .header-right {
      display: flex;
      gap: 10px;
    }

    .close-btn,
    .setting-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0; /* opzionale, riduce eventuali margini interni */
      width: 40px; /* puoi regolare la dimensione */
      height: 40px; /* così l'icona è perfettamente centrata */
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeOut {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;
        transform: translateY(20px);
      }
    }

    /* Video Player Card */
    .video-card {
      background-color: var(--md-sys-color-surface-container);
      border-radius: 28px;
      padding: 18px;
      position: relative;
      height: 160px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 500px;
      width: -webkit-fill-available;
    }

    .video-card-bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      filter: brightness(0.4);
      z-index: 0;
      border-radius: 28px;
    }

    .video-card-content {
      position: relative;
      z-index: 1;
    }

    .play-button {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 48px;
      height: 48px;
      background-color: rgba(29, 27, 32, 0.8);
      border-radius: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      cursor: pointer;
      font-size: 20px;
    }

    .pause-button {
      position: absolute;
      top: calc(50% - 24px);
      right: 20px;
      /*background-color: var(--md-sys-color-secondary-container);
      background-color: var(--md-sys-color-tertiary-container);*/
      border-radius: 12px;
      padding: 12px 12px;
      font-size: 24px;
      /*color: var(--md-sys-color-on-secondary-container)
      color: var(--md-sys-color-on-tertiary-container);*/
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
      cursor: pointer;
    }

    .video-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1; /* Aggiungi questo */
      min-width: 0; /* Necessario per evitare overflow nel flex */
      margin-top: 30px;
      margin-right: 70px;
      z-index: 1;
    }

    .ellipsis {
      white-space: nowrap; /* forza il testo su una sola riga */
      overflow: hidden; /* nasconde l'eccesso */
      text-overflow: ellipsis; /* mostra i "..." alla fine */
    }

    .video-title {
      font-size: 18px;
      font-weight: 500;
      /*color: #1d1b20;*/
      margin-bottom: 4px;
      line-height: 1.2;
    }

    .video-channel {
      font-size: 14px;
      color: #49454f;
      font-weight: 400;
    }

    .video-controls {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 24px;
    }

    .control-btn {
      font-size: 32px;
      color: #49454f;
      cursor: pointer;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .progress-bar {
      flex: 1;
      height: 2px;
      background-color: #ccc;
      border-radius: 50px;
      position: relative;
      cursor: pointer;
      margin: 0px 30px;
    }

    .progress-fill {
      height: 100%;
      /*background-color: #6750a4;
      background-color: var(--md-sys-color-on-secondary-container);*/
      width: 0%;
      transition: width 0s linear;
      border-radius: 50px 0px 0px 50px;
    }

    .progress-thumb {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: var(--md-sys-color-on-secondary-container);
      border: 1px solid var(--md-sys-color-on-secondary-container);
      pointer-events: none; /* il drag si gestisce sul parent */
    }

    /* Volume Card */
    .volume-card {
      background-color: var(--md-sys-color-secondary-container);
      border-radius: 50px;
      padding: 24px 18px;
      display: flex;
      align-items: center;
      gap: 16px;
      max-width: 500px;
      width: -webkit-fill-available;
      position: relative;
      overflow: hidden; /* importante per contenere l'overlay */
      z-index: 1;
      cursor: pointer; /* Aggiunto per indicare interattività */
    }

    /* overlay che schiarisce solo lo sfondo */
    .volume-card::before {
      content: "";
      position: absolute;
      inset: 0;
      background-color: var(--md-sys-color-secondary-container);
      filter: var(--volume-brightness); /* schiarisce solo il background */
      border-radius: inherit;
      z-index: 0; /* resta dietro */
    }

    /* contenuto sopra */
    .volume-card > * {
      position: relative;
      z-index: 1;
    }

    .volume-icon {
      color: var(--md-sys-color-on-secondary-container);
    }

    .volume-text {
      font-size: 16px;
      font-weight: 500;
      color: var(--md-sys-color-on-secondary-container);
    }

    #slider {
      height: 100%;
      position: absolute;
      background-color: var(--md-sys-color-secondary-container);
      z-index: 1; /* sopra lo sfondo schiarito */
      left: 0;
      top: 0;
      /*right: 50%;*/
      width: 0%;
      border-radius: 50px 0px 0px 50px;
    }

    #slider.animate {
      transition:
        width 0s ease,
        background-color 1s ease,
        filter 1s ease;
    }

    /* Menu Cards */
    .menu-card {
      /*margin-top: -20px;
      margin-bottom: -20px;
      margin: -20px 0px;*/
      border-radius: 14px;
      padding: 24px 18px;
      display: flex;
      align-items: center;
      gap: 16px;
      cursor: pointer;
      transition: all 0.2s ease;
      max-width: 500px;
      width: -webkit-fill-available;
    }

    .menu-card.remote {
      background-color: var(--md-sys-color-surface-container);
    }

    .menu-card.cast {
      background-color: var(--md-sys-color-secondary-container);
      border-radius: 50px;
    }

    .menu-card.link {
      background-color: var(--md-sys-color-surface-container);
    }

    .menu-text {
      font-size: 15px;
      font-weight: 410;
      letter-spacing: 0.1px;
    }

    .ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple-animation 600ms ease-out;
      background-color: rgba(255, 255, 255, 0.3);
      pointer-events: none;
    }

    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }

    .disabled,
    div.disabled,
    button:disabled,
    input:disabled,
    select:disabled,
    textarea:disabled {
      color: #888888 !important;
      cursor: not-allowed !important;
      opacity: 0.6 !important;
    }
  `;
}
