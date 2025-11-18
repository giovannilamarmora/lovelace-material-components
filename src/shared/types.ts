/**
 * Enum representing the various control types available in the UI.
 *
 * Each control type defines how a device or entity should be visually displayed
 * or interacted with inside the custom card. It allows differentiating
 * between entities that show temperature, media playback, automation, etc.
 */
export enum ControlType {
  /** Generic entity display (default type, no specific behavior) */
  GENERIC = "generic",

  /** Displays climate or fan controls with temperature and mode info */
  THERMOMETER = "thermometer",

  /** Used for automation entities (active/inactive status) */
  AUTOMATION = "automation",

  /** Used for Home Assistant scenes */
  SCENE = "scene",

  /** Used for media player entities (e.g., Spotify, Chromecast, etc.) */
  MEDIA_PLAYER = "media_player",

  /** Displays the raw state of an entity */
  STATE = "state",

  /** Used for button-style actions (e.g., restart, toggle) */
  ACTION = "action",

  /** Shows the card’s version number */
  APP_VERSION = "app_version",

  /** Used for light entities with brightness or color support */
  LIGHT = "light",

  /** Used for cover entities (e.g., blinds, curtains, garage doors) */
  COVER = "cover",
}

/**
 * Enum representing all supported Home Assistant domains.
 *
 * Domains group entities by their primary functionality.
 * This allows dynamic behavior depending on the domain type.
 */
export enum DomainType {
  BINARY_SENSOR = "binary_sensor",
  SENSOR = "sensor",
  SWITCH = "switch",
  LIGHT = "light",
  COVER = "cover",
  BUTTON = "button",
  NUMBER = "number",
  FAN = "fan",
  CLIMATE = "climate",
}

/**
 * Enum representing supported device classes (as defined by Home Assistant).
 *
 * Device classes describe the type of data or sensor value an entity reports.
 * This is used for correctly formatting and localizing the displayed value.
 */
export enum DeviceType {
  MOTION = "motion",
  OCCUPANCY = "occupancy",
  PRESENCE = "presence",
  DOOR = "door",
  CONNECTIVITY = "connectivity",
  MEASUREMENT = "measurement",
  BATTERY = "battery",
  TEMPERATURE = "temperature",
  HUMIDITY = "humidity",
  TIMESTAMP = "timestamp",
  TAMPER = "tamper",
  ILLUMINANCE = "illuminance",
  NONE = "none",
}

/**
 * Enum representing supported label classes (as defined by the user).
 */
export enum LabelType {
  ASCIUGATRICE = "asciugatrice",
  DRYER = "dryer",
}

/**
 * Enum representing supported brand label classes (as defined by the user).
 */
export enum BrandLabelType {
  CANDY = "candy",
}

/**
 * Type guard that checks if a given string corresponds
 * to a valid DeviceType enum value.
 *
 * @param value - The string value to validate.
 * @returns `true` if the value is a valid DeviceType; otherwise `false`.
 *
 * @example
 * ```ts
 * isDeviceType("battery"); // true
 * isDeviceType("unknown"); // false
 * ```
 */
function isDeviceType(value: string): value is DeviceType {
  return Object.values(DeviceType).includes(value as DeviceType);
}

/**
 * Extracts and validates the device class from an entity’s attributes.
 *
 * Home Assistant entities can define both `device_class` and `state_class`.
 * This helper ensures that the returned value corresponds to a known DeviceType.
 *
 * @param attributes - The entity attributes (from Home Assistant state object).
 * @returns A valid `DeviceType` if found, otherwise `undefined`.
 *
 * @example
 * ```ts
 * getValidDeviceClass({ device_class: "temperature" }); // DeviceType.TEMPERATURE
 * getValidDeviceClass({ state_class: "humidity" });     // DeviceType.HUMIDITY
 * getValidDeviceClass({});                              // undefined
 * ```
 */
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
