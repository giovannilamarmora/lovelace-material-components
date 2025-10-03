import { LovelaceCardConfig } from "custom-card-helpers";

export interface MaterialControlCardConfig extends LovelaceCardConfig {
  name?: string;
  use_card_entity?: boolean;
  entity?: string;
  use_default_icon?: boolean;
  icon?: string;
  dual_icon?: boolean;
  icon_on?: string;
  icon_off?: string;
  tap_action?: any;
  hold_action?: any;
  // ...altre proprietà
}

export const DEFAULT_CONFIG: MaterialControlCardConfig = {
  type: "custom:material-control-card",
  name: "Control Card",
  icon: "mdi:link",
  tap_action: {
    action: "more-info",
  },
  hold_action: {
    action: "more-info",
  },
};

export const toggleConfigs: Record<string, any> = {
  toggle: { action: "toggle" },
  "more-info": { action: "more-info" },
  navigate: { action: "navigate", navigation_path: "/" },
  url: { action: "url", url_path: "" },
  none: { action: "none" },
  "google-home": { action: "google-home" },
  settings: { action: "settings" },
};
