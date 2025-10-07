import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("template-dialog")
export class TemplateDialog extends LitElement {
  @property({ type: Object }) hass: any;
  @property({ type: String }) entityId: any;
  @property({ type: Boolean }) open = false;

  static styles = css`
    ha-dialog {
      --mdc-dialog-min-width: 400px;
      --mdc-dialog-max-width: 600px;
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
  `;

  render() {
    const entityId = this.entityId;
    const entity = this.hass.states[entityId];
    const friendlyName = entity?.attributes?.friendly_name ?? entity?.entity_id;
    const domain = entity?.entity_id?.split(".")[0] ?? "";

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
