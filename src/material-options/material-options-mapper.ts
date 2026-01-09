import { _setStyleProperty } from "../shared/color";
import { MaterialOptionsCardConfig } from "./material-options-const";

export function setStyle(style: any, config: MaterialOptionsCardConfig) {
  if (!config.large_buttons)
    _setStyleProperty(
      "--menu-card-padding",
      config.subtitle ? "14.41px 18px" : "24px 18px",
      style
    );
  else
    _setStyleProperty(
      "--menu-card-padding",
      config.subtitle ? "20.91px 18px" : "30.5px 18px",
      style
    );
}
