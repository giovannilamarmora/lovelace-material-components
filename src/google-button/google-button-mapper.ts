import { getPropertyColor } from "../google-climate/google-climate-mapper";
import { _setStyleProperty, google_color } from "../shared/color";
import { isNullOrEmpty } from "../shared/utils";
import { ControlType, GoogleButtonCardConfig } from "./google-button-const";

export function setColorCard(
  style: any,
  config: GoogleButtonCardConfig,
  isOffline: boolean,
  isOn: boolean,
  theme: string,
  state: string
) {
  const offlineOnOffState = isOffline ? "offline" : isOn ? "on" : "off";
  const domain =
    config.control_type == ControlType.THERMOMETER &&
    config.use_material_color &&
    isOn
      ? "climate"
      : "button";
  const googleColor: any = google_color;
  const stateColor = config.use_material_color
    ? getPropertyColor(state)
    : "default";

  let color: any;

  if (isOffline || (isOn && !config.use_material_color) || !isOn)
    color = googleColor[theme][offlineOnOffState][domain];
  else color = googleColor[theme][offlineOnOffState][domain][stateColor];

  if (!isNullOrEmpty(color)) {
    _setStyleProperty("--bsc-name-color", color.title, style);
    _setStyleProperty("--bsc-icon-color", color.icon, style);
    _setStyleProperty(
      "--bsc-percentage-color",
      domain == "climate" ? color.title : color.percentage,
      style
    );
    _setStyleProperty("--bsc-background", color.background, style);
    _setStyleProperty(
      "--bsc-height",
      config.height || 97,
      style,
      (h: any) => `${h}px`
    );
    _setStyleProperty("--bsc-border-radius", config.border_radius, style);
  }
}
