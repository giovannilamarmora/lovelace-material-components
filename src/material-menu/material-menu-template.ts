import { serializeAction } from "../shared/actions";
import { MaterialMenuCardConfig } from "./material-menu-const";

export function materialMenuTemplate(config: MaterialMenuCardConfig) {
  const { name, icon, label, tap_action, hold_action, double_tap_action } =
    config;
  return `type: custom:button-card
name: ${name}
icon: ${icon}
label: ${label}
show_name: true
show_icon: true
show_label: true
tap_action:
  ${serializeAction(tap_action)}
hold_action:
  ${serializeAction(hold_action)}
double_tap_action:
  ${serializeAction(double_tap_action)}
styles:
  grid:
    - grid-template-columns: 54px calc(100% - 54px)
    - grid-template-rows: 1fr 1fr
    - grid-template-areas: |
        "i n"
        "i l"
  card:
    - height: 55px
    - border-radius: 30px
    - background-color: transparent
    - padding: 0px
    - box-shadow: none
    - margin: 0px -15px
  icon:
    - color: var(--token-color-text-primary)
    - width: 24px
    - padding-right: 0px
  name:
    - font-size: 1.2rem
    - align-self: end
    - justify-self: start
    - text-align: left
    - width: 100%
    - padding-bottom: 3px
    - color: var(--token-color-text-primary)
  label:
    - font-size: 1rem
    - align-self: start
    - justify-self: start
    - text-align: left
    - padding-top: 3px
    - width: 100%
    - color: var(--token-color-text-secondary)
`;
}
