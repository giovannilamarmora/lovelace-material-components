import { localize } from "../localize/localize";
import { isDeviceOn, isOfflineState } from "../shared/states";
import { DeviceType, getValidDeviceClass } from "../shared/types";

/**
 * Map the title of the card information
 * @param stateObj needs in case entity name did not exist
 * @param entity used to get the name
 * @returns
 */
export function mapStateTitle(stateObj: any, entity: any) {
  const entityName = entity.name;
  if (entityName) return entityName;
  const device_class = getValidDeviceClass(stateObj.attributes);
  if (device_class) return device_class;
  return stateObj.attributes.device_class;
}

/**
 * Map the state of the entity dialog
 * @param stateObj param to get the information of the entity
 * @param hass Home Assistant object for proper formatting and localization
 * @returns Formatted and localized state string
 */
export function mapStateValue(stateObj: any, hass?: any) {
  // Handle offline state
  if (isOfflineState(stateObj.state)) {
    return localize("common.offline");
  }

  // Use Home Assistant's formatEntityState for all entity formatting and localization
  // This ensures proper display precision, locale-aware formatting, and native translations
  if (hass?.formatEntityState) {
    return hass.formatEntityState(stateObj);
  }

  // Fallback: return raw state if formatEntityState is not available
  return stateObj.state;
}

export function isDeviceStateOn(stateObj: any) {
  const device_class = getValidDeviceClass(stateObj.attributes);
  switch (device_class) {
    case DeviceType.BATTERY:
    case DeviceType.HUMIDITY:
    case DeviceType.TEMPERATURE:
      return !isOfflineState(stateObj.state);
  }
  return isDeviceOn(stateObj.state);
}

export function _handleMaxWidth(_this: any) {
  const dialog = _this.shadowRoot?.querySelector("ha-dialog");
  if (!dialog) return;

  if (!dialog.classList.contains("large")) dialog.classList.add("large");
  else dialog.classList.remove("large");
}

export function _excludeSensor(stateObj: any) {
  const domain = stateObj.entity_id.split(".")[0];
  if (domain == "number" || domain == "update") return true;
  return false;
}
