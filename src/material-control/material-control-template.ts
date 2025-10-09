import jsyaml from "js-yaml";
import { MaterialControlCardConfig } from "./material-control-const";

export function materialControlTemplate(config: MaterialControlCardConfig) {
  const name = config.name;
  let icon = config.icon;

  // Gestione icona come template string [[[ ... ]]]
  if (
    typeof icon === "string" &&
    icon.trim().startsWith("[[[") &&
    icon.trim().endsWith("]]]")
  ) {
    const indented = icon
      .trim()
      .split("\n")
      .map((line) => "  " + line)
      .join("\n");
    icon = `|\n${indented}`;
  }

  const entity =
    config.use_card_entity && config.entity ? "entity: " + config.entity : "";

  return `type: custom:button-card
name: ${name}
icon: ${icon}
${entity}
${tap_action(config.tap_action)}
${hold_action(config.hold_action)}
styles:
  grid:
    - grid-template-columns: 2fr 1fr 1fr
    - grid-template-rows: 2fr 0.1fr 2fr
    - grid-template-areas: |
        "i . ."
        ". . ."
        "n n n"
  card:
    - height: 140px
    - width: 140px
    - border-radius: 30px
    - margin-bottom: 1px
    - box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.05), 0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
    - background-color: |
        [[[ 
          return hass.themes.darkMode
            ? "var(--md-sys-color-surface-container, '#1f2022')"
            : "var(--md-sys-color-surface-container, '#eeedf2')";
        ]]]
  name:
    - font-size: 1rem
    - font-weight: bold
    - justify-self: start
    - align-self: center
    - margin-left: 20px
    - width: 100px
    - text-align: left
    - white-space: normal
    - overflow-wrap: break-word
    - word-break: break-word
    - color: |
        [[[ 
          return hass.themes.darkMode
            ? "var(--md-sys-color-on-surface-variant,'#e3e3e5')"
            : "var(--md-sys-color-on-surface-variant,'#1b1b1d')";
        ]]]
  icon:
    - color: |
        [[[ 
          return hass.themes.darkMode
            ? "var(--md-sys-color-on-surface-variant,'#c4c7d0')"
            : "var(--md-sys-color-on-surface-variant,'#43484e')";
        ]]]
`;
}

/* -------------------
 * TAP ACTION
 * ------------------- */
function tap_action(tap_action: any) {
  if (!tap_action)
    return `tap_action:
  action: none`;

  if (tap_action.action === "google-home")
    return `tap_action:
  action: url
  url_path: |
    [[[ 
      const ua = navigator.userAgent || "";
      if (ua.includes("Android")) {
        return "app://com.google.android.apps.chromecast.app";
      } else if (ua.includes("iPhone") || ua.includes("iPad")) {
        return "googlehome://";
      } else {
        return "https://home.google.com/";
      }
    ]]]`;

  if (tap_action.action === "settings")
    return `tap_action:
      action: navigate
      navigation_path: |
        [[[ 
          const isAdmin = hass.user?.is_admin;
          return isAdmin ? "/config/dashboard" : "/profile";
        ]]]`;

  if (tap_action.action === "navigate")
    return `tap_action:
      action: navigate
      navigation_path: ${tap_action.navigation_path}`;

  if (tap_action.action === "call-service") {
    const yamlData =
      tap_action.service_data && typeof tap_action.service_data === "object"
        ? "\n" +
          jsyaml
            .dump(tap_action.service_data)
            .split("\n")
            .map((l) => (l ? "        " + l : l))
            .join("\n")
        : " {}";

    return `tap_action:
      action: call-service
      service: ${tap_action.service}
      service_data:${yamlData}`;
  }

  if (tap_action.action === "more-info")
    return `tap_action:
      action: more-info`;

  if (tap_action.action === "toggle")
    return `tap_action:
      action: toggle`;

  if (tap_action.action === "url")
    return `tap_action:
      action: url
      url_path: ${tap_action.url_path}`;

  return `tap_action:
  action: none`;
}

/* -------------------
 * HOLD ACTION
 * ------------------- */
function hold_action(hold_action: any) {
  if (!hold_action)
    return `hold_action:
  action: none`;

  if (hold_action.action === "google-home")
    return `hold_action:
  action: url
  url_path: |
    [[[ 
      const ua = navigator.userAgent || "";
      if (ua.includes("Android")) {
        return "app://com.google.android.apps.chromecast.app";
      } else if (ua.includes("iPhone") || ua.includes("iPad")) {
        return "googlehome://";
      } else {
        return "https://home.google.com/";
      }
    ]]]`;

  if (hold_action.action === "settings")
    return `hold_action:
      action: navigate
      navigation_path: |
        [[[ 
          const isAdmin = hass.user?.is_admin;
          return isAdmin ? "/config/dashboard" : "/profile";
        ]]]`;

  if (hold_action.action === "navigate")
    return `hold_action:
      action: navigate
      navigation_path: ${hold_action.navigation_path}`;

  if (hold_action.action === "call-service") {
    const yamlData =
      hold_action.service_data && typeof hold_action.service_data === "object"
        ? "\n" +
          jsyaml
            .dump(hold_action.service_data)
            .split("\n")
            .map((l) => (l ? "        " + l : l))
            .join("\n")
        : " {}";

    return `hold_action:
      action: call-service
      service: ${hold_action.service}
      service_data:${yamlData}`;
  }

  if (hold_action.action === "more-info")
    return `hold_action:
      action: more-info`;

  if (hold_action.action === "toggle")
    return `hold_action:
      action: toggle`;

  if (hold_action.action === "url")
    return `hold_action:
      action: url
      url_path: ${hold_action.url_path}`;

  return `hold_action:
  action: none`;
}
