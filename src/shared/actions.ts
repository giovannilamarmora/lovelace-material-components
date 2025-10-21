/**
 * Serializes an action object into a **YAML-formatted string** compatible with Home Assistant's Lovelace configuration.
 *
 * This utility is primarily used to dynamically generate `action:` definitions
 * for buttons, cards, or custom components — including support for special actions
 * like opening Google Home or navigating to settings.
 *
 * ---
 * ### 🔹 Behavior
 * - If `action` is `null` or `undefined`, returns a default action line (e.g., `"action: none"`).
 * - Supports special hardcoded actions:
 *   - `"google-home"` → opens the Google Home app or website, depending on the platform.
 *   - `"settings"` → navigates to the Admin Dashboard (for admins) or Profile (for normal users).
 * - For all other actions, it builds a YAML representation, preserving indentation and multi-line templates.
 *
 * @param action - The action object to serialize (e.g., `{ action: 'navigate', navigation_path: '/lovelace' }`).
 * @param defaultAction - The fallback action name to use if none is provided (default: `"none"`).
 * @returns A YAML string representing the action definition.
 *
 * @example
 * ```ts
 * // Example 1: Standard action
 * serializeAction({ action: "navigate", navigation_path: "/lovelace" });
 * // =>
 * // action: navigate
 * //   navigation_path: /lovelace
 *
 * // Example 2: Google Home app launch (auto-detects Android / iOS / Web)
 * serializeAction({ action: "google-home" });
 * // =>
 * // action: url
 * //   url_path: |
 * //     [[[
 * //       const ua = navigator.userAgent || "";
 * //       if (ua.includes("Android")) {
 * //         return "app://com.google.android.apps.chromecast.app";
 * //       } else if (ua.includes("iPhone") || ua.includes("iPad")) {
 * //         return "googlehome://";
 * //       } else {
 * //         return "https://home.google.com/";
 * //       }
 * //     ]]]
 *
 * // Example 3: Settings navigation (dynamic admin detection)
 * serializeAction({ action: "settings" });
 * // =>
 * // action: navigate
 * //   navigation_path: |
 * //     [[[
 * //       const isAdmin = hass.user?.is_admin;
 * //       return isAdmin ? "/config/dashboard" : "/profile";
 * //     ]]]
 *
 * // Example 4: Empty or missing action
 * serializeAction(null, "none"); // "action: none"
 * ```
 */
export function serializeAction(action: any, defaultAction = "none"): string {
  if (!action) return `action: ${defaultAction}`;

  // 🟦 Special case: Open Google Home app or web version
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

  // 🟦 Special case: Navigate to settings (admin-aware)
  if (action.action === "settings")
    return `action: navigate
  navigation_path: |
    [[[ 
      const isAdmin = hass.user?.is_admin;
      return isAdmin ? "/config/dashboard" : "/profile";
    ]]]`;

  //console.log(jsyaml.dump(action));
  //return jsyaml.dump(action);
  // 🟩 Generic YAML serialization for other actions
  const yamlLines = [`action: ${action.action || defaultAction}`];

  for (const key of Object.keys(action)) {
    if (key === "action") continue;
    const value = action[key];

    if (typeof value === "string" && !value.includes("[[[")) {
      yamlLines.push(`  ${key}: ${value}`);
    } else if (typeof value === "string" && value.includes("[[[")) {
      yamlLines.push(`  ${key}: |\n    ${value.replace(/\n/g, "\n    ")}`);
    } else {
      yamlLines.push(`  ${key}: ${JSON.stringify(value)}`);
    }
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
