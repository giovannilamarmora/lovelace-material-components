import { ControlType, DeviceType } from "./types";

/**
 * Enum defining all possible **"on" states** for supported device domains.
 *
 * Used to determine when an entity is considered *active* or *running*.
 * Each state corresponds to what Home Assistant typically reports
 * for a specific domain (light, climate, media_player, cover, etc.).
 */
export enum OnStates {
  // Lights
  ON = "on",

  // Climate modes
  AUTO = "auto",
  HEAT = "heat",
  COOL = "cool",
  HEAT_COOL = "heat_cool",
  FAN_ONLY = "fan_only",
  FAN = "fan",
  DRY = "dry",
  ECO = "eco",

  // Media Player
  IDLE = "idle",
  PLAYING = "playing",
  PAUSED = "paused",

  // Covers (e.g., blinds, curtains)
  OPEN = "open",
  OPENING = "opening",

  // Locks
  UNLOCKED = "unlocked",
  UNLOCKING = "unlocking",

  // Dryer
  IDLE_2 = "Idle",
}

/**
 * Enum defining all possible **"off" states** for supported device domains.
 *
 * Used to determine when an entity is considered *inactive* or *closed*.
 */
export enum OffStates {
  OFF = "off",
  CLOSED = "closed",
  CLOSING = "closing",
  LOCKED = "locked",
  LOCKING = "locking",
}

/**
 * Merged object containing all known *online* states, both active (On) and inactive (Off).
 *
 * This constant allows quick membership checks when determining
 * if a device is online or has a valid state.
 */
export const OnlineStates = {
  ...OnStates,
  ...OffStates,
} as const;

/**
 * Determines whether a given state corresponds to a device being **on or active**.
 *
 * The function also handles numeric states (used by some integrations)
 * where a non-zero number means the entity is active.
 *
 * @param state - The entity's current state as a string.
 * @returns `true` if the device is considered *on* or *active*, otherwise `false`.
 *
 * @example
 * ```ts
 * isDeviceOn("on");        // true
 * isDeviceOn("playing");   // true
 * isDeviceOn("off");       // false
 * isDeviceOn("42");        // false (numeric states ≠ 0 are treated as online but not "on")
 * ```
 */
export function isDeviceOn(state: string): boolean {
  const stateNum = Number.parseInt(state);

  if (!isNaN(stateNum) && stateNum !== 0) {
    // Numeric value different from 0 → not "off" but not explicitly "on"
    return false;
  }
  return Object.values(OnStates).includes(state as OnStates);
}

/**
 * Checks if a given entity state represents a **known online state**.
 *
 * This includes both *on* and *off* states (e.g., "on", "off", "playing", "closed").
 *
 * @param state - The entity state to check.
 * @returns `true` if the state is recognized as valid and online; otherwise `false`.
 *
 * @example
 * ```ts
 * isDeviceOnline("on");        // true
 * isDeviceOnline("closed");    // true
 * isDeviceOnline("unavailable"); // false
 * ```
 */
export function isDeviceOnline(state: string): boolean {
  return (
    Object.values(OnStates).includes(state as OnStates) ||
    Object.values(OffStates).includes(state as OffStates)
  );
}

/**
 * Determines if a given device should be considered **offline or unavailable**.
 *
 * The logic is designed to be flexible and context-aware:
 * 1. Numeric states different from `0` → **online**
 * 2. Scenes with `"unknown"` state → **online**
 * 3. Control type `STATE` with a valid state (not `"unavailable"`) → **online**
 * 4. States present in {@link OnStates} or {@link OffStates} → **online**
 * 5. Otherwise, `"offline"` or `"unavailable"` → **offline**
 *
 * @param state - The entity's state as a string.
 * @param control_type - The control type (optional, affects edge cases).
 * @returns `true` if the entity is offline; otherwise `false`.
 *
 * @example
 * ```ts
 * isOfflineState("off");                     // false
 * isOfflineState("unavailable");             // true
 * isOfflineState("unknown", ControlType.SCENE); // false
 * isOfflineState("0");                       // true
 * ```
 */
export function isOfflineState(
  state: string,
  control_type: string = ""
): boolean {
  const stateNum = Number.parseInt(state);

  // Case 1: numeric non-zero → online
  if (!isNaN(stateNum) && stateNum !== 0) {
    return false;
  }

  // Case 2: scenes with 'unknown' or valid STATE control → online
  if (
    (control_type === ControlType.SCENE && state.toLowerCase() === "unknown") ||
    (control_type === ControlType.STATE && state.toLowerCase() != "unavailable")
  ) {
    return false;
  }

  // Case 3: known state (on/off/playing/etc.) → online
  if (isDeviceOnline(state)) {
    return false;
  }

  // Case 4: explicitly offline/unavailable
  return (
    state.toLowerCase() === "offline" || state.toLowerCase() === "unavailable"
  );
}

export function isMotionDevice(device_class: DeviceType | undefined) {
  if (device_class == undefined) return false;
  return (
    device_class == DeviceType.MOTION ||
    device_class == DeviceType.PRESENCE ||
    device_class == DeviceType.OCCUPANCY
  );
}
