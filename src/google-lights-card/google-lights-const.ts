import { LovelaceCardConfig } from "custom-card-helpers";

export interface GoogleLightCardConfig extends LovelaceCardConfig {
  on_text?: string;
  off_text?: string;
}

export const DEFAULT_CONFIG: GoogleLightCardConfig = {
  type: "custom:google-control-card",
  on_text: "Lights on",
  off_text: "Lights off",
};

export function googleTemplate(config: GoogleLightCardConfig) {
  return `type: custom:mod-card
style: |
  ha-card {
    margin-bottom: 0px;
  }
card:
  type: vertical-stack
  cards:
    - type: custom:mod-card
      style:
        hui-horizontal-stack-card:
          $: |
            #root > button-card {
              margin: 0px;
            }
      card:
        type: horizontal-stack
        cards:
          - type: custom:button-card
            show_icon: false
            show_label: false
            show_name: true
            triggers_update: all
            name: |
              [[[
                return '${config.on_text}'
              ]]]
            styles:
              card:
                - height: 65px
                - padding: 0px
                - margin: 0px
                - border-top-left-radius: 999vh
                - border-bottom-left-radius: 999vh
                - border-top-right-radius: 0vh
                - border-bottom-right-radius: 0vh
                - border: 1px solid
                - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05)
                - font-size: 15px
                - font-weight: 600
                - border-color: |
                    [[[
                      const on = Object.values(hass.states)
                        .filter(e => e.entity_id.startsWith('light.') && e.state === 'on')
                        .length > 0;
                      //return on
                      //  ? (hass.themes.darkMode ? "#fae093": "#745b00")
                      //  : (hass.themes.darkMode ? "#1f2022": 'var(--md-sys-color-surface-variant)');
                      return on
                        ? (hass.themes.darkMode ? "#fae093": "#745b00")
                        : 'var(--md-sys-color-surface-container)';
                    ]]]
                - background-color: |
                    [[[
                      const on = Object.values(hass.states)
                        .filter(e => e.entity_id.startsWith('light.') && e.state === 'on')
                        .length > 0;
                      //return on
                      //  ? (hass.themes.darkMode ? "#50472a": "#ffe083")
                      //  : (hass.themes.darkMode ? "#1f2022": 'var(--md-sys-color-surface-variant)');
                      return on
                        ? (hass.themes.darkMode ? "#50472a": "#ffe083")
                        : 'var(--md-sys-color-surface-container)';
                    ]]]
              name:
                - color: |
                    [[[
                      const on = Object.values(hass.states)
                        .filter(e => e.entity_id.startsWith('light.') && e.state === 'on')
                        .length > 0;
                      //return on
                      //  ? (hass.themes.darkMode ? "#fce08c" : "#745b00")
                      //  : (hass.themes.darkMode ? "#e3e3e5" : 'var(--md-sys-color-on-surface-variant)');
                      return on
                        ? (hass.themes.darkMode ? "#fce08c" : "#745b00")
                        : 'var(--md-sys-color-on-surface-variant)';
                    ]]]
            tap_action:
              action: call-service
              service: light.turn_on
              data:
                entity_id: all
          - type: custom:button-card
            show_icon: false
            show_label: false
            show_name: true
            triggers_update: all
            name: |
              [[[
                return '${config.off_text}'
              ]]]
            styles:
              card:
                - height: 65px
                - padding: 0px
                - margin: 0px
                - border-top-right-radius: 999vh
                - border-bottom-right-radius: 999vh
                - border-top-left-radius: 0vh
                - border-bottom-left-radius: 0vh
                - border: 1px solid
                - font-size: 15px
                - font-weight: 600
                - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05)
                - border-color: |
                    [[[
                      const allOff = Object.values(hass.states)
                        .filter(e => e.entity_id.startsWith('light.') && e.state === 'on')
                        .length === 0;
                      //return allOff
                      //  ? (hass.themes.darkMode ? "#fae093": "#745b00")
                      //  : (hass.themes.darkMode ? "#1f2022": 'var(--md-sys-color-surface-variant)');
                      return allOff
                        ? (hass.themes.darkMode ? "#fae093": "#745b00")
                        : 'var(--md-sys-color-surface-container)';
                    ]]]
                - background-color: |
                    [[[
                      const allOff = Object.values(hass.states)
                        .filter(e => e.entity_id.startsWith('light.') && e.state === 'on')
                        .length === 0;
                      //return allOff
                      //  ? (hass.themes.darkMode ? "#50472a": "#ffe083")
                      //  : (hass.themes.darkMode ? "#1f2022": 'var(--md-sys-color-surface-variant)');
                      return allOff
                        ? (hass.themes.darkMode ? "#50472a": "#ffe083")
                        : "var(--md-sys-color-surface-container)";
                    ]]]
              name:
                - color: |
                    [[[
                      const allOff = Object.values(hass.states)
                        .filter(e => e.entity_id.startsWith('light.') && e.state === 'on')
                        .length === 0;
                      //return allOff
                      //  ? (hass.themes.darkMode ? "#fce08c" : "#745b00")
                      //  : (hass.themes.darkMode ? "#e3e3e5" : 'var(--md-sys-color-on-surface-variant)');
                      return allOff
                        ? (hass.themes.darkMode ? "#fce08c" : "#745b00")
                        : 'var(--md-sys-color-on-surface-variant)';
                    ]]]
            tap_action:
              action: call-service
              service: light.turn_off
              data:
                entity_id: all
`;
}
