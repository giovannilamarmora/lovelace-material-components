import { ControlType } from "./types";

export enum OnStates {
  // Lights
  ON = "on",
  // Climate
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
  // Cover
  OPEN = "open",
  OPENING = "opening",
}

export enum OffStates {
  OFF = "off",
  CLOSED = "closed",
  CLOSING = "closing",
}

export const OnlineStates = {
  ...OnStates,
  ...OffStates,
} as const;

export function isDeviceOn(state: string) {
  const stateNum = Number.parseInt(state);

  if (!isNaN(stateNum) && stateNum !== 0) {
    // Se è un numero diverso da 0, non è offline
    return false;
  }
  return Object.values(OnStates).includes(state as OnStates);
}

export function isDeviceOnline(state: string) {
  return (
    Object.values(OnStates).includes(state as OnStates) ||
    Object.values(OffStates).includes(state as OffStates)
  );
}

export function isOfflineState(
  state: string,
  control_type: string = ""
): boolean {
  const stateNum = Number.parseInt(state);

  // Caso 1: stato numerico valido e diverso da 0 → online
  if (!isNaN(stateNum) && stateNum !== 0) {
    return false;
  }

  // Caso 2: scene con stato "unknown" oppure controllo tipo STATE → consideriamo online
  if (
    (control_type === ControlType.SCENE && state === "unknown") ||
    control_type === ControlType.STATE
  ) {
    return false;
  }

  // Caso 3: stato conosciuto in OnStates o OffStates → online
  if (isDeviceOnline(state)) {
    return false;
  }

  // Ultimo controllo: ritorna true solo se lo stato è "offline" o "unavailable"
  return (
    state.toLowerCase() === "offline" || state.toLowerCase() === "unavailable"
  );
  //return !isDeviceOnline(state);
}
