import { MaterialLightCardConfig } from "./material-lights-const";

export function materialTemplate(config: MaterialLightCardConfig) {
  const area_id: any =
    config.control_area && config.area_id ? config.area_id : undefined;

  return `type: custom:mod-card
card_mod:
  style: |
    ha-card {
      box-shadow: none !important;
    }
card:
  type: vertical-stack
  cards:
    - type: custom:mod-card
      card_mod:
        style: |
          ha-card {
            box-shadow: none !important;
          }
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
                      let area_id = ${area_id ? "'" + area_id + "'" : undefined}
                      let lightsInArea;
                      let anyOn = false;
                      if (area_id) {
                        const allEntities = Object.values(hass.entities);

                        // filtra le luci dell'area
                        lightsInArea = allEntities
                          .filter((ent) => ent.entity_id.startsWith("light.") && ent.device_id) // solo luci con device
                          .filter((ent) => {
                            const device = hass.devices[ent.device_id];
                            return device && device.area_id === area_id;
                          })
                          .map((ent) => ent.entity_id);

                        anyOn = lightsInArea.some((id) => hass.states[id]?.state === "on");
                      } else {
                        anyOn =
                          Object.values(hass.states).filter(
                            (e) => e.entity_id.startsWith("light.") && e.state === "on"
                          ).length > 0;
                      }
                      return anyOn
                        ? (hass.themes.darkMode ? "#fae093": "#745b00")
                        : 'var(--md-sys-color-surface-container)';
                    ]]]
                - background-color: |
                    [[[
                      let area_id = ${area_id ? "'" + area_id + "'" : undefined}
                      let lightsInArea;
                      let anyOn = false;
                      if (area_id) {
                        const allEntities = Object.values(hass.entities);

                        // filtra le luci dell'area
                        lightsInArea = allEntities
                          .filter((ent) => ent.entity_id.startsWith("light.") && ent.device_id) // solo luci con device
                          .filter((ent) => {
                            const device = hass.devices[ent.device_id];
                            return device && device.area_id === area_id;
                          })
                          .map((ent) => ent.entity_id);

                        anyOn = lightsInArea.some((id) => hass.states[id]?.state === "on");
                      } else {
                        anyOn =
                          Object.values(hass.states).filter(
                            (e) => e.entity_id.startsWith("light.") && e.state === "on"
                          ).length > 0;
                      }
                      return anyOn
                        ? (hass.themes.darkMode ? "#50472a": "#ffe083")
                        : 'var(--md-sys-color-surface-container)';
                    ]]]
              name:
                - color: |
                    [[[
                      let area_id = ${area_id ? "'" + area_id + "'" : undefined}
                      let lightsInArea;
                      let anyOn = false;
                      if (area_id) {
                        const allEntities = Object.values(hass.entities);

                        // filtra le luci dell'area
                        lightsInArea = allEntities
                          .filter((ent) => ent.entity_id.startsWith("light.") && ent.device_id) // solo luci con device
                          .filter((ent) => {
                            const device = hass.devices[ent.device_id];
                            return device && device.area_id === area_id;
                          })
                          .map((ent) => ent.entity_id);

                        anyOn = lightsInArea.some((id) => hass.states[id]?.state === "on");
                      } else {
                        anyOn =
                          Object.values(hass.states).filter(
                            (e) => e.entity_id.startsWith("light.") && e.state === "on"
                          ).length > 0;
                      }
                      return anyOn
                        ? (hass.themes.darkMode ? "#fce08c" : "#745b00")
                        : 'var(--md-sys-color-on-surface-variant)';
                    ]]]
            tap_action:
              action: call-service
              service: light.turn_on
              data:
                ${area_id ? "area_id: " + area_id : "entity_id: all"}
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
                      let area_id = ${area_id ? "'" + area_id + "'" : undefined}
                      let lightsInArea;
                      let allOff = false;
                      if (area_id) {
                        const allEntities = Object.values(hass.entities);

                        // filtra le luci dell'area
                        lightsInArea = allEntities
                          .filter((ent) => ent.entity_id.startsWith("light.") && ent.device_id) // solo luci con device
                          .filter((ent) => {
                            const device = hass.devices[ent.device_id];
                            return device && device.area_id === area_id;
                          })
                          .map((ent) => ent.entity_id);

                        allOff = lightsInArea.every((id) => hass.states[id]?.state === "off");
                      } else {
                        allOff =
                          Object.values(hass.states).filter(
                            (e) => e.entity_id.startsWith("light.") && e.state === "on"
                          ).length === 0;
                      }
                      return allOff
                        ? (hass.themes.darkMode ? "#fae093": "#745b00")
                        : 'var(--md-sys-color-surface-container)';
                    ]]]
                - background-color: |
                    [[[
                      let area_id = ${area_id ? "'" + area_id + "'" : undefined}
                      let lightsInArea;
                      let allOff = false;
                      if (area_id) {
                        const allEntities = Object.values(hass.entities);

                        // filtra le luci dell'area
                        lightsInArea = allEntities
                          .filter((ent) => ent.entity_id.startsWith("light.") && ent.device_id) // solo luci con device
                          .filter((ent) => {
                            const device = hass.devices[ent.device_id];
                            return device && device.area_id === area_id;
                          })
                          .map((ent) => ent.entity_id);

                        allOff = lightsInArea.every((id) => hass.states[id]?.state === "off");
                      } else {
                        allOff =
                          Object.values(hass.states).filter(
                            (e) => e.entity_id.startsWith("light.") && e.state === "on"
                          ).length === 0;
                      }
                      return allOff
                        ? (hass.themes.darkMode ? "#50472a": "#ffe083")
                        : "var(--md-sys-color-surface-container)";
                    ]]]
              name:
                - color: |
                    [[[
                      let area_id = ${area_id ? "'" + area_id + "'" : undefined}
                      let lightsInArea;
                      let allOff = false;
                      if (area_id) {
                        const allEntities = Object.values(hass.entities);

                        // filtra le luci dell'area
                        lightsInArea = allEntities
                          .filter((ent) => ent.entity_id.startsWith("light.") && ent.device_id) // solo luci con device
                          .filter((ent) => {
                            const device = hass.devices[ent.device_id];
                            return device && device.area_id === area_id;
                          })
                          .map((ent) => ent.entity_id);

                        allOff = lightsInArea.every((id) => hass.states[id]?.state === "off");
                      } else {
                        allOff =
                          Object.values(hass.states).filter(
                            (e) => e.entity_id.startsWith("light.") && e.state === "on"
                          ).length === 0;
                      }
                      return allOff
                        ? (hass.themes.darkMode ? "#fce08c" : "#745b00")
                        : 'var(--md-sys-color-on-surface-variant)';
                    ]]]
            tap_action:
              action: call-service
              service: light.turn_off
              data:
                ${area_id ? "area_id: " + area_id : "entity_id: all"}
`;
}
