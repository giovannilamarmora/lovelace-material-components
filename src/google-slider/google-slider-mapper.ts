import { ControlType } from "../google-button/google-button-const";
import { GoogleSliderCardConfig } from "./types";

export function setSliderColor(
  _config: GoogleSliderCardConfig,
  isOffline: boolean,
  theme: string,
  isOn: boolean,
  color: any,
  style: any
) {
  //  // Stili dinamici basati su stato entità e tema
  let nameColor = "";
  let iconColor = "";
  let percentageColor = "";
  let sliderColor = "";
  let containerColor = "";
  const nameMargin = "-20px";
  const iconMargin = "-10px";
  const percentageMargin = "-20px";

  if (isOffline) {
    // Offline, tema light
    if (theme === "light") {
      nameColor = color.light.offline.light.title;
      iconColor = color.light.offline.light.icon;
      percentageColor = color.light.offline.light.percentage;
      sliderColor = color.light.offline.light.slider;
      containerColor = color.light.offline.light.background;
      // Offline, tema dark
    } else {
      nameColor = color.dark.offline.light.title;
      iconColor = color.dark.offline.light.icon;
      percentageColor = color.dark.offline.light.percentage;
      sliderColor = color.dark.offline.light.slider;
      containerColor = color.dark.offline.light.background;
    }
  } else if (isOn) {
    if (_config.control_type == ControlType.LIGHT) {
      // Acceso, tema dark
      if (theme === "dark") {
        nameColor = color.dark.on.light.title;
        iconColor = color.dark.on.light.icon;
        percentageColor = color.dark.on.light.percentage;
        sliderColor = color.dark.on.light.slider;
        containerColor = color.dark.on.light.background;
        // Acceso, tema light
      } else {
        nameColor = color.light.on.light.title;
        iconColor = color.light.on.light.icon;
        percentageColor = color.light.on.light.percentage;
        sliderColor = color.light.on.light.slider;
        containerColor = color.light.on.light.background;
      }
    } else {
      // Acceso, tema dark
      if (theme === "dark") {
        nameColor = color.dark.on.button.title;
        iconColor = color.dark.on.button.icon;
        percentageColor = color.dark.on.button.percentage;
        sliderColor = color.dark.on.button.background;
        containerColor = color.dark.on.button.back_slider_color;
        // Acceso, tema light
      } else {
        nameColor = color.light.on.button.title;
        iconColor = color.light.on.button.icon;
        percentageColor = color.light.on.button.percentage;
        sliderColor = color.light.on.button.background;
        containerColor = color.light.on.button.back_slider_color;
      }
    }
  } else {
    // Spento, tema dark
    if (theme === "dark") {
      nameColor = color.dark.off.light.title;
      iconColor = color.dark.off.light.icon;
      percentageColor = color.dark.off.light.percentage;
      sliderColor = color.dark.off.light.slider;
      containerColor = color.dark.off.light.background;
    } else {
      nameColor = color.light.off.light.title;
      iconColor = color.light.off.light.icon;
      percentageColor = color.light.off.light.percentage;
      sliderColor = color.light.off.light.slider;
      containerColor = color.light.off.light.background;
    }
  }

  _setStyleProperty("--bsc-name-color", nameColor, style);
  _setStyleProperty("--bsc-icon-color", iconColor, style);
  _setStyleProperty("--bsc-percentage-color", percentageColor, style);
  _setStyleProperty("--bsc-slider-color", sliderColor, style);
  _setStyleProperty("--bsc-background", containerColor, style);
  _setStyleProperty("--bsc-name-margin", nameMargin, style);
  _setStyleProperty("--bsc-icon-margin", iconMargin, style);
  _setStyleProperty("--bsc-percentage-margin", percentageMargin, style);

  // Altri stili
  _setStyleProperty("--bsc-primary-text-color", _config.text_color, style);
  _setStyleProperty("--bsc-border-color", _config.border_color, style);
  _setStyleProperty("--bsc-border-radius", _config.border_radius, style);
  _setStyleProperty("--bsc-border-style", _config.border_style, style);
  _setStyleProperty("--bsc-border-width", _config.border_width, style);
  _setStyleProperty("--bsc-height", _config.height, style, (h) => `${h}px`);
}

export function _setStyleProperty(
  name: string,
  value: any,
  style: any,
  transform = (value: any): string => value
): void {
  if (value !== undefined && value !== null && value !== "") {
    style.setProperty(name, transform(value));
  }
}
