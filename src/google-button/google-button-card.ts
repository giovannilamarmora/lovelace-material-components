import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { localize } from "../localize/localize";
import {
  ActionConfig,
  fireEvent,
  handleActionConfig,
} from "custom-card-helpers";
import { HomeAssistant } from "../ha-types";
import { applyRippleEffect } from "../animations";
import {
  ControlType,
  DEFAULT_BTN_CONFIG,
  DeviceType,
  getValidDeviceClass,
  GoogleButtonCardConfig,
} from "./google-button-const";
import { isDeviceOn, isNullOrEmpty, isOfflineState } from "../shared/utils";
import { google_color } from "../shared/color";
import { getIcon, getName, mapStateDisplay } from "../shared/mapper";
import { GoogleMediaOverlay } from "../google-media-overlay/google-media-overlay";
import { setColorCard } from "./google-button-mapper";

@customElement("google-button-card")
export class GoogleButtonCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: GoogleButtonCardConfig = DEFAULT_BTN_CONFIG;
  private color = google_color;

  public setConfig(config: GoogleButtonCardConfig): void {
    if (!config) {
      throw new Error(localize("common.invalid_configuration"));
    }

    // creiamo una copia mutabile
    const newConfig = { ...config };

    // se è app_version o action → rimuovi entity
    if (
      newConfig.control_type === ControlType.APP_VERSION ||
      newConfig.control_type === ControlType.ACTION
    ) {
      delete newConfig.entity;
    }

    this._config = newConfig;
  }

  public static getStubConfig(
    _hass: HomeAssistant,
    entities: string[]
  ): Partial<GoogleButtonCardConfig> {
    const switcher = entities
      .filter((entity) => entity.split(".")[0] === "switch")
      .sort();
    const randomSwitch = switcher[Math.floor(Math.random() * switcher.length)];
    return {
      type: "custom:google-button-card",
      entity: randomSwitch,
      icon: "mdi:switch",
      height: 97,
    };
  }

  static getCardSize() {
    return 1;
  }

  static async getConfigElement() {
    return document.createElement("google-button-card-editor");
  }

  protected updated(): void {
    requestAnimationFrame(() => {
      const wrapper = this.renderRoot.querySelector(".state-wrapper");
      const text = this.renderRoot.querySelector(".state");

      if (wrapper && text) {
        const needsScroll = text.scrollWidth > wrapper.clientWidth;

        if (needsScroll) {
          text.classList.add("scroll");
        } else {
          text.classList.remove("scroll");
        }
      }
    });
  }

  public _onClick(event: MouseEvent) {
    applyRippleEffect(event.currentTarget as HTMLElement, event);
    this._toggle();
  }
  private _toggle() {
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }

    if (!this._config || !this.hass) return;

    const entityId = this._config.entity;
    //if (!entityId) return;

    const domain = !entityId ? "" : entityId.split(".")[0];
    const controlType = this._config.control_type ?? ControlType.GENERIC;

    const toggleDomains = [
      "light",
      "switch",
      "fan",
      "climate",
      "input_boolean",
      "cover",
      "script",
    ];

    const isDefaultToggle = this._config.use_default_toggle ?? true;

    if (isDefaultToggle) {
      const isToggleable =
        toggleDomains.includes(domain) &&
        controlType != ControlType.THERMOMETER &&
        controlType != ControlType.MEDIA_PLAYER;

      if (isToggleable || controlType == ControlType.AUTOMATION) {
        return this.hass.callService("homeassistant", "toggle", {
          entity_id: entityId,
        });
      } else {
        if (
          domain === "media_player" ||
          controlType == ControlType.MEDIA_PLAYER
        ) {
          this._openMediaOverlay();
          return;
        }
        return fireEvent(this, "hass-more-info", { entityId });
      }
    }

    // Check if tap_action is defined and is an ActionConfig object
    if (
      this._config.tap_action &&
      typeof this._config.tap_action === "object"
    ) {
      // Use the new ActionConfig system
      handleActionConfig(
        this,
        this.hass as any,
        isNullOrEmpty(entityId) ? {} : { entity: entityId },
        this._config.tap_action as ActionConfig
      );
      return;
    }

    if (domain === "media_player" || controlType == ControlType.MEDIA_PLAYER) {
      this._openMediaOverlay();
      return;
    }

    return fireEvent(this, "hass-more-info", { entityId });
  }

  private _pressTimer?: number;
  private _startX?: number;
  private _startY?: number;
  private _moved = false;

  private _startPress(event: MouseEvent | TouchEvent) {
    this._cancelPress(); // elimina timer precedente se presente
    this._moved = false;

    if (
      // as of 2025, TouchEvent constructor is not available in Firefox and Safari
      typeof TouchEvent !== "undefined" &&
      event instanceof TouchEvent &&
      event.touches.length > 0
    ) {
      this._startX = event.touches[0].clientX;
      this._startY = event.touches[0].clientY;
    } else if (event instanceof MouseEvent) {
      this._startX = event.clientX;
      this._startY = event.clientY;
    }

    this._pressTimer = window.setTimeout(() => {
      this._pressTimer = undefined;
      if (!this._moved) {
        this._handleHold();
      }
    }, 500);
  }

  private _handleMove(event: TouchEvent) {
    if (!this._startX || !this._startY || event.touches.length === 0) return;

    const moveX = event.touches[0].clientX;
    const moveY = event.touches[0].clientY;

    const deltaX = Math.abs(moveX - this._startX);
    const deltaY = Math.abs(moveY - this._startY);

    if (deltaX > 10 || deltaY > 10) {
      this._moved = true;
      this._cancelPress(); // annulla il timer
    }
  }

  private _cancelPress(event?: MouseEvent | TouchEvent) {
    if (this._pressTimer) {
      clearTimeout(this._pressTimer);
      this._pressTimer = undefined;
      if (!this._moved && event instanceof MouseEvent) {
        this._onClick(event); // solo click "buoni"
      }
    }
  }

  private _handleHold() {
    // Feedback tattile (se supportato)
    navigator.vibrate?.(50);

    // Se la configurazione o Home Assistant non sono disponibili, esci
    if (!this._config || !this.hass) return;

    const entityId = this._config.entity;
    const controlType = this._config.control_type ?? "generic";
    const useDefaultToggle = this._config.use_default_toggle ?? true;

    // Se non è definito un entityId, esci
    if (!entityId) return;

    const domain = entityId.split(".")[0];
    const toggleDomains = [
      "light",
      "switch",
      "fan",
      "climate",
      "input_boolean",
      "cover",
      "script",
    ];

    const toggleEntity = toggleDomains.includes(domain);
    const isMediaPlayer = controlType === ControlType.MEDIA_PLAYER;

    if (useDefaultToggle) {
      // Se il dominio supporta il toggle o non è un media_player, mostra le info
      if (toggleEntity || !isMediaPlayer) {
        fireEvent(this, "hass-more-info", { entityId });
      } else {
        // Altrimenti esegui toggle
        this.hass.callService("homeassistant", "toggle", {
          entity_id: entityId,
        });
      }
    } else {
      // Check if hold_action is defined and is an ActionConfig object
      if (
        this._config.hold_action &&
        typeof this._config.hold_action === "object"
      ) {
        // Use the new ActionConfig system
        handleActionConfig(
          this,
          this.hass as any,
          { entity: entityId },
          this._config.hold_action as ActionConfig
        );
        return;
      }
    }
  }

  _openMediaOverlay() {
    const overlay = document.createElement(
      "google-media-overlay"
    ) as GoogleMediaOverlay;

    overlay.hass = this.hass;
    overlay.entity = this._config.entity!;

    // Riferimento reattivo
    const updateHass = () => {
      if (!overlay) {
        // Non è possibile aggiornare un elemento che non esiste
        return;
      }

      overlay.hass = this.hass;
      overlay.requestUpdate();
    };

    // ogni volta che il componente padre si aggiorna, chiama updateHass
    const observer = new MutationObserver(updateHass);
    observer.observe(this, {
      attributes: true,
      childList: false,
      subtree: false,
    });

    overlay.addEventListener("close-overlay", () => {
      observer.disconnect();
      overlay.remove();
    });

    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.zIndex = "9999";
    document.body.appendChild(overlay);
  }

  protected render(): TemplateResult {
    if (!this._config || !this.hass) return html``;

    const stateObj = this.hass.states[this._config.entity!];
    if (
      this._config.control_type != ControlType.APP_VERSION &&
      this._config.control_type != ControlType.ACTION
    ) {
      if (!stateObj) {
        return html`<ha-card
          ><div class="warning">${localize("common.no_entity")}</div></ha-card
        >`;
      }
    }

    let isOn: boolean = false;
    let name: string = this._config.name ?? "";
    let icon: string = this._config.icon ?? "";
    let isOffline: boolean = false;
    let device_class: DeviceType = DeviceType.NONE;
    let stateDisplay: string;
    const default_text = this._config.use_default_text ?? true;
    //let isConditioner: boolean = false;
    if (
      this._config.control_type != ControlType.APP_VERSION &&
      this._config.control_type != ControlType.ACTION
    ) {
      isOn = isDeviceOn(stateObj.state);

      //const domain = this._config.entity!.split(".")[0];
      name = getName(this._config, this.hass);

      icon = getIcon(stateObj, this._config, this.hass);

      isOffline = isOfflineState(stateObj.state, this._config.control_type!);
      device_class = getValidDeviceClass(stateObj.attributes)!;

      //isConditioner = isAirConditioning(stateObj.attributes.hvac_modes);
    }

    //let icon = "";
    //if (this._config.icon && this._config.icon.trim() !== "") {
    //  icon = this._config.icon;
    //} else if (
    //  stateObj.attributes.icon &&
    //  stateObj.attributes.icon.trim() !== ""
    //) {
    //  icon = stateObj.attributes.icon;
    //} else {
    //  icon = `mdi:${domain}`;
    //}

    const theme = this.hass?.themes?.darkMode ? "dark" : "light";

    if (default_text) {
      stateDisplay =
        this._config.control_type != ControlType.ACTION
          ? mapStateDisplay(
              stateObj,
              this._config.control_type!,
              isOffline,
              this._config.fix_temperature,
              device_class == DeviceType.MOTION
            )
          : "";
    } else {
      if (isOn) stateDisplay = this._config.text_on!;
      else stateDisplay = this._config.text_off!;

      if (isOfflineState(stateObj.state)) {
        stateDisplay = localize("common.offline");
      }
    }

    const domain = !isNullOrEmpty(stateObj)
      ? stateObj.entity_id.split(".")[0]
      : null;

    const isButtonControl =
      this._config.control_type == ControlType.GENERIC &&
      domain == "button" &&
      (this._config.use_default_text ||
        isNullOrEmpty(this._config.use_default_text));

    const state = stateObj && stateObj.state ? stateObj.state : "unavaiable";
    setColorCard(this.style, this._config, isOffline, isOn, theme, state);

    //this.setColorCard(
    //  this._config.control_type,
    //  theme,
    //  isOffline,
    //  isOn,
    //  isConditioner
    //);

    return html`
      <ha-card
        class="google-button ${isOn ? "on" : "off"}"
        @mousedown=${this._startPress}
        @touchstart=${this._startPress}
        @mouseup=${this._cancelPress}
        @mouseleave=${this._cancelPress}
        @touchend=${this._cancelPress}
        @touchcancel=${this._cancelPress}
        @touchmove=${this._handleMove}
        style="${isOffline ||
        this._config.control_type == ControlType.THERMOMETER ||
        this._config.control_type == ControlType.MEDIA_PLAYER
          ? "padding: 12px 35px 12px 12px"
          : "padding: 12px 12px"}"
      >
        <div class="content">
          <ha-icon .icon=${icon} class="icon"></ha-icon>
          <div class="text">
            <div class="name ellipsis">${name}</div>
            ${device_class == DeviceType.MEASUREMENT ||
            (this._config.control_type == ControlType.SCENE && default_text) ||
            (this._config.control_type == ControlType.MEDIA_PLAYER && !isOn) ||
            this._config.control_type == ControlType.ACTION ||
            isButtonControl
              ? html``
              : html`<div class="state-wrapper">
                  <div class="state">${stateDisplay}</div>
                </div>`}
          </div>
        </div>
        ${isOffline
          ? html`<ha-icon
              id="icon_offline"
              icon="m3rf:warning"
              style="position: absolute; right: 13px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color); --mdc-icon-size: 20px;"
              title="Offline"
            ></ha-icon>`
          : this._config.control_type == ControlType.THERMOMETER ||
              this._config.control_type == ControlType.MEDIA_PLAYER ||
              this._config.control_type == ControlType.ACTION ||
              this._config.control_type == ControlType.STATE
            ? html`<ha-icon
                icon="m3rf:arrow-forward-ios"
                style="
                  position: absolute;
                  right: 5%;
                  top: 50%;
                  transform: translateY(-50%);
                  color: var(--bsc-icon-color);
                  --mdc-icon-size: 15px;
                "
                title="Enter"
                class="chevron"
              ></ha-icon>`
            : html``}
      </ha-card>
    `;
  }

  private setColorCard(
    control_type: any,
    theme: string,
    isOffline: boolean,
    isOn: boolean,
    isConditioner: boolean
  ) {
    let nameColor = "";
    let iconColor = "";
    let percentageColor = "";
    let containerColor = "";
    if (isOffline) {
      // Offline, tema light
      if (theme === "light") {
        nameColor = this.color.light.offline.button.title;
        iconColor = this.color.light.offline.button.icon;
        percentageColor = this.color.light.offline.button.percentage;
        containerColor = this.color.light.offline.button.background;
      } else {
        // Offline, tema dark
        nameColor = this.color.dark.offline.button.title;
        iconColor = this.color.dark.offline.button.icon;
        percentageColor = this.color.dark.offline.button.percentage;
        containerColor = this.color.dark.offline.button.background;
      }
    } else if (isOn) {
      // Acceso, tema dark
      if (theme === "dark") {
        if (control_type === "thermometer" && this._config.use_material_color) {
          if (isConditioner) {
            nameColor = this.color.dark.on.climate.material_cool.title;
            iconColor = this.color.dark.on.climate.material_cool.icon;
            percentageColor = this.color.dark.on.climate.material_cool.subtitle;
            containerColor =
              this.color.dark.on.climate.material_cool.background;
          } else {
            nameColor = this.color.dark.on.climate.material.title;
            iconColor = this.color.dark.on.climate.material.icon;
            percentageColor = this.color.dark.on.climate.material.subtitle;
            containerColor = this.color.dark.on.climate.material.background;
          }
        } else {
          nameColor = this.color.dark.on.button.title;
          iconColor = this.color.dark.on.button.icon;
          percentageColor = this.color.dark.on.button.percentage;
          containerColor = this.color.dark.on.button.background;
        }
      } else {
        // Acceso, tema light
        if (control_type === "thermometer" && this._config.use_material_color) {
          if (isConditioner) {
            nameColor = this.color.light.on.climate.material_cool.title;
            iconColor = this.color.light.on.climate.material_cool.icon;
            percentageColor =
              this.color.light.on.climate.material_cool.subtitle;
            containerColor =
              this.color.light.on.climate.material_cool.background;
          } else {
            nameColor = this.color.light.on.climate.material.title;
            iconColor = this.color.light.on.climate.material.icon;
            percentageColor = this.color.light.on.climate.material.subtitle;
            containerColor = this.color.light.on.climate.material.background;
          }
        } else {
          nameColor = this.color.light.on.button.title;
          iconColor = this.color.light.on.button.icon;
          percentageColor = this.color.light.on.button.percentage;
          containerColor = this.color.light.on.button.background;
        }
      }
    } else {
      // Spento, tema dark
      if (theme === "dark") {
        nameColor = this.color.dark.off.button.title;
        iconColor = this.color.dark.off.button.icon;
        percentageColor = this.color.dark.off.button.percentage;
        containerColor = this.color.dark.off.button.background;
      } else {
        // Spento, tema light
        nameColor = this.color.light.off.button.title;
        iconColor = this.color.light.off.button.icon;
        percentageColor = this.color.light.off.button.percentage;
        containerColor = this.color.light.off.button.background;
      }
    }

    this._setStyleProperty("--bsc-name-color", nameColor);
    this._setStyleProperty("--bsc-icon-color", iconColor);
    this._setStyleProperty("--bsc-percentage-color", percentageColor);
    this._setStyleProperty("--bsc-background", containerColor);
    this._setStyleProperty(
      "--bsc-height",
      this._config.height || 97,
      (h) => `${h}px`
    );
    this._setStyleProperty("--bsc-border-radius", this._config.border_radius);
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
      --bsc-height: var(--ha-card-height, 97px);
      --bsc-border-radius: var(--ha-card-border-radius);
    }

    ha-card.google-button {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 12px 12px;
      border-radius: var(--bsc-border-radius, 28px);
      background: var(--bsc-background);
      transition:
        background-color 0.3s ease,
        color 0.3s ease;
      height: var(--bsc-height);
      overflow: hidden; /* fondamentale per contenere il ripple */
      box-shadow:
        0px 0.5px 1px rgba(0, 0, 0, 0.05),
        0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
      -webkit-tap-highlight-color: transparent;
    }

    .content {
      display: flex;
      align-items: center;
      width: 100%;
    }

    .icon {
      width: 34px;
      height: 34px;
      color: var(--bsc-icon-color);
      align-content: center;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1; /* Aggiungi questo */
      min-width: 0; /* Necessario per evitare overflow nel flex */
    }

    .name {
      color: var(--bsc-name-color);
      font-size: 15px;
      font-weight: 550;
      line-height: 1.35;
    }

    .ellipsis {
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .state {
      font-size: 13px;
      color: var(--bsc-percentage-color);
      font-weight: 500;
    }

    .state-wrapper {
      overflow: hidden;
      position: relative;
      max-width: 100%; /* Cambia da 170px */
    }

    .state {
      display: inline-block;
      white-space: nowrap;
    }

    .state.scroll {
      animation: scroll-text 8s linear infinite;
    }

    @keyframes scroll-text {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }

    .warning {
      padding: 16px;
      color: red;
      font-weight: bold;
    }

    @media (max-width: 420px) {
      /*.name,
      .state {
        font-size: small;
      }
      .name {
        line-height: 1.4;
      }*/
      #icon_offline {
        right: 15px;
      }
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
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "google-button-card": GoogleButtonCard;
  }
}
