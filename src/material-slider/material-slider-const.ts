import {
  ActionConfig,
  LovelaceCard,
  LovelaceCardConfig,
} from "custom-card-helpers";
import { ControlType } from "../shared/types";

export const DEFAULT_ATTRIBUTE = "brightness";
export const SETTLE_TIME = 3000;
export const HOLD_TIME = 600;
export const MIN_SLIDE_TIME = 0;
export const TAP_THRESHOLD = 5;
export const MIN = 0;
export const MAX = 100;

export const DEFAULT_CONFIG: MaterialSliderCardConfig = {
  type: "custom:material-slider-card",
  control_type: ControlType.LIGHT,
  use_default_toggle: true,
  tap_action: {
    action: "toggle",
    haptic: "light",
  },
  hold_action: {
    action: "more-info",
  },
  hold_time: HOLD_TIME,
  settle_time: SETTLE_TIME,
  min_slide_time: MIN_SLIDE_TIME,
  min: MIN,
  max: MAX,
};

declare global {
  interface HTMLElementTagNameMap {
    "hui-error-card": LovelaceCard;
  }
}

export interface MousePos {
  x: number;
  y: number;
}
export interface MaterialSliderCardConfig extends LovelaceCardConfig {
  type: string;
  control_type: ControlType;
  name?: string;
  entity?: string;
  attribute?: string;
  transition?: number;
  height?: number;
  color?: string;
  background_color?: string;
  text_color?: string;
  icon_color?: string;
  border_color?: string;
  border_radius?: string;
  border_style?: string;
  border_width?: string;
  colorize?: boolean;
  icon?: string;
  show_percentage?: boolean;
  bold_text?: boolean;
  min: number;
  max: number;
  min_slide_time: number;
  hold_time: number;
  settle_time: number;
  use_default_toggle?: boolean;
  tap_action: ActionConfig;
  hold_action?: ActionConfig;
}
