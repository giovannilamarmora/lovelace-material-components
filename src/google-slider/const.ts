import { ControlType } from "../google-button/google-button-const";
import { GoogleSliderCardConfig } from "./types";

export const CARD_VERSION = "1.9.6";
export const DEFAULT_ATTRIBUTE = "brightness";
export const SETTLE_TIME = 3000;
export const HOLD_TIME = 600;
export const MIN_SLIDE_TIME = 0;
export const TAP_THRESHOLD = 5;
export const MIN = 0;
export const MAX = 100;
export const DEFAULT_CONFIG: GoogleSliderCardConfig = {
  type: "custom:google-slider-card",
  control_type: ControlType.LIGHT,
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
