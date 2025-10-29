import { localize } from "../localize/localize";
import { MaterialDashboardCardConfig } from "./material-dashboard-const";

const otherAction = (
  action: "tap_action" | "hold_action" | "double_tap_action"
) => {
  switch (action) {
    case "tap_action":
      return "hold_action";
    case "hold_action":
      return "tap_action";
    case "double_tap_action":
      return "tap_action";
  }
};

export function materialDashboadTemplate(config: MaterialDashboardCardConfig) {
  console.log(config);
  const camera_path: string | undefined = config.cameras;
  const lighting_path: string | undefined = config.lighting;
  const wifi_path: string | undefined = config.wifi;
  const climate_path: string | undefined = config.climate;
  const action = "tap_action";
  return `type: custom:swipe-card
card_width: max-content
parameters:
  grabCursor: true
  centeredSlides: false
  slidesPerView: auto
  preventClicksPropagation: true
  preventClicks: true
  threshold: 30
  #slidesOffsetBefore: 13
  slidesOffsetAfter: 13
cards:
  - type: custom:button-card
    show_icon: false
    show_name: false
    show_label: false
    # disabilitiamo ogni interazione
    tap_action:
      action: none
    hold_action:
      action: none
    styles:
      card:
        - width: 13px
        - height: 130px
        - min-width: 13px
        - min-height: 130px
        - padding: 0px
        - margin: 0px
        - box-shadow: none
        - background: transparent
        - pointer-events: none
        - border: none
  ${config.hide_cameras ? "" : showCameras(action, camera_path)}
  ${config.hide_cameras ? "" : showCameras(action, camera_path)}
  ${config.hide_lighting ? "" : showLighting(action, lighting_path)}
  ${config.hide_lighting ? "" : showLighting(action, lighting_path)}
  ${config.hide_wifi ? "" : showWifi(action, wifi_path)}
  ${config.hide_climate ? "" : showClimate(action, climate_path)}
`;
}

function showCameras(action: any, camera_path: string | undefined) {
  return `- type: custom:button-card
    icon: m3r:videocam
    name: ${localize("material_dashboard_card.cameras_name")}
    triggers_update: all
    label: |
      [[[
          const devices = Object.keys(hass.states).filter((e) =>
          e.startsWith("camera.") &&
          hass.entities[e] &&
          !hass.entities[e].hidden
        ).length;
        return devices > 1 ? devices + " " + "${localize("material_dashboard_card.devices")}" : devices + " " + "${localize("material_dashboard_card.device")}";
      ]]]
    show_name: true
    show_label: true
    show_icon: true
    ${otherAction(action)}:
      action: none
      haptic: medium
    ${action}:
      action: ${camera_path ? "navigate" : "none"}
      navigation_path: ${camera_path}
      haptic: medium
    styles:
      grid:
        - grid-template-columns: 2fr 1fr 1fr
        - grid-template-rows: 2fr 0.1fr 1fr 1fr
        - grid-template-areas: |
            "i . ."
            ". . ."
            "n n n"
            "l l l"
      card:
        - display: |
            [[[
              const lights = Object.keys(hass.states).filter(e => e.startsWith("camera.") && hass.states[e].state !== "unavailable" &&
                hass.entities[e] &&
                !hass.entities[e].hidden);
              return lights.length === 0 ? "none" : "block";
            ]]]
        - margin-bottom: 1px
        - margin-right: 8px
        - height: 130px
        - width: 130px
        - border-radius: 30px
        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),
            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
      name:
        - font-size: 1rem
        - font-weight: bold
        - justify-self: start
        - align-self: end
        - margin: 0px 20px 0px 20px
        - max-width: -webkit-fill-available;
        - color: |
            [[[
              return hass.themes.darkMode ? '#E8EAED' : '#202124';
            ]]]
      label:
        - font-size: 0.85rem
        - justify-self: start
        - align-self: start
        - margin: 2px 0px 0px 20px
        - color: |
            [[[
              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';
            ]]]
      icon:
        - color: |
            [[[
              return hass.themes.darkMode ? '#8AB4F8' : '#1A73E8';
            ]]]
    state:
      - operator: template
        value: |
          [[[
            return Object.keys(hass.states).some(entity => 
              entity.startsWith('camera.') && 
              (hass.states[entity].state === 'on' || hass.states[entity].state === 'idle')
            );
          ]]]
        styles:
          card:
            - background: |
                [[[
                  return hass.themes.darkMode ? '#1A2238' : '#E8F0FE';
                ]]]
          icon:
            - color: |
                [[[
                  return hass.themes.darkMode ? '#8AB4F8' : '#1A73E8';
                ]]]
`;
}

function showLighting(action: any, lighting_path: string | undefined) {
  return `- type: custom:button-card
    icon: m3r:light-group
    name: ${localize("material_dashboard_card.lighting_name")}
    triggers_update: all
    label: |
      [[[
        const lightEntities = Object.keys(hass.states).filter(
        (entity) =>
          entity.startsWith("light.") &&
          hass.states[entity].state !== "unavailable" &&
          hass.entities[entity] &&
          !hass.entities[entity].hidden
        );
        const lightsOn = lightEntities.filter(
          (entity) => hass.states[entity].state === "on"
        ).length;
        const totalLights = lightEntities.length;
        return lightsOn + "/" + totalLights + " ${localize("material_dashboard_card.lighting_label")}";
      ]]]
    show_name: true
    show_label: true
    show_icon: true
    ${otherAction(action)}:
      action: none
      haptic: medium
    ${action}:
      action: ${lighting_path ? "navigate" : "none"}
      navigation_path: ${lighting_path}
      haptic: medium
    styles:
      grid:
        - grid-template-columns: 2fr 1fr 1fr
        - grid-template-rows: 2fr 0.1fr 1fr 1fr
        - grid-template-areas: |
            "i . ."
            ". . ."
            "n n n"
            "l l l"
      card:
        - display: |
            [[[
              const lights = Object.keys(hass.states).filter(e => e.startsWith("light.") && 
                hass.states[e].state !== "unavailable" &&
                hass.entities[e] &&
                !hass.entities[e].hidden);
              return lights.length === 0 ? "none" : "block";
            ]]]
        - margin-bottom: 1px
        - margin-right: 8px
        - height: 130px
        - width: 130px
        - border-radius: 30px
        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),
            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
      name:
        - font-size: 1rem
        - font-weight: bold
        - justify-self: start
        - align-self: end
        - margin: 0px 20px 0px 20px
        - max-width: -webkit-fill-available;
        - color: |
            [[[
              return hass.themes.darkMode ? '#FFFFFF' : '#202124';
            ]]]
      label:
        - font-size: 0.85rem
        - justify-self: start
        - align-self: start
        - margin: 2px 0px 0px 20px
        - color: |
            [[[
              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';
            ]]]
      icon:
        - color: |
            [[[
              return hass.themes.darkMode ? '#FBBC04' : '#F9AB00';
            ]]]
    state:
      - operator: template
        value: |
          [[[
            return Object.keys(hass.states).some(entity => 
              entity.startsWith('light.') && 
              hass.states[entity].state === 'on'
            );
          ]]]
        styles:
          card:
            - background: |
                [[[
                  return hass.themes.darkMode ? '#332f2a' : '#FEF7E0';
                ]]]
          icon:
            - color: |
                [[[
                  return hass.themes.darkMode ? '#FBBC04' : '#745b00';
                ]]]
`;
}

function showWifi(action: any, wifi_path: string | undefined) {
  return `- type: custom:button-card
    icon: m3of:wifi
    name: ${localize("material_dashboard_card.wifi_name")}
    triggers_update: all
    label: |
      [[[
        const devices = Object.keys(hass.states).filter(
          (entity) =>
            entity.startsWith("device_tracker.") &&
            hass.states[entity].state === "home" &&
            hass.entities[entity] &&
            !hass.entities[entity].hidden
        ).length;
        return devices > 1 ? (devices + " " + "${localize("material_dashboard_card.devices")}") : (devices + " " + "${localize("material_dashboard_card.device")}");
      ]]]
    show_name: true
    show_label: true
    show_icon: true
    ${otherAction(action)}:
      action: none
      haptic: medium
    ${action}:
      action: ${wifi_path ? "navigate" : "none"}
      navigation_path: ${wifi_path}
      haptic: medium
    styles:
      grid:
        - grid-template-columns: 2fr 1fr 1fr
        - grid-template-rows: 2fr 0.1fr 1fr 1fr
        - grid-template-areas: |
            "i . ."
            ". . ."
            "n n n"
            "l l l"
      card:
        - display: |
            [[[
              const deviceEntities = Object.keys(hass.states).filter(entity => 
                entity.startsWith('device_tracker.') && 
                hass.states[entity].state === 'home' &&
                hass.entities[entity] &&
                !hass.entities[entity].hidden
              );
              return deviceEntities.length === 0 ? "none" : "block";
            ]]]
        - margin-bottom: 1px
        - margin-right: 8px
        - height: 130px
        - width: 130px
        - border-radius: 30px
        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),
            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
      name:
        - font-size: 1rem
        - font-weight: bold
        - justify-self: start
        - align-self: end
        - margin: 0px 20px 0px 20px
        - max-width: -webkit-fill-available;
        - color: |
            [[[
              return hass.themes.darkMode ? '#FFFFFF' : '#202124';
            ]]]
      label:
        - font-size: 0.85rem
        - justify-self: start
        - align-self: start
        - margin: 2px 0px 0px 20px
        - color: |
            [[[
              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';
            ]]]
      icon:
        - color: |
            [[[
              return hass.themes.darkMode ? '#81C995' : '#137333';
            ]]]
    state:
      - operator: template
        value: |
          [[[
            return Object.keys(hass.states).some(entity => 
              entity.startsWith('device_tracker.') && 
              hass.states[entity].state === 'home'
            );
          ]]]
        styles:
          card:
            - background: |
                [[[
                  return hass.themes.darkMode ? '#2e312e' : '#E6F4EA';
                ]]]
          icon:
            - color: |
                [[[
                  return hass.themes.darkMode ? '#81C995' : '#137333';
                ]]]
`;
}

function showClimate(action: any, climate_path: string | undefined) {
  return `- type: custom:button-card
    icon: m3of:thermostat
    name: ${localize("material_dashboard_card.climate_name")}
    triggers_update: all
    label: |
      [[[
        const climateEntities = Object.keys(hass.states).filter(
            (entity) =>
              entity.startsWith("climate.") &&
              hass.states[entity].state !== "unavailable" &&
              hass.entities[entity] &&
              !hass.entities[entity].hidden
          ).length;
          return climateEntities > 1 ? climateEntities + " " + "${localize("material_dashboard_card.devices")}" : climateEntities + " " + "${localize("material_dashboard_card.device")}";
      ]]]
    show_name: true
    show_label: true
    show_icon: true
    ${otherAction(action)}:
      action: none
      haptic: medium
    ${action}:
      action: ${climate_path ? "navigate" : "none"}
      navigation_path: ${climate_path}
      haptic: medium
    styles:
      grid:
        - grid-template-columns: 2fr 1fr 1fr
        - grid-template-rows: 2fr 0.1fr 1fr 1fr
        - grid-template-areas: |
            "i . ."
            ". . ."
            "n n n"
            "l l l"
      card:
        - display: |
            [[[
              const climateEntities = Object.keys(hass.states).filter(entity => 
                entity.startsWith('climate.') && 
                hass.states[entity].state !== 'unavailable' &&
                hass.entities[entity] &&
                !hass.entities[entity].hidden
              );
              return climateEntities.length === 0 ? "none" : "block";
            ]]]
        - margin-bottom: 1px
        - margin-right: 8px
        - height: 130px
        - width: 130px
        - border-radius: 30px
        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),
            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
      name:
        - font-size: 1rem
        - font-weight: bold
        - justify-self: start
        - align-self: end
        - margin: 0px 20px 0px 20px
        - max-width: -webkit-fill-available;
        - color: |
            [[[
              return hass.themes.darkMode ? '#FFFFFF' : '#202124';
            ]]]
      label:
        - font-size: 0.85rem
        - justify-self: start
        - align-self: start
        - margin: 2px 0px 0px 20px
        - color: |
            [[[
              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';
            ]]]
      icon:
        - color: |
            [[[
              return hass.themes.darkMode ? '#ffdbcd' : '#812800';
            ]]]
    state:
      - operator: template
        value: |
          [[[
            return Object.keys(hass.states).some(entity => 
              entity.startsWith('climate.') && 
              (hass.states[entity].state === 'on' || 
                hass.states[entity].state === 'auto' || 
                hass.states[entity].state === 'heat' || 
                hass.states[entity].state === 'cool' || 
                hass.states[entity].state === 'heat_cool')
            );
          ]]]
        styles:
          card:
            - background: |
                [[[
                  return hass.themes.darkMode ? '#352f2d' : '#FCE8E6';
                ]]]
          icon:
            - color: |
                [[[
                  return hass.themes.darkMode ? '#FF8A65' : '#812800';
                ]]]
`;
}

//export function materialDashboadTemplate(config: MaterialDashboardCardConfig) {
//  console.log(config);
//  const camera_path: string | undefined = config.cameras;
//  const lighting_path: string | undefined = config.lighting;
//  const wifi_path: string | undefined = config.wifi;
//  const climate_path: string | undefined = config.climate;
//  const action = "tap_action";
//  return `type: custom:swipe-card
//card_width: max-content
//parameters:
//  grabCursor: true
//  centeredSlides: false
//  slidesPerView: auto
//  spaceBetween: 8
//  preventClicksPropagation: true
//  preventClicks: true
//  threshold: 30
//style:
//  hui-horizontal-stack-card:
//    $: |
//      #root > *:not(:first-child) {
//        margin-left: 8px !important;
//      }
//cards:
//  ${config.hide_cameras ? "" : showCameras(action, camera_path)}
//  ${config.hide_lighting ? "" : showLighting(action, lighting_path)}
//  ${config.hide_wifi ? "" : showWifi(action, wifi_path)}
//  ${config.hide_climate ? "" : showClimate(action, climate_path)}
//`;
//}
//
//function showCameras(action: any, camera_path: string | undefined) {
//  return `- type: custom:button-card
//    icon: m3r:videocam
//    name: ${localize("material_dashboard_card.cameras_name")}
//    triggers_update: all
//    label: |
//      [[[
//          const devices = Object.keys(hass.states).filter((e) =>
//          e.startsWith("camera.") &&
//          hass.entities[e] &&
//          !hass.entities[e].hidden
//        ).length;
//        return devices > 1 ? devices + " " + "${localize("material_dashboard_card.devices")}" : devices + " " + "${localize("material_dashboard_card.device")}";
//      ]]]
//    show_name: true
//    show_label: true
//    show_icon: true
//    ${otherAction(action)}:
//      action: none
//      haptic: medium
//    ${action}:
//      action: ${camera_path ? "navigate" : "none"}
//      navigation_path: ${camera_path}
//      haptic: medium
//    styles:
//      grid:
//        - grid-template-columns: 2fr 1fr 1fr
//        - grid-template-rows: 2fr 0.1fr 1fr 1fr
//        - grid-template-areas: |
//            "i . ."
//            ". . ."
//            "n n n"
//            "l l l"
//      card:
//        - display: |
//            [[[
//              const lights = Object.keys(hass.states).filter(e => e.startsWith("camera.") && hass.states[e].state !== "unavailable" &&
//                hass.entities[e] &&
//                !hass.entities[e].hidden);
//              return lights.length === 0 ? "none" : "block";
//            ]]]
//        - margin-bottom: 1px
//        - margin-left: 13px
//        - height: 130px
//        - width: 130px
//        - border-radius: 30px
//        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),
//            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
//      name:
//        - font-size: 1rem
//        - font-weight: bold
//        - justify-self: start
//        - align-self: end
//        - margin: 0px 20px 0px 20px
//        - max-width: -webkit-fill-available;
//        - color: |
//            [[[
//              return hass.themes.darkMode ? '#E8EAED' : '#202124';
//            ]]]
//      label:
//        - font-size: 0.85rem
//        - justify-self: start
//        - align-self: start
//        - margin: 2px 0px 0px 20px
//        - color: |
//            [[[
//              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';
//            ]]]
//      icon:
//        - color: |
//            [[[
//              return hass.themes.darkMode ? '#8AB4F8' : '#1A73E8';
//            ]]]
//    state:
//      - operator: template
//        value: |
//          [[[
//            return Object.keys(hass.states).some(entity =>
//              entity.startsWith('camera.') &&
//              (hass.states[entity].state === 'on' || hass.states[entity].state === 'idle')
//            );
//          ]]]
//        styles:
//          card:
//            - background: |
//                [[[
//                  return hass.themes.darkMode ? '#1A2238' : '#E8F0FE';
//                ]]]
//          icon:
//            - color: |
//                [[[
//                  return hass.themes.darkMode ? '#8AB4F8' : '#1A73E8';
//                ]]]
//`;
//}
//
//function showLighting(action: any, lighting_path: string | undefined) {
//  return `- type: custom:button-card
//    icon: m3r:light-group
//    name: ${localize("material_dashboard_card.lighting_name")}
//    triggers_update: all
//    label: |
//      [[[
//        const lightEntities = Object.keys(hass.states).filter(
//        (entity) =>
//          entity.startsWith("light.") &&
//          hass.states[entity].state !== "unavailable" &&
//          hass.entities[entity] &&
//          !hass.entities[entity].hidden
//        );
//        const lightsOn = lightEntities.filter(
//          (entity) => hass.states[entity].state === "on"
//        ).length;
//        const totalLights = lightEntities.length;
//        return lightsOn + "/" + totalLights + " ${localize("material_dashboard_card.lighting_label")}";
//      ]]]
//    show_name: true
//    show_label: true
//    show_icon: true
//    ${otherAction(action)}:
//      action: none
//      haptic: medium
//    ${action}:
//      action: ${lighting_path ? "navigate" : "none"}
//      navigation_path: ${lighting_path}
//      haptic: medium
//    styles:
//      grid:
//        - grid-template-columns: 2fr 1fr 1fr
//        - grid-template-rows: 2fr 0.1fr 1fr 1fr
//        - grid-template-areas: |
//            "i . ."
//            ". . ."
//            "n n n"
//            "l l l"
//      card:
//        - display: |
//            [[[
//              const lights = Object.keys(hass.states).filter(e => e.startsWith("light.") &&
//                hass.states[e].state !== "unavailable" &&
//                hass.entities[e] &&
//                !hass.entities[e].hidden);
//              return lights.length === 0 ? "none" : "block";
//            ]]]
//        - margin-left: |
//            [[[
//              const camera = Object.keys(hass.states).filter(e => e.startsWith("camera.") && hass.states[e].state !== "unavailable");
//              return camera.length === 0 ? "5px" : "0px";
//            ]]]
//        - margin-bottom: 1px
//        - height: 130px
//        - width: 130px
//        - border-radius: 30px
//        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),
//            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
//      name:
//        - font-size: 1rem
//        - font-weight: bold
//        - justify-self: start
//        - align-self: end
//        - margin: 0px 20px 0px 20px
//        - max-width: -webkit-fill-available;
//        - color: |
//            [[[
//              return hass.themes.darkMode ? '#FFFFFF' : '#202124';
//            ]]]
//      label:
//        - font-size: 0.85rem
//        - justify-self: start
//        - align-self: start
//        - margin: 2px 0px 0px 20px
//        - color: |
//            [[[
//              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';
//            ]]]
//      icon:
//        - color: |
//            [[[
//              return hass.themes.darkMode ? '#FBBC04' : '#F9AB00';
//            ]]]
//    state:
//      - operator: template
//        value: |
//          [[[
//            return Object.keys(hass.states).some(entity =>
//              entity.startsWith('light.') &&
//              hass.states[entity].state === 'on'
//            );
//          ]]]
//        styles:
//          card:
//            - background: |
//                [[[
//                  return hass.themes.darkMode ? '#332f2a' : '#FEF7E0';
//                ]]]
//          icon:
//            - color: |
//                [[[
//                  return hass.themes.darkMode ? '#FBBC04' : '#745b00';
//                ]]]
//`;
//}
//
//function showWifi(action: any, wifi_path: string | undefined) {
//  return `- type: custom:button-card
//    icon: m3of:wifi
//    name: ${localize("material_dashboard_card.wifi_name")}
//    triggers_update: all
//    label: |
//      [[[
//        const devices = Object.keys(hass.states).filter(
//          (entity) =>
//            entity.startsWith("device_tracker.") &&
//            hass.states[entity].state === "home" &&
//            hass.entities[entity] &&
//            !hass.entities[entity].hidden
//        ).length;
//        return devices > 1 ? (devices + " " + "${localize("material_dashboard_card.devices")}") : (devices + " " + "${localize("material_dashboard_card.device")}");
//      ]]]
//    show_name: true
//    show_label: true
//    show_icon: true
//    ${otherAction(action)}:
//      action: none
//      haptic: medium
//    ${action}:
//      action: ${wifi_path ? "navigate" : "none"}
//      navigation_path: ${wifi_path}
//      haptic: medium
//    styles:
//      grid:
//        - grid-template-columns: 2fr 1fr 1fr
//        - grid-template-rows: 2fr 0.1fr 1fr 1fr
//        - grid-template-areas: |
//            "i . ."
//            ". . ."
//            "n n n"
//            "l l l"
//      card:
//        - display: |
//            [[[
//              const deviceEntities = Object.keys(hass.states).filter(entity =>
//                entity.startsWith('device_tracker.') &&
//                hass.states[entity].state === 'home' &&
//                hass.entities[entity] &&
//                !hass.entities[entity].hidden
//              );
//              return deviceEntities.length === 0 ? "none" : "block";
//            ]]]
//        - margin-left: |
//            [[[
//              const cameras = Object.keys(hass.states).filter(e => e.startsWith("camera.") && hass.states[e].state !== "unavailable");
//              const lights = Object.keys(hass.states).filter(e =>
//                e.startsWith("light.") && hass.states[e].state !== "unavailable");
//              return lights.length === 0 ? "-8px" : "0px";
//
//              if (lights.length === 0 && cameras.length === 0)
//                return "5px";
//              else if (lights.length != 0 || cameras.length != 0)
//                return "-8px";
//              else return "0px";
//            ]]]
//        - margin-bottom: 1px
//        - height: 130px
//        - width: 130px
//        - border-radius: 30px
//        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),
//            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
//      name:
//        - font-size: 1rem
//        - font-weight: bold
//        - justify-self: start
//        - align-self: end
//        - margin: 0px 20px 0px 20px
//        - max-width: -webkit-fill-available;
//        - color: |
//            [[[
//              return hass.themes.darkMode ? '#FFFFFF' : '#202124';
//            ]]]
//      label:
//        - font-size: 0.85rem
//        - justify-self: start
//        - align-self: start
//        - margin: 2px 0px 0px 20px
//        - color: |
//            [[[
//              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';
//            ]]]
//      icon:
//        - color: |
//            [[[
//              return hass.themes.darkMode ? '#81C995' : '#137333';
//            ]]]
//    state:
//      - operator: template
//        value: |
//          [[[
//            return Object.keys(hass.states).some(entity =>
//              entity.startsWith('device_tracker.') &&
//              hass.states[entity].state === 'home'
//            );
//          ]]]
//        styles:
//          card:
//            - background: |
//                [[[
//                  return hass.themes.darkMode ? '#2e312e' : '#E6F4EA';
//                ]]]
//          icon:
//            - color: |
//                [[[
//                  return hass.themes.darkMode ? '#81C995' : '#137333';
//                ]]]
//`;
//}
//
//function showClimate(action: any, climate_path: string | undefined) {
//  return `- type: custom:button-card
//    icon: m3of:thermostat
//    name: ${localize("material_dashboard_card.climate_name")}
//    triggers_update: all
//    label: |
//      [[[
//        const climateEntities = Object.keys(hass.states).filter(
//            (entity) =>
//              entity.startsWith("climate.") &&
//              hass.states[entity].state !== "unavailable" &&
//              hass.entities[entity] &&
//              !hass.entities[entity].hidden
//          ).length;
//          return climateEntities > 1 ? climateEntities + " " + "${localize("material_dashboard_card.devices")}" : climateEntities + " " + "${localize("material_dashboard_card.device")}";
//      ]]]
//    show_name: true
//    show_label: true
//    show_icon: true
//    ${otherAction(action)}:
//      action: none
//      haptic: medium
//    ${action}:
//      action: ${climate_path ? "navigate" : "none"}
//      navigation_path: ${climate_path}
//      haptic: medium
//    styles:
//      grid:
//        - grid-template-columns: 2fr 1fr 1fr
//        - grid-template-rows: 2fr 0.1fr 1fr 1fr
//        - grid-template-areas: |
//            "i . ."
//            ". . ."
//            "n n n"
//            "l l l"
//      card:
//        - display: |
//            [[[
//              const climateEntities = Object.keys(hass.states).filter(entity =>
//                entity.startsWith('climate.') &&
//                hass.states[entity].state !== 'unavailable' &&
//                hass.entities[entity] &&
//                !hass.entities[entity].hidden
//              );
//              return climateEntities.length === 0 ? "none" : "block";
//            ]]]
//        - margin-left: |
//            [[[
//              const cameras = Object.keys(hass.states).filter((e) =>
//                e.startsWith("camera.") &&
//                hass.entities[e] &&
//                !hass.entities[e].hidden
//              ).length;
//              const lights = Object.keys(hass.states).filter(e =>
//                e.startsWith("light.") && hass.states[e].state !== "unavailable");
//              const deviceEntities = Object.keys(hass.states).filter(entity =>
//                entity.startsWith('device_tracker.') && hass.states[entity].state === 'home');
//              if (deviceEntities.length === 0 && lights.length === 0 && cameras.length === 0)
//                return "5px";
//              else if (deviceEntities.length === 0 && lights.length != 0)
//                return "-8px";
//              else return "0px";
//            ]]]
//        - margin-bottom: 1px
//        - height: 130px
//        - width: 130px
//        - border-radius: 30px
//        - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05),
//            0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
//      name:
//        - font-size: 1rem
//        - font-weight: bold
//        - justify-self: start
//        - align-self: end
//        - margin: 0px 20px 0px 20px
//        - max-width: -webkit-fill-available;
//        - color: |
//            [[[
//              return hass.themes.darkMode ? '#FFFFFF' : '#202124';
//            ]]]
//      label:
//        - font-size: 0.85rem
//        - justify-self: start
//        - align-self: start
//        - margin: 2px 0px 0px 20px
//        - color: |
//            [[[
//              return hass.themes.darkMode ? '#9AA0A6' : '#5F6368';
//            ]]]
//      icon:
//        - color: |
//            [[[
//              return hass.themes.darkMode ? '#ffdbcd' : '#812800';
//            ]]]
//    state:
//      - operator: template
//        value: |
//          [[[
//            return Object.keys(hass.states).some(entity =>
//              entity.startsWith('climate.') &&
//              (hass.states[entity].state === 'on' ||
//                hass.states[entity].state === 'auto' ||
//                hass.states[entity].state === 'heat' ||
//                hass.states[entity].state === 'cool' ||
//                hass.states[entity].state === 'heat_cool')
//            );
//          ]]]
//        styles:
//          card:
//            - background: |
//                [[[
//                  return hass.themes.darkMode ? '#352f2d' : '#FCE8E6';
//                ]]]
//          icon:
//            - color: |
//                [[[
//                  return hass.themes.darkMode ? '#FF8A65' : '#812800';
//                ]]]
//`;
//}
