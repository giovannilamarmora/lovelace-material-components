import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localize } from "../../localize/localize";
import { getIcon } from "../../shared/mapper";
import {
  _excludeSensor,
  _handleMaxWidth,
  isDeviceStateOn,
  mapStateTitle,
  mapStateValue,
} from "../dialog-mapper";
import {
  _moreInfo,
  _moreInfoEntity,
  _onClose,
  _openDeviceInformation,
  _openRelated,
} from "../dialog-location";

@customElement("sensor-dialog")
export class SensorDialog extends LitElement {
  @property({ type: Object }) hass: any;
  @property({ type: Object }) config: any;
  @property({ type: Boolean }) open = false;

  render() {
    const entityId = this.config.entity;

    // Prendi il device_id dell'entità principale
    const device_id = this.hass.entities[entityId]?.device_id;
    const mainState = this.hass.states[entityId];

    // Trova tutte le entità associate allo stesso device
    const entityIds = Object.values(this.hass.entities)
      .filter((e: any) => e.device_id === device_id)
      .map((e: any) => e.entity_id);

    // Ottieni la lista completa degli state object
    const relatedStates = entityIds
      .map((id: string) => this.hass.states[id])
      .filter((s) => s !== undefined); // rimuove eventuali undefined

    // Ottieni informazioni sull'area
    const area_id = this.hass.devices[device_id]?.area_id;
    const area = this.hass.areas[area_id]?.name;

    const friendlyName =
      this.config.name ??
      mainState?.attributes?.friendly_name ??
      mainState?.entity_id;

    const theme = this.hass?.themes?.darkMode ? "dark" : "light";

    //const isDeviceTurnOn = isDeviceOn(mainState.state);
    const isDeviceTurnOn = isDeviceStateOn(mainState);

    const icon =
      getIcon(mainState, this.config, this.hass) ?? "m3r:sensors-krx";

    //const stateLabel = idDeviceTurnOn
    //  ? localize("common.open")
    //  : localize("common.closed");
    const stateLabel = mapStateValue(mainState);

    return html`
      <ha-dialog
        .open=${this.open}
        scrimClickAction=""
        escapeKeyAction="close"
        @click=${this._handleDialogClick}
      >
        <div class="header" @click=${() => _handleMaxWidth(this)}>
          <div class="header-left">
            <ha-icon-button @click=${() => _onClose(this)} class="close-btn">
              <ha-icon
                icon="m3rf:close"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Close"
              ></ha-icon>
            </ha-icon-button>

            <div class="header-title">
              ${area ? html`<p class="breadcrumb">${area}</p>` : html``}
              <p class="main-title">${friendlyName}</p>
            </div>
          </div>
          <div class="header-right">
            <ha-icon-button
              @click=${() => _moreInfo(this, this.config, this.hass)}
              class="settings-btn"
            >
              <ha-icon
                icon="m3r:insert-chart"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="History"
              ></ha-icon>
            </ha-icon-button>
            <!--<ha-icon-button @click="" class="settings-btn">
              <ha-icon
                icon="m3r:settings"
                style="color: var(--bsc-icon-color); justify-content: center; align-items: center; display: flex;"
                title="Settings"
              ></ha-icon>
            </ha-icon-button>-->
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

              <ha-list-item
                mwc-list-item
                @click=${() =>
                  _openDeviceInformation(this, this.config, this.hass)}
              >
                <ha-icon
                  icon="mdi:devices"
                  style="padding-right: 10px;"
                ></ha-icon>
                ${localize("common.info_device")}
              </ha-list-item>

              <ha-list-item
                mwc-list-item
                @click=${() => _openRelated(this, this.config, this.hass)}
              >
                <ha-icon icon="m3r:info" style="padding-right: 10px;"></ha-icon>
                ${localize("common.related")}
              </ha-list-item>
            </ha-button-menu>
          </div>
        </div>

        <!-- Contenuto -->
        <div class="content">
          <div style="display: flex; justify-content: center;">
            <div
              class="circle ${isDeviceTurnOn ? "present" : "absent"} ${theme}"
            >
              <div class="inner">
                <!--<ha-icon
                  icon=${isDeviceTurnOn
                  ? "m3rf:sensor-door"
                  : "m3r:sensor-door"}
                  style="color: var(--bsc-icon-color); --mdc-icon-size: 40px"
                  title="Sensore"
                ></ha-icon>-->
                <ha-icon
                  icon=${icon}
                  style="color: var(--bsc-icon-color); --mdc-icon-size: 40px"
                  title="Sensore"
                ></ha-icon>
                <div class="label">${friendlyName}</div>
                <div class="state">${stateLabel}</div>
              </div>
            </div>
          </div>

          <div class="menu-section">
            ${relatedStates.map((stateObj) => {
              /* If is a Precence Sensor, we do not put number device */
              if (_excludeSensor(stateObj)) return;
              const icon =
                getIcon(stateObj, this.config, this.hass) ?? "m3r:info";

              const entity_id = stateObj.entity_id;
              const entity = this.hass.entities[stateObj.entity_id];
              return html`
                <div
                  class="menu-card link ${theme} state"
                  @click=${() => _moreInfoEntity(entity_id, this, this.hass)}
                >
                  <ha-icon icon="${icon}"></ha-icon>
                  <span class="menu-text"
                    >${mapStateTitle(stateObj, entity)}</span
                  >
                  <span class="menu-text flex-end"
                    >${mapStateValue(stateObj)}</span
                  >
                </div>
              `;
            })}
          </div>
        </div>
      </ha-dialog>
    `;
  }

  private _menuOpen = false;

  /**
   * Prevent Cick outside the dialog to be close
   * @returns
   */
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
    _onClose(this);
  }

  static styles = css`
    ha-dialog {
      --mdc-dialog-min-width: 580px;
      --mdc-dialog-max-width: 580px;
      --mdc-dialog-max-height: calc(100% - 72px);
      --dialog-content-padding: 10px;
    }

    @media (min-width: 450px) {
      ha-dialog.large {
        --mdc-dialog-min-width: 90vw;
        --mdc-dialog-max-width: 90vw;
      }
    }

    /* Fullscreen mobile */
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

      .menu-card.link,
      .circle.absent {
        filter: brightness(1) !important;
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
      /*gap: 10px;*/
    }

    .header-left .friendly-name {
      color: var(--primary-text-color);
      font-size: 20px;
      font-weight: 450;
    }

    .header-right {
      display: flex;
      /*gap: 10px;*/
    }

    .header-title {
      margin-top: 2px;
    }

    .ellipsis {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
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
      /*padding: 40px 16px 0px 16px;*/
      padding: 40px 0px 0px 0px;
      margin-bottom: -30px;
    }

    ha-button-menu {
      display: flex;
      align-items: center;
    }

    .circle {
      width: 250px;
      height: 250px;
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
      border: 10px solid var(--md-sys-color-secondary-container);
      animation: pulse-outline 2s infinite;
    }

    /* Bordo inattivo */
    .circle.absent {
      border: 15px solid var(--md-sys-color-surface-container);
    }

    .circle.absent.light {
      filter: brightness(0.9);
    }

    /* Effetto pulsazione sul bordo */
    @keyframes pulse-outline {
      0% {
        box-shadow: 0 0 0 0
          var(--md-sys-color-secondary-container, rgba(76, 175, 80, 0.4));
      }
      70% {
        box-shadow: 0 0 0 10px
          var(--md-sys-color-secondary-container, rgba(76, 175, 80, 0));
      }
      100% {
        box-shadow: 0 0 0 0
          var(--md-sys-color-secondary-container, rgba(76, 175, 80, 0));
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

    /* ------------------------------------
    * Menu Cards
    * ------------------------------------ */
    .menu-section {
      margin: 40px 0px 20px 0px;
      justify-items: center;
    }

    .menu-card {
      margin-top: 10px;
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

    .menu-card.link {
      background-color: var(--md-sys-color-surface-container);
    }

    .menu-card.state {
      border-radius: 28px;
    }

    .menu-card.light {
      filter: brightness(0.9);
    }

    .menu-text {
      font-size: 15px;
      font-weight: 410;
      letter-spacing: 0.1px;
    }

    .flex-end {
      text-align: end;
      flex: auto;
      padding-right: 5px;
    }
    /* ------------------------------------
    * END Menu Cards
    * ------------------------------------ */
  `;
}
