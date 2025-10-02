import { getPropertyColor } from "../material-climate/material-climate-mapper";
import { _setStyleProperty, material_color } from "../shared/color";
import { isNullOrEmpty } from "../shared/utils";
import { ControlType, MaterialButtonCardConfig } from "./material-button-const";

export function setColorCard(
  style: any,
  config: MaterialButtonCardConfig,
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
  const materialColor: any = material_color;
  const stateColor = config.use_material_color
    ? getPropertyColor(state)
    : "default";

  let color: any;

  if (isOffline || (isOn && !config.use_material_color) || !isOn)
    color = materialColor[theme][offlineOnOffState][domain];
  else color = materialColor[theme][offlineOnOffState][domain][stateColor];

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
