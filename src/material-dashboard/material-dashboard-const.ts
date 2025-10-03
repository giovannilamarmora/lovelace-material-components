import { LovelaceCardConfig } from "custom-card-helpers";

export interface MaterialDashboardCardConfig extends LovelaceCardConfig {
  cameras?: string;
  lighting?: string;
  wifi?: string;
  climate?: string;
  default_action?: boolean;
  action_type?: "tap_action" | "hold_action" | "double_tap_action";
  single_tap_web?: boolean;
}

export const DEFAULT_CONFIG: MaterialDashboardCardConfig = {
  type: "custom:material-dashboard-card",
};
