import { localize } from "../localize/localize";
import { getStateDisplay } from "../shared/mapper";
import { isDeviceOn, isDeviceOnline, isOfflineState } from "../shared/states";
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
 * @param stateObj param to get the inormation of the entity
 * @returns
 */
export function mapStateValue(stateObj: any) {
  const device_class = getValidDeviceClass(stateObj.attributes);
  const isDeviceTurnOn = isDeviceOn(stateObj.state);

  if (isOfflineState(stateObj.state)) {
    return localize("common.offline");
  }

  switch (device_class) {
    case DeviceType.BATTERY:
    case DeviceType.HUMIDITY:
      return (
        Number.parseInt(stateObj.state) +
        (stateObj.attributes.unit_of_measurement ?? "%")
      );
    case DeviceType.ILLUMINANCE:
      return (
        Number.parseInt(stateObj.state) +
        " " +
        (stateObj.attributes.unit_of_measurement ?? "lx")
      );
    case DeviceType.DOOR:
      if (isDeviceTurnOn) return localize("common.open");
      else return localize("common.closed");
    case DeviceType.TEMPERATURE:
      return (
        stateObj.state + " " + (stateObj.attributes.unit_of_measurement ?? "°")
      );
    default:
      if (isDeviceOnline(stateObj.state))
        return getStateDisplay(
          stateObj.state,
          "",
          device_class == DeviceType.MOTION
        );
      else {
        const state = stateObj.state;
        if (typeof state === "string" && /^[a-zA-Z]/.test(state)) {
          return state.charAt(0).toUpperCase() + state.slice(1);
        }
        return state;
      }
  }
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
