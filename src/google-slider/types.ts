import {
  ActionConfig,
  LovelaceCard,
  LovelaceCardConfig,
} from "custom-card-helpers";
import { ControlType } from "../google-button/google-button-const";

declare global {
  interface HTMLElementTagNameMap {
    "hui-error-card": LovelaceCard;
  }
}

export interface MousePos {
  x: number;
  y: number;
}
export interface GoogleSliderCardConfig extends LovelaceCardConfig {
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
  tap_action: ActionConfig;
  hold_action?: ActionConfig;
}
