import { LovelaceCardConfig } from "custom-card-helpers";
import { EntityOptions, OptionType } from "../shared/types";

export interface MaterialOptionsCardConfig extends LovelaceCardConfig {
  name?: string;
  subtitle?: string;
  entity?: string;
  options_type?: OptionType;
  icon?: string;
  dual_icon?: boolean;
  icon_on?: string;
  icon_off?: string;
  large_buttons?: boolean;
  show_entity_options?: boolean;
  entity_options?: EntityOptions;
}

export const DEFAULT_CONFIG: MaterialOptionsCardConfig = {
  type: "custom:material-options-card",
  options_type: OptionType.OPTIONS,
};
