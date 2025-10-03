import { ActionConfig, LovelaceCardConfig } from "custom-card-helpers";
import { ControlType } from "../shared/types";

export const DEFAULT_CONFIG: MaterialButtonCardConfig = {
  type: "custom:material-button-card",
};

export interface MaterialButtonCardConfig extends LovelaceCardConfig {
  name?: string;
  entity?: string;
  attribute?: string;
  use_default_icon?: boolean;
  icon?: string;
  dual_icon?: boolean;
  icon_on?: string;
  icon_off?: string;
  use_default_text?: boolean;
  text_on?: string;
  text_off?: string;
  height?: number;
  control_type?: ControlType;
  fix_temperature?: "true" | "false" | "auto";
  use_material_color?: boolean;
  use_default_toggle?: boolean;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
}
