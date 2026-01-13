import { html, css } from "lit";
import {
  _moreInfo,
  _moreInfoEntity,
  _onClose,
  _openDeviceInformation,
  _openRelated,
} from "./dialog-location";
import {
  _excludeSensor,
  _handleMaxWidth,
  mapStateTitle,
  mapStateValue,
} from "./dialog-mapper";
import { localize } from "../localize/localize";
import { getIcon } from "../shared/mapper";
import { DomainType } from "../shared/types";
import { getActionState, runAutomation } from "./dialog-automation";

/**
 * Render header comune per i dialog
 */
export const renderDialogHeader = (
  _this: any,
  config: any,
  hass: any,
  friendlyName: string
) => {
  const entityId = config.entity;

  // Prendi il device_id dell'entità principale
  const mainEntity = hass.entities[entityId];
  const device_id = mainEntity?.device_id;
  //const mainState = hass.states[entityId];

  // Ottieni informazioni sull'area
  const area_id = hass.devices[device_id]?.area_id;
  const area = hass.areas[area_id]?.name;

  //const friendlyName =
  //  config.name ?? mainState?.attributes?.friendly_name ?? mainEntity?.name;
  //const friendlyName =
  //  config.name?.trim() ||
  //  mainEntity?.name?.trim() ||
  //  mainState?.attributes?.friendly_name?.trim();

  return html`
    <div class="header" @click=${() => _handleMaxWidth(_this)}>
      <div class="header-left">
        <ha-icon-button @click=${() => _onClose(_this)} class="close-btn">
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
          @click=${() => _moreInfo(_this, config, hass)}
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
          @opened=${() => (_this._menuOpen = true)}
          @closed=${() => (_this._menuOpen = false)}
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
            @click=${() => _openDeviceInformation(_this, config, hass)}
          >
            <ha-icon icon="mdi:devices" style="padding-right: 10px;"></ha-icon>
            ${localize("common.info_device")}
          </ha-list-item>

          <ha-list-item
            mwc-list-item
            @click=${() => _openRelated(_this, config, hass)}
          >
            <ha-icon icon="m3r:info" style="padding-right: 10px;"></ha-icon>
            ${localize("common.related")}
          </ha-list-item>
        </ha-button-menu>
      </div>
    </div>
  `;
};

/** Render stati correlati nel dialog */
export const renderDialogRelatedStates = (
  _this: any,
  config: any,
  hass: any,
  entityId: string,
  theme: string,
  relatedStates: any[]
) => {
  const domain = !entityId ? "" : entityId.split(".")[0];
  const isAutomation = domain === DomainType.AUTOMATION;
  return html`<div class="menu-section">
    ${relatedStates.map((stateObj: any) => {
      /* If is a Precence Sensor, we do not put number device */
      if (_excludeSensor(stateObj)) return;
      /* Do not show the main entity again */
      if (stateObj.entity_id === entityId && !isAutomation) return;
      const icon = getIcon(stateObj, config, hass) ?? "m3r:info";

      const entity_id = stateObj.entity_id;
      const entity = hass.entities[stateObj.entity_id];
      return html`
        <div
          class="menu-card link ${theme} state"
          @click=${() => _moreInfoEntity(entity_id, _this, hass)}
        >
          <ha-icon icon="${icon}"></ha-icon>
          <span class="menu-text">${mapStateTitle(stateObj, entity)}</span>
          ${!isAutomation
            ? html`<span class="menu-text flex-end"
                >${mapStateValue(stateObj, hass)}</span
              >`
            : (() => {
                const actionState = getActionState(_this, entity_id);

                return html`
                  <span
                    class="flex-end icon-circle ${theme} ${actionState}"
                    @click=${(e: Event) =>
                      runAutomation(_this, hass, entity_id, e)}
                  >
                    ${actionState === "loading"
                      ? html`<div class="spinner"></div>`
                      : actionState === "done"
                        ? html`<ha-icon icon="mdi:check"></ha-icon>`
                        : html`<ha-icon icon="m3r:play-arrow"></ha-icon>`}
                  </span>
                `;
              })()}
        </div>
      `;
    })}
  </div>`;
};

export const dialogStatesStyles = css`
  /* ------------------------------------
    * Menu Cards
    * ------------------------------------ */
  /* Disabilita highlight mobile (Chrome / Android / iOS) */
  .menu-card {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    user-select: none;
    touch-action: manipulation;
  }

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

  .icon-circle {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    padding-right: 0px;
  }

  .icon-circle.light {
    background-color: var(--md-sys-color-surface-container-lowest);
    right: 15px;
  }

  .icon-circle.dark {
    background-color: var(--md-sys-color-surface-container-highest);
  }

  @media (max-width: 450px) {
    .icon-circle.dark {
      right: 15px;
    }
  }

  @media (min-width: 450px) {
    .icon-circle.dark {
      right: 36px;
    }
  }

  .icon-circle ha-icon {
    --mdc-icon-size: 20px;
    color: var(--primary-text-color);
  }
  /** ------------------------------------------
   * Automation icon circle
   * ------------------------------------------ */
  .icon-circle {
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  /* disabilita click durante loading */
  .icon-circle.loading {
    pointer-events: none;
  }

  /* Spinner */
  .spinner {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, 0.15);
    border-top-color: var(--primary-text-color);
    animation: spin 0.7s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Check animation */
  .icon-circle ha-icon,
  .icon-circle.loading ha-icon {
    animation: pop 0.25s ease-out;
  }

  .icon-circle.done ha-icon {
    color: var(--md-sys-color-primary);
    animation: pop 0.25s ease-out;
  }

  @keyframes pop {
    0% {
      transform: scale(0.7);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  /** ------------------------------------------
   * END Automation icon circle
   * ------------------------------------------ */
`;

/**
 * Stili comuni per header dialog
 */
export const dialogHeaderStyles = css`
  /* Fullscreen mobile */
  @media (max-width: 450px) {
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

  ha-button-menu {
    display: flex;
    align-items: center;
  }
`;

/**
 * Stili base comuni per tutti i dialog
 */
export const dialogBaseStyles = css`
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
  }
`;

/**
 * Handler comune per click fuori dal dialog
 */
export const handleDialogOutsideClick = (component: any, e: MouseEvent) => {
  const dialog = component.shadowRoot?.querySelector("ha-dialog");
  if (!dialog) return;

  const path = e.composedPath();
  const contentClicked = path.includes(
    dialog.shadowRoot!.querySelector(".mdc-dialog__container")!
  );

  if (contentClicked) return;
  _onClose(component);
};
