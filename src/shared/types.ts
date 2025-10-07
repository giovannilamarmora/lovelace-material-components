export enum ControlType {
  GENERIC = "generic",
  THERMOMETER = "thermometer",
  AUTOMATION = "automation",
  SCENE = "scene",
  MEDIA_PLAYER = "media_player",
  STATE = "state",
  ACTION = "action",
  APP_VERSION = "app_version",
  LIGHT = "light",
  COVER = "cover",
}

export enum DomainType {
  BINARY_SENSOR = "binary_sensor",
  SENSOR = "sensor",
  SWITCH = "switch",
  LIGHT = "light",
  COVER = "cover",
  BUTTON = "button",
}

export enum DeviceType {
  MOTION = "motion",
  DOOR = "door",
  CONNECTIVITY = "connectivity",
  MEASUREMENT = "measurement",
  BATTERY = "battery",
  TEMPERATURE = "temperature",
  HUMIDITY = "humidity",
  TIMESTAMP = "timestamp",
  NONE = "none",
}

function isDeviceType(value: string): value is DeviceType {
  return Object.values(DeviceType).includes(value as DeviceType);
}

export function getValidDeviceClass(
  attributes: Record<string, any>
): DeviceType | undefined {
  const deviceClass = attributes.device_class;
  const stateClass = attributes.state_class;

  if (typeof deviceClass === "string" && isDeviceType(deviceClass)) {
    return deviceClass;
  }

  if (typeof stateClass === "string" && isDeviceType(stateClass)) {
    return stateClass;
  }

  return undefined;
}
