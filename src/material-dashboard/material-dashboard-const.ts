import { LovelaceCardConfig } from "custom-card-helpers";

export interface MaterialDashboardCardConfig extends LovelaceCardConfig {
  cameras?: string;
  lighting?: string;
  wifi?: string;
  climate?: string;
}

export const DEFAULT_CONFIG: MaterialDashboardCardConfig = {
  type: "custom:material-dashboard-card",
};
