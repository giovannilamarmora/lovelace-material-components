import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("presence-sensor-dialog")
export class PresenceSensorDialog extends LitElement {
  @property({ type: Object }) hass: any;
  @property({ type: String }) entityId: any;
  @property({ type: Boolean }) open = false;

  static styles = css`
    ha-dialog {
      --mdc-dialog-min-width: 580px;
      --mdc-dialog-max-width: 580px;
      --mdc-dialog-max-height: calc(100% - 72px);
      --dialog-content-padding: 10px;
    }

    /* Fullscreen mobile 
    @media (max-width: 600px) {*/
    @media (max-width: 450px) {
      ha-dialog {
        --mdc-dialog-min-width: 100vw;
        --mdc-dialog-max-width: 100vw;
        --mdc-dialog-min-height: 100vh;
        --mdc-dialog-max-height: 100vh;
        --mdc-dialog-scrim-color: rgba(0, 0, 0, 0.5);
        --ha-dialog-border-radius: 0px;
      }
      ha-dialog > * {
        height: 100%;
        overflow-y: auto;
      }
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

    .breadcrumb {
      font-size: 12px;
      color: var(--secondary-text-color, #888);
      margin: 0;
    }

    .main-title {
      font-weight: 500;
      font-size: 18px;
      margin: 0;
    }

    .content {
      padding: 16px;
    }

    ha-button-menu {
      display: flex;
      align-items: center;
    }

    .circle {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: all 0.4s ease;
      text-align: center;
      overflow: hidden;
    }

    /* Bordo attivo */
    .circle.present {
      border: 4px solid var(--presence-color, #4caf50);
      box-shadow: 0 0 20px 3px rgba(76, 175, 80, 0.4);
      animation: pulse-outline 2s infinite;
    }

    /* Bordo inattivo */
    .circle.absent {
      border: 10px solid var(--md-sys-color-secondary-container);
      opacity: 0.5;
    }

    /* Effetto pulsazione sul bordo */
    @keyframes pulse-outline {
      0% {
        box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4);
      }
      70% {
        box-shadow: 0 0 0 12px rgba(76, 175, 80, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
      }
    }

    /* Contenuto interno */
    .inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; /* Testo in basso */
      height: 100%;
      width: 100%;
      box-sizing: border-box;
    }

    .circle ha-icon {
      margin-bottom: 8px;
    }

    .circle.absent ha-icon {
      color: var(--disabled-color, #888);
    }

    .label {
      font-size: 16px;
      color: var(--primary-text-color);
      font-weight: 500;
      line-height: 1.2;
    }

    .state {
      font-size: 13px;
      color: var(--secondary-text-color);
      text-transform: capitalize;
    }
  `;

  render() {
    const entityId = this.entityId;
    const entity = this.hass.states[entityId];
    const friendlyName = entity?.attributes?.friendly_name ?? entity?.entity_id;
    const domain = entity?.entity_id?.split(".")[0] ?? "";

    const isHome =
      entity.state === "home" ||
      entity.state === "on" ||
      entity.state === "present" ||
      entity.state === "true" ||
      entity.state === "detected";

    const stateLabel = isHome ? "Presente" : "Assente";

    return html`
      <ha-dialog
        .open=${this.open}
        scrimClickAction=""
        escapeKeyAction="close"
        @click=${this._handleDialogClick}
      >
        <div class="header">
          <div class="header-left">
            <ha-icon-button @click=${this._onClose} class="close-btn">
              <ha-icon
                icon="m3rf:close"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Close"
              ></ha-icon>
            </ha-icon-button>

            <div class="header-title">
              <p class="breadcrumb">${domain}</p>
              <p class="main-title">${friendlyName}</p>
            </div>
          </div>
          <div class="header-right">
            <ha-icon-button @click=${this._openSettings} class="settings-btn">
              <ha-icon
                icon="m3r:settings"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Settings"
              ></ha-icon>
            </ha-icon-button>
            <!-- Menu dropdown -->
            <ha-button-menu
              corner="BOTTOM_END"
              menu-corner="END"
              fixed
              @click=${(e: Event) => e.stopPropagation()}
              @opened=${() => (this._menuOpen = true)}
              @closed=${() => (this._menuOpen = false)}
            >
              <ha-icon-button slot="trigger"
                ><ha-icon
                  icon="mdi:dots-vertical"
                  style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                  title="Menu"
                ></ha-icon
              ></ha-icon-button>

              <ha-list-item mwc-list-item @click=${this._openInfo}>
                <ha-icon icon="mdi:information"></ha-icon>
                Informazioni Dispositivo
              </ha-list-item>

              <ha-list-item mwc-list-item @click=${this._openRelated}>
                <ha-icon slot="graphic" icon="mdi:link"></ha-icon>
                Correlato
              </ha-list-item>
            </ha-button-menu>
          </div>
        </div>

        <!-- Contenuto -->
        <div class="content">
          <div style="display: flex; justify-content: center;">
            <div class="circle ${isHome ? "present" : "absent"}">
              <div class="inner">
                <ha-icon
                  icon=${isHome ? "m3rf:sensors-krx" : "m3r:sensors-krx"}
                  style="color: var(--bsc-icon-color); --mdc-icon-size: 40px"
                  title="Sensore"
                ></ha-icon>
                <div class="label">${friendlyName}</div>
                <div class="state">${stateLabel}</div>
              </div>
            </div>
          </div>

          <p><b>Temperatura:</b> ${entity?.state}°C</p>
          <p><b>Umidità:</b> ${entity?.attributes?.humidity ?? "-"}%</p>
        </div>
      </ha-dialog>
    `;
  }

  private _menuOpen = false;

  private _handleDialogClick(e: MouseEvent) {
    // Se il menu è aperto → ignora il click (non chiudere)
    if (this._menuOpen) return;

    // Recupera il dialog
    const dialog = this.shadowRoot?.querySelector("ha-dialog");
    if (!dialog) return;

    // Se clicchi dentro il contenuto del dialog → non chiudere
    const path = e.composedPath();
    const contentClicked =
      path.includes(
        dialog.shadowRoot!.querySelector(".mdc-dialog__container")!
      ) || path.includes(this.shadowRoot!.querySelector(".content")!);

    if (contentClicked) return;

    // Se sei arrivato qui, hai cliccato davvero fuori
    this._onClose();
  }

  private _onClose() {
    this.open = false;
    this.dispatchEvent(
      new CustomEvent("close-dialog", { bubbles: true, composed: true })
    );
    this.remove();
  }

  private _openHistory() {
    const entityId = this.entityId;
    if (!entityId || !this.hass) return;
    console.log("Apri storico per", entityId);
    // Puoi aprire un pannello storico custom qui
  }

  private _openSettings() {
    const domain = this.entityId?.split(".")[0];
    if (!domain || !this.hass) return;
    console.log("Apri impostazioni per", domain);
    // Puoi navigare al pannello config del domain
  }

  private _openInfo() {
    const entityId = this.entityId;
    if (!entityId) return;
    console.log("Apri informazioni dispositivo per", entityId);
    // Qui puoi aprire il more-info nativo o un pannello custom
  }

  private _openRelated() {
    const entityId = this.entityId;
    if (!entityId) return;
    console.log("Apri correlato per", entityId);
    // Qui puoi mostrare entità correlate o link ad altre pagine
  }
}
