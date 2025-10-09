import { ActionConfig, LovelaceCardConfig } from "custom-card-helpers";

export interface MaterialMenuCardConfig extends LovelaceCardConfig {
  name: string;
  icon: string;
  label: string;
  tap_action: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
}

export const DEFAULT_CONFIG: MaterialMenuCardConfig = {
  type: "custom:material-menu-card",
  name: "Activity",
  icon: "mdi:history",
  label: "Info on the latest actions performed",
  tap_action: {
    action: "navigate",
    navigation_path: "./activity",
  },
};
