import { MaterialUsersCardConfig } from "./material-users-const";

export function materialUsersTemplate(
  isAdmin: boolean,
  config: MaterialUsersCardConfig
) {
  return `type: custom:mod-card
card_mod:
  style: |
    ha-card {
      padding-left: 16px;
      padding-right: 24px;
      padding-top: 12px;
      padding-bottom: 12px;
      background: transparent;
      box-shadow: none;
    }
card:
  type: horizontal-stack
  cards:
    - type: custom:auto-entities
      card_param: cards
      card:
        type: horizontal-stack
      sort:
        numeric: false
      filter:
        include:
          - domain: person
            options:
              type: custom:button-card
              entity: this.entity_id
              show_entity_picture: true
              show_name: false
              tap_action:
                action: ${isAdmin || config.is_user_map_enabled ? "more-info" : "none"}
              styles:
                icon:
                  - width: 40px
                  - height: 40px
                  - border-radius: 100%
                img_cell:
                  - background-color: transparent
                  - border-radius: 100%
                card:
                  - border-radius: 100%
                  - margin-left: 0px
                  - margin-right: 1px
                  - padding: 0px
                  - width: max-content
                  - justify-self: center
          ${isAdmin || config.is_add_button_enabled ? mapAddButton() : ""}
`;
}

function mapAddButton() {
  return `- type: custom:button-card
            icon: mdi:plus
            show_entity_picture: true
            show_name: false
            styles:
              icon:
                - width: 24px
                - height: 24px
                - border-radius: 100%
                - color: var(--token-color-text-primary)
              card:
                - border-radius: 100%
                - margin-left: 0px
                - margin-right: 1px
                - padding: 8px
                - width: max-content
                - justify-self: center
                - background-color: var(--token-color-background-card)
            tap_action:
              action: navigate
              navigation_path: |
                [[[ 
                  const isAdmin = hass.user?.is_admin;
                  if (isAdmin) {
                    return "/config/person";
                  } else {
                    return "/profile";
                  }
                ]]]
            hold_action:
              action: none`;
}
