import { LovelaceCardConfig } from "custom-card-helpers";

export interface GoogleClimateCardConfig extends LovelaceCardConfig {
  type: string;
  name?: string;
  entity: string;
  increase_temp: number;
  decrease_temp: number;
  use_material_color: boolean;
  use_default_icon?: boolean;
  icon?: string;
  fix_temperature?: "true" | "false" | "auto";
}

export const DEFAULT_CONFIG: GoogleClimateCardConfig = {
  type: "custom:google-climate-card",
  entity: "climate.thermo",
  increase_temp: 1,
  decrease_temp: 1,
  use_material_color: true,
  use_default_icon: true,
};
