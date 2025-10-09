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

function serializeAction(action: any, defaultAction = "none"): string {
  console.log(action);
  if (!action) return `action: ${defaultAction}`;

  if (action.action === "google-home")
    return `action: url
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

  if (action.action === "settings")
    return `action: navigate
  navigation_path: |
    [[[ 
      const isAdmin = hass.user?.is_admin;
      return isAdmin ? "/config/dashboard" : "/profile";
    ]]]`;
  //console.log(action);
  //console.log(jsyaml.dump(action));
  //return jsyaml.dump(action);
  // Se è un oggetto normale, genera YAML con indentazione corretta
  const yamlLines = [`action: ${action.action || defaultAction}`];
  for (const key of Object.keys(action)) {
    if (key === "action") continue;
    const value = action[key];
    if (typeof value === "string" && !value.includes("[[["))
      yamlLines.push(`  ${key}: ${value}`);
    else if (typeof value === "string" && value.includes("[[["))
      yamlLines.push(`  ${key}: |\n    ${value.replace(/\n/g, "\n    ")}`);
    else yamlLines.push(`  ${key}: ${JSON.stringify(value)}`);
  }
  return yamlLines.join("\n");
}
