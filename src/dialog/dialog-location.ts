import { navigate } from "custom-card-helpers";

/**
 * Close Dialog
 */
export function _onClose(_this: any) {
  _this.open = false;
  _this.dispatchEvent(
    new CustomEvent("close-dialog", { bubbles: true, composed: true })
  );
  _this.remove();
}

/**
 * Prevent Cick outside the dialog to be close
 * @returns
 */
export function _handleDialogClick(_this: any, e: MouseEvent) {
  // Se il menu è aperto → ignora il click (non chiudere)
  if (_this._menuOpen) return;

  // Recupera il dialog
  const dialog = _this.shadowRoot?.querySelector("ha-dialog");
  if (!dialog) return;

  // Se clicchi dentro il contenuto del dialog → non chiudere
  const path = e.composedPath();
  const contentClicked =
    path.includes(
      dialog.shadowRoot!.querySelector(".mdc-dialog__container")!
    ) || path.includes(_this.shadowRoot!.querySelector(".content")!);

  if (contentClicked) return;

  // Se sei arrivato qui, hai cliccato davvero fuori
  _onClose(_this);
}

/* ---------------------------------------------------------------------------------
 * Settings, info, related options
 * -------------------------------------------------------------------------------- */
/**
 * Method that open the Device Information, if device not present will open the More Information Dialog
 * @returns
 */
export function _openDeviceInformation(_this: any, config: any, hass: any) {
  const entityId = config.entity;
  if (!entityId || !hass) return;

  const stateObj = hass.states[entityId];
  if (!stateObj) return;

  const entityRegistry = hass.entities?.[entityId];
  const deviceId = entityRegistry?.device_id;

  _onClose(_this);

  setTimeout(() => {
    if (deviceId) {
      // navigazione interna (funziona in app mobile e browser)
      navigate(_this, `/config/devices/device/${deviceId}`);
    } else {
      _moreInfo(_this, config, hass);
    }
  }, 100);
}

/**
 * Method the open the more info dialog of a component
 * @returns
 */
export function _moreInfo(_this: any, config: any, hass: any) {
  const entityId = config?.entity;
  if (!entityId || !hass) return;

  _onClose(_this);

  const event = new CustomEvent("hass-more-info", {
    detail: { entityId: entityId },
    bubbles: true,
    composed: true,
  });

  // forza dispatch sul root
  document.querySelector("home-assistant")?.dispatchEvent(event);
}

export function _moreInfoEntity(entity_id: string, _this: any, hass: any) {
  if (!entity_id || !hass) return;

  _onClose(_this);

  const event = new CustomEvent("hass-more-info", {
    detail: { entityId: entity_id },
    bubbles: true,
    composed: true,
  });

  // forza dispatch sul root
  document.querySelector("home-assistant")?.dispatchEvent(event);
}

/**
 * Method that open related integration
 * @returns
 */
export function _openRelated(_this: any, config: any, hass: any) {
  const entityId = config.entity;
  if (!entityId || !hass) return;

  const platform = hass.entities[entityId]?.platform;
  _onClose(_this);

  setTimeout(() => {
    if (platform) {
      // navigazione interna (funziona in app mobile e browser)
      navigate(_this, `/config/integrations/integration/${platform}`);
    } else {
      _moreInfo(_this, config, hass);
    }
  }, 100);
}
