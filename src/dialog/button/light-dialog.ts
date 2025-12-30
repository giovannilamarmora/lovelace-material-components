import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { isDeviceStateOn, mapStateValue } from "../dialog-mapper";
import { DomainType, LabelType } from "../../shared/types";
import {
  dialogBaseStyles,
  dialogHeaderStyles,
  dialogStatesStyles,
  renderDialogHeader,
  renderDialogRelatedStates,
} from "../dialog-shared";
import { isOfflineState } from "../../shared/states";
import { _handleDialogClick } from "../dialog-location";

@customElement("light-dialog")
export class LightDialog extends LitElement {
  @property({ type: Object }) hass: any;
  @property({ type: Object }) config: any;
  @property({ type: Boolean }) open = false;
  @property({ type: Boolean }) optimisticState: boolean | null = null;
  @property({ type: Boolean }) private toggling = false;

  toggleEntity = (e?: Event) => {
    e?.preventDefault();
    e?.stopPropagation();

    if (this.toggling) return;

    const entityId = this.config.entity;
    const hassState = this.hass.states[entityId];

    const current = this.optimisticState ?? isDeviceStateOn(hassState);

    const next = !current;

    // UI immediata
    this.optimisticState = next;
    this.toggling = true;
    this.requestUpdate();

    // Chiamata deterministica (più veloce del toggle)
    this.hass.callService("homeassistant", next ? "turn_on" : "turn_off", {
      entity_id: entityId,
    });
  };

  updated(changedProperties: Map<string, any>) {
    if (!changedProperties.has("hass")) return;
    if (this.optimisticState === null) return;

    const entityId = this.config.entity;
    const realState = isDeviceStateOn(this.hass.states[entityId]);

    if (realState === this.optimisticState) {
      this.optimisticState = null;
      this.toggling = false;
    }
  }

  render() {
    const entityId = this.config.entity;
    const domain = !entityId ? "" : entityId.split(".")[0];

    // Prendi il device_id dell'entità principale
    const mainEntity = this.hass.entities[entityId];
    const device_id = mainEntity?.device_id;
    const mainState = this.hass.states[entityId];
    const showAllDeviceEnabled =
      !mainEntity.labels.includes(LabelType.HELPER) &&
      !mainEntity.labels.includes(LabelType.TEMPLATE) &&
      domain !== DomainType.AUTOMATION;

    let entityIds: any;
    let relatedStates: any = [mainState];

    if (showAllDeviceEnabled) {
      // Trova tutte le entità associate allo stesso device
      entityIds = Object.values(this.hass.entities)
        .filter((e: any) => e.device_id === device_id)
        .filter((s: any) => !s.labels?.includes(LabelType.DIALOG_HIDDEN))
        .map((e: any) => e.entity_id);

      // Ottieni la lista completa degli state object
      relatedStates = entityIds
        .map((id: string) => this.hass.states[id])
        .filter((s: any) => s !== undefined); // rimuove eventuali undefined
    }
    
    const friendlyName =
      this.config.name?.trim() ||
      mainEntity?.name?.trim() ||
      mainState?.attributes?.friendly_name?.trim();

    const theme = this.hass?.themes?.darkMode ? "dark" : "light";

    const isDeviceTurnOn =
      this.optimisticState !== null
        ? this.optimisticState
        : isDeviceStateOn(mainState);

    const stateLabel = mapStateValue(mainState);

    const isOnlyMainEntity =
      relatedStates.length === 1 &&
      (mainEntity.labels.includes(LabelType.HELPER) ||
        mainEntity.labels.includes(LabelType.TEMPLATE));

    // Variabile per capire se siamo su mobile
    const isMobile = window.innerWidth <= 450; // Esempio di breakpoint per mobile
    const isDeviceOffline = isOfflineState(mainState.state);

    return html`
      <ha-dialog
        .open=${this.open}
        scrimClickAction=""
        escapeKeyAction="close"
        hideActions
        @click=${(e: MouseEvent) => _handleDialogClick(this, e)}
      >
        ${renderDialogHeader(this, this.config, this.hass, friendlyName)}

        <!-- Contenuto -->
        <div
          class="content"
          style="${isOnlyMainEntity && isMobile
            ? "height: calc(100vh - 70px); align-content: center;"
            : "padding: 40px 0px 0px 0px;"}"
        >
          <div class="toggle-container">
            <div
              class="google-toggle ${isDeviceTurnOn
                ? "on"
                : "off"} ${theme} ${isDeviceOffline ? "offline" : ""}"
              @click=${isDeviceOffline ? undefined : this.toggleEntity}
            >
              <div class="slider-track">
                ${isDeviceOffline
                  ? html`
                      <ha-icon
                        icon="m3rf:warning"
                        style="position: absolute; right: calc(50% - 20px); bottom: 20px; --mdc-icon-size: 40px;"
                      ></ha-icon>
                    `
                  : html`
                      <div class="slider-thumb">
                        <ha-icon icon="m3r:power-settings-new"></ha-icon>
                      </div>
                    `}
              </div>
            </div>
            <div class="toggle-info">
              <div class="label">${friendlyName}</div>
              <div class="state">${stateLabel}</div>
            </div>
          </div>

          ${renderDialogRelatedStates(
            this,
            this.config,
            this.hass,
            entityId,
            theme,
            relatedStates
          )}
        </div>
      </ha-dialog>
    `;
  }

  static styles = [
    dialogBaseStyles,
    dialogHeaderStyles,
    dialogStatesStyles,
    css`
      .content {
        /*padding: 40px 16px 0px 16px;
        padding: 40px 0px 0px 0px;*/
        /*margin-bottom: -30px;*/
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
     * Google Style Toggle
     * ------------------------------------ */
      .google-toggle,
      .content {
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        user-select: none;
        touch-action: manipulation;
      }

      .toggle-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        margin-bottom: 20px;
      }

      .google-toggle {
        position: relative;
        width: 160px;
        height: 320px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;

        transition: border-radius 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        overflow: hidden;
      }

      .google-toggle::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 0;

        opacity: 0;
        transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .google-toggle::before {
        transition:
          opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1),
          filter 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .google-toggle.offline {
        cursor: not-allowed;
        opacity: 0.6;
      }

      /** Off Styles **/

      .google-toggle.off {
        border-radius: 30px;
      }

      .google-toggle.off.dark::before {
        background-color: var(--md-sys-color-surface-container-high, #f0f0f5);
        filter: brightness(1.2);
        opacity: 1;
      }

      .google-toggle.off.light::before {
        background-color: var(--md-sys-color-surface-container-light, #f0f0f5);
        opacity: 1;
      }

      @media (min-width: 450px) {
        .google-toggle.off.light {
          filter: brightness(0.95);
        }
      }

      /** On Styles **/
      .google-toggle.on {
        border-radius: 100px;
      }

      .google-toggle.on.light::before {
        background-color: #feefc8;
        opacity: 1;
      }

      .google-toggle.on.dark::before {
        background-color: #333029;
        opacity: 1;
      }

      /* Track */
      .slider-track,
      .slider-thumb {
        position: relative;
        z-index: 1;
      }

      .slider-track {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
      }

      /* Thumb */
      .slider-thumb {
        position: absolute;
        left: 0;
        width: 100%;
        height: 48%;
        display: flex;
        align-items: center;
        justify-content: center;

        transition:
          transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
          border-radius 0.35s cubic-bezier(0.4, 0, 0.2, 1);

        will-change: transform, border-radius;
      }

      /* OFF → thumb in basso */
      .google-toggle.off .slider-thumb {
        transform: translateY(110%);
      }

      /* ON → thumb in alto */
      .google-toggle.on .slider-thumb {
        transform: translateY(0%);
      }

      .google-toggle.off.light .slider-thumb {
        background-color: var(--md-sys-color-surface-container-highest);
        border-radius: 30px;
      }

      .google-toggle.off.dark .slider-thumb {
        background-color: var(--md-sys-color-surface-container-dark);
        border-radius: 30px;
      }

      .google-toggle.on .slider-thumb {
        border-radius: 50%;
      }

      .google-toggle.on.light .slider-thumb {
        background-color: #ffe083;
      }

      .google-toggle.on.dark .slider-thumb {
        background-color: #50472a;
      }

      .slider-thumb ha-icon {
        --mdc-icon-size: 45px;
      }

      .google-toggle.on.light .slider-thumb ha-icon {
        color: #745b00;
      }

      .google-toggle.on.dark .slider-thumb ha-icon {
        color: #ffe083;
      }

      .toggle-info {
        text-align: center;
      }
    `,
  ];
}
