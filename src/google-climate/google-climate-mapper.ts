import { _setStyleProperty, google_color } from "../shared/color";
import { isNullOrEmpty, OnStates } from "../shared/utils";

export function adjustTempAuto(
  fix_temperature: "true" | "false" | "auto",
  temperature: number
) {
  if (isNullOrEmpty(temperature)) return temperature;
  if (fix_temperature == "true") {
    return temperature * 5;
  } else if (fix_temperature == "auto") {
    if (temperature < 7) {
      return temperature * 5;
    }
  }
  return temperature;
}

export function adjustNewTempAuto(
  fix_temperature: "true" | "false" | "auto",
  temperature: number
) {
  if (isNullOrEmpty(temperature)) return temperature;
  if (fix_temperature == "true") {
    return temperature / 5;
  } else if (fix_temperature == "auto") {
    if (temperature < 7) {
      return temperature / 5;
    }
  }
  return temperature;
}

/**
 * Applies the appropriate color scheme to a climate card based on device state,
 * connectivity, and theme settings.
 *
 * The function determines whether the device is **offline**, **on**, or **off**,
 * then applies the corresponding color configuration from `google_color`.
 * If `material_color` is enabled, a state-specific expressive material color is used.
 *
 * @param style - The style object where the CSS variables will be applied (e.g., `element.style`).
 * @param isOffline - Whether the device is offline.
 * @param isOn - Whether the device is currently on (active).
 * @param theme - The current theme, typically `"dark"` or `"light"`.
 * @param state - The device's operational state (used when `material_color` is true).
 * @param material_color - Whether to apply expressive material color configuration
 *                         instead of the default scheme.
 *
 * @remarks
 * The following CSS variables are updated on the provided `style` object:
 * - `--bsc-name-color` → Card title color
 * - `--bsc-icon-color` → Icon color
 * - `--bsc-adjustTemp-color` → Adjustment button color
 * - `--bsc-internalTemp-color` → Subtitle/internal temperature color
 * - `--bsc-background` → Card background color
 *
 * @example
 * // Apply colors for a dark theme, online, active device
 * setColorCard(element.style, false, true, "dark", "material", true);
 *
 * @example
 * // Apply fallback colors for a light theme, offline device
 * setColorCard(element.style, true, false, "light", "", false);
 */
export function setColorCard(
  style: any,
  isOffline: boolean,
  isOn: boolean,
  theme: string,
  state: string,
  material_color: boolean
) {
  const offlineOnOffState = isOffline ? "offline" : isOn ? "on" : "off";
  const domain = "climate";
  const googleColor: any = google_color;
  const stateColor = material_color ? getPropertyColor(state) : "default";

  let color: any;

  if (isOffline) color = googleColor[theme][offlineOnOffState][domain];
  else if (isOn)
    color = googleColor[theme][offlineOnOffState][domain][stateColor];
  else color = googleColor[theme][offlineOnOffState][domain]["default"];

  if (!isNullOrEmpty(color)) {
    _setStyleProperty("--bsc-name-color", color.title, style);
    _setStyleProperty("--bsc-icon-color", color.icon, style);
    _setStyleProperty("--bsc-adjustTemp-color", color.button, style);
    _setStyleProperty("--bsc-internalTemp-color", color.subtitle, style);
    _setStyleProperty("--bsc-background", color.background, style);
  }
}

/**
 * Maps a device operational state to the corresponding color scheme key.
 *
 * Used by the color configuration system to determine which expressive
 * material color group should be applied when the device is on.
 *
 * @param state - The device state, typically one of the values from `OnStates`.
 * @returns The color scheme key to use:
 * - `"material"` → For heating, auto, or heat-cool modes.
 * - `"material_dry"` → For cooling, fan, dry, or eco modes.
 * - `"material"` (default) → If the state does not match any known case.
 */
export function getPropertyColor(state: string) {
  switch (state) {
    case OnStates.AUTO:
    case OnStates.HEAT:
    case OnStates.HEAT_COOL:
      return "material";
    case OnStates.COOL:
      return "material_cool";
    case OnStates.FAN_ONLY:
    case OnStates.FAN:
      return "material_fan";
    case OnStates.DRY:
      return "material_dry";
    case OnStates.ECO:
      return "material_eco";
    default:
      return "material";
  }
}
