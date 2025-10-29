import { LovelaceCardConfig } from "custom-card-helpers";

export interface MaterialLightCardConfig extends LovelaceCardConfig {
  on_text?: string;
  off_text?: string;
  control_area?: boolean;
  area_id?: string;
}

export const DEFAULT_CONFIG: MaterialLightCardConfig = {
  type: "custom:material-control-card",
  on_text: "Lights on",
  off_text: "Lights off",
  control_area: false,
};
