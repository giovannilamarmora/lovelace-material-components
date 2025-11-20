import { LovelaceCardConfig } from "custom-card-helpers";

export interface MaterialUsersCardConfig extends LovelaceCardConfig {
  is_user_map_enabled: boolean;
  is_add_button_enabled: boolean;
}

export const DEFAULT_CONFIG: MaterialUsersCardConfig = {
  type: "custom:material-users-card",
  is_user_map_enabled: false,
  is_add_button_enabled: false,
};
