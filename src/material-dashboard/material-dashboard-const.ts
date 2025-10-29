import { LovelaceCardConfig } from "custom-card-helpers";

export interface MaterialDashboardCardConfig extends LovelaceCardConfig {
  cameras?: string;
  hide_cameras?: boolean;
  lighting?: string;
  hide_lighting?: boolean;
  wifi?: string;
  hide_wifi?: boolean;
  climate?: string;
  hide_climate?: boolean;
}

export const DEFAULT_CONFIG: MaterialDashboardCardConfig = {
  type: "custom:material-dashboard-card",
};
