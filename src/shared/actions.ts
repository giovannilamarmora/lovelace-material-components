export function serializeAction(action: any, defaultAction = "none"): string {
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

/**
 * Valuta tutte le proprietà di un'ActionConfig che siano template [[[ ... ]]]
 * @param action L'oggetto ActionConfig (tap_action, hold_action, ecc.)
 * @param stateObj Lo state object dell'entità
 * @param state Lo stato corrente dell'entità
 * @param hass L'istanza hass
 * @returns Nuovo oggetto con tutte le proprietà valutate
 */
export function evaluateAction(
  action: any,
  stateObj: any,
  state: any,
  hass: any
) {
  if (!action || typeof action !== "object") return action;

  const newAction: any = {};

  for (const key of Object.keys(action)) {
    newAction[key] = mapJSFunction(action[key], stateObj, state, hass);
  }

  return newAction;
}

// 🟢 Supporto template stile [[[ ... ]]]
export function mapJSFunction(
  value: any,
  stateObj: any,
  state: any,
  hass: any
) {
  if (
    typeof value === "string" &&
    value.trim().startsWith("[[[") &&
    value.trim().endsWith("]]]")
  ) {
    try {
      const code = value.trim().slice(3, -3); // rimuove [[[ e ]]]
      const fn = new Function("entity", "state", "hass", code);
      const result = fn(stateObj, state, hass);
      if (result && typeof result === "string") {
        return result;
      }
    } catch (e) {
      console.warn("Error evaluating icon template:", e);
      return value;
    }
  }

  return value;
}
