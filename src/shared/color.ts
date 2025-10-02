/**
 * Sets a CSS property on a `style` object, optionally applying a transformation
 * function to the value before assigning it.
 *
 * @param name - The name of the CSS property to set (e.g., `"color"`, `"font-size"`, `"margin"`).
 * @param value - The value to assign to the property. If `undefined`, `null`, or an empty string, the property is not set.
 * @param style - The `style` object where the property should be applied (e.g., `element.style`).
 * @param transform - (Optional) A function that takes `value` and returns a string to be used as the CSS property value.
 *                    Defaults to the identity function (returns the value as-is).
 *
 * @example
 * // Set the text color to red
 * _setStyleProperty("color", "red", element.style);
 *
 * @example
 * // Set the width, automatically appending "px"
 * _setStyleProperty("width", 100, element.style, (v) => `${v}px`);
 */
export function _setStyleProperty(
  name: string,
  value: any,
  style: any,
  transform = (value: any): string => value
): void {
  if (value !== undefined && value !== null && value !== "") {
    style.setProperty(name, transform(value));
  }
}

/**
 * A color configuration object that defines theme-based styles for Google-like UI components.
 * It supports both **dark** and **light** themes and organizes colors by component state:
 * - **offline**: When the device or service is unavailable
 * - **on**: When the component is active or enabled
 * - **off**: When the component is inactive or disabled
 *
 * Each state includes color definitions for:
 * - **climate**: UI elements related to climate controls (supports `default`, `material`, `material_dry`)
 * - **button**: Button text, icon, percentage, and background colors
 * - **light**: Lighting-related UI elements (text, icons, sliders, backgrounds)
 *
 * Colors are primarily defined using CSS variables with fallbacks or direct hex/rgba values.
 * Some groups include multiple variants (e.g., `material`, `material_dry`, `default`).
 *
 * @example
 * // Access dark theme "on" button background
 * const background = google_color.dark.on.button.background;
 *
 * @example
 * // Access light theme "offline" climate icon
 * const iconColor = google_color.light.offline.climate.icon;
 */
export const google_color = {
  dark: {
    offline: {
      // (Updated on 04/08/2025)
      climate: {
        title: "var(--md-sys-color-outline, #717173)",
        icon: "var(--md-sys-color-outline, #717173)",
        background: "var(--md-sys-color-surface-container-highest, #2c2c2e)",
      },
      // (Updated on 04/08/2025)
      button: {
        title: "var(--md-sys-color-outline, #717173)",
        icon: "var(--md-sys-color-outline, #717173)",
        percentage: "var(--md-sys-color-outline, #717173)",
        background: "var(--md-sys-color-surface-container-highest, #2c2c2e)",
      },
      // (Updated on 04/08/2025)
      light: {
        title: "var(--md-sys-color-outline, #717173)",
        icon: "var(--md-sys-color-outline, #717173)",
        percentage: "var(--md-sys-color-outline, #717173)",
        slider: "var(--md-sys-color-surface-container-highest, #2c2c2e)",
        background: "var(--md-sys-color-surface-container-highest, #2c2c2e)",
      },
    },
    on: {
      climate: {
        // (Updated on 04/08/2025)
        material: {
          title: "#fedcca",
          subtitle: "#e6c0b2",
          icon: "#fedcca",
          button: "#4b332b",
          background: "rgba(92, 64, 53, 0.85)",
        },
        material_cool: {
          // Cool
          title: "#cbe5fe",
          subtitle: "#b3d7f0",
          icon: "#cbe5fe",
          button: "#143546",
          background: "rgba(26, 61, 82, 0.85)",
        },
        material_dry: {
          // Dry
          title: "#fff2c2",
          subtitle: "#e6d9a8",
          icon: "#fff2c2",
          button: "#4d4520",
          background: "rgba(102, 85, 26, 0.85)",
        },
        material_fan: {
          // Fan
          title: "#c2f5d9",
          subtitle: "#a8e9c6",
          icon: "#c2f5d9",
          button: "#1f3a2f",
          background: "rgba(32, 77, 58, 0.85)",
        },
        material_heat: {
          // Heat
          title: "#ffe1c9",
          subtitle: "#f2c3a4",
          icon: "#ffe1c9",
          button: "#5b2d1a",
          background: "rgba(130, 52, 24, 0.85)",
        },
        material_eco: {
          // Eco
          title: "#d0f5c2",
          subtitle: "#b5e8a8",
          icon: "#d0f5c2",
          button: "#23401f",
          background: "rgba(42, 77, 32, 0.85)",
        },
        // (Updated on 04/08/2025)
        default: {
          title: "var(--md-sys-color-on-surface-variant, #c3c3c5)",
          subtitle: "var(--md-sys-color-on-surface-variant, #c3c3c5)",
          icon: "var(--md-sys-color-on-surface-variant, #c3c3c5)",
          button: "var(--md-sys-color-surface-variant, #5c5b60)",
          background:
            "var(--md-sys-color-surface-container, rgba(65, 66, 70, 0.83))",
        },
      },
      // (Updated on 04/08/2025)
      button: {
        title: "var(--md-sys-color-on-secondary-container, #d8e3f7)",
        icon: "var(--md-sys-color-on-secondary-container, #d8e3f7)",
        percentage: "var(--md-sys-color-on-secondary-container, #d8e3f7)",
        back_slider_color:
          "color-mix(in srgb, var(--md-sys-color-secondary-container) 70%, black)",
        background: "var(--md-sys-color-secondary-container, #3e4758)",
      },
      // (Updated on 04/08/2025)
      light: {
        title: "#ffe083",
        icon: "#ffe083",
        percentage: "#ffe083",
        slider: "#50472a",
        background: "#333029",
      },
    },
    off: {
      climate: {
        // (Updated on 04/08/2025)
        default: {
          title: "var(--md-sys-color-on-surface-variant, #c3c3c5)",
          subtitle: "var(--md-sys-color-on-surface-variant, #c3c3c5)",
          icon: "var(--md-sys-color-on-surface-variant, #c3c3c5)",
          button: "var(--md-sys-color-surface-variant, #5c5b60)",
          background: "var(--md-sys-color-surface-container, #414246)",
        },
      },
      // (Updated on 04/08/2025)
      button: {
        title: "var(--md-sys-color-on-surface-variant, #e3e3e5)",
        icon: "var(--md-sys-color-on-surface-variant, #e3e3e5)",
        percentage: "var(--md-sys-color-on-surface-variant, #e3e3e5)",
        background: "var(--md-sys-color-surface-container, #292a2e)",
      },
      // (Updated on 04/08/2025)
      light: {
        title: "var(--md-sys-color-on-surface-variant, #e3e3e5)",
        icon: "var(--md-sys-color-on-surface-variant, #e3e3e5)",
        percentage: "var(--md-sys-color-on-surface-variant, #e3e3e5)",
        slider: "var(--md-sys-color-surface-container, #292a2e)",
        background: "var(--md-sys-color-surface-container, #292a2e)",
      },
    },
  },
  light: {
    offline: {
      // (Updated on 04/08/2025)
      climate: {
        title: "var(--md-sys-color-outline, #949496)",
        icon: "var(--md-sys-color-outline, #949496)",
        background:
          "var(--md-sys-color-surface-container-highest, rgba(223, 223, 225, 0.85))",
      },
      // (Updated on 04/08/2025)
      button: {
        title: "var(--md-sys-color-outline, #949496)",
        icon: "var(--md-sys-color-outline, #949496)",
        percentage: "var(--md-sys-color-outline, #949496)",
        background: "var(--md-sys-color-surface-container-highest, #dfdfe1)",
      },
      // (Updated on 04/08/2025)
      light: {
        title: "var(--md-sys-color-outline, #959597)",
        icon: "var(--md-sys-color-outline, #959597)",
        percentage: "var(--md-sys-color-outline, #959597)",
        slider: "var(--md-sys-color-surface-container-highest, #dfdfe1)",
        background: "var(--md-sys-color-surface-container-highest, #dfdfe1)",
      },
    },
    on: {
      climate: {
        // (Updated on 04/08/2025)
        material: {
          title: "#812800",
          subtitle: "#812800",
          icon: "#812800",
          button: "rgba(245, 180, 150, 0.6)",
          background: "rgba(258, 193.8, 166, 0.3)",
        },
        material_cool: {
          // Cool
          title: "#006b9c",
          subtitle: "#006b9c",
          icon: "#006b9c",
          button: "#cbe5fe",
          background: "#e8f1ff",
        },
        material_dry: {
          // Dry
          title: "#8c6b00",
          subtitle: "#8c6b00",
          icon: "#8c6b00",
          button: "#fff2c2",
          background: "#fff9e6",
        },
        material_fan: {
          // Fan
          title: "#006d48",
          subtitle: "#006d48",
          icon: "#006d48",
          button: "#b8f0d3",
          background: "#d9f6e6",
        },
        material_heat: {
          // Heat
          title: "#9b2f00",
          subtitle: "#9b2f00",
          icon: "#9b2f00",
          button: "#ffd9c2",
          background: "#ffe8dc",
        },
        material_eco: {
          // Eco
          title: "#2d6b00",
          subtitle: "#2d6b00",
          icon: "#2d6b00",
          button: "#d0f5c2",
          background: "#eaf9e6",
        },
        // (Updated on 04/08/2025)
        default: {
          title: "var(--md-sys-color-on-surface-variant, #525252)",
          subtitle: "var(--md-sys-color-on-surface-variant, #525252)",
          icon: "var(--md-sys-color-on-surface-variant, #525252)",
          button: "var(--md-sys-color-surface-variant, #c1c1c3)",
          background:
            "var(--md-sys-color-surface-container, rgba(221, 221, 223, 0.83))",
        },
      },
      // (Updated on 04/08/2025)
      button: {
        title: "var(--md-sys-color-on-secondary-container, #131c2b)",
        icon: "var(--md-sys-color-on-secondary-container, #131c2b)",
        percentage: "var(--md-sys-color-on-secondary-container, #131c2b)",
        back_slider_color:
          "color-mix(in srgb, var(--md-sys-color-secondary-container) 70%, white)",
        background: "var(--md-sys-color-secondary-container, #d8e3f7)",
      },
      // (Updated on 04/08/2025)
      light: {
        title: "#745b00",
        icon: "#745b00",
        percentage: "#745b00",
        slider: "#ffe083",
        background: "#feefc8",
      },
    },
    off: {
      climate: {
        // (Updated on 04/08/2025)
        default: {
          title: "var(--md-sys-color-on-surface-variant, #525252)",
          subtitle: "var(--md-sys-color-on-surface-variant, #525252)",
          icon: "var(--md-sys-color-on-surface-variant, #525252)",
          button: "var(--md-sys-color-surface-variant, #c1c1c3)",
          background: "var(--md-sys-color-surface-container, #dddddf)",
        },
      },
      // (Updated on 04/08/2025)
      button: {
        title: "var(--md-sys-color-on-surface-variant, #1b1b1d)",
        icon: "var(--md-sys-color-on-surface-variant, #1b1b1d)",
        percentage: "var(--md-sys-color-on-surface-variant, #1b1b1d)",
        background: "var(--md-sys-color-surface-container, #e8e8ea)",
      },
      // (Updated on 04/08/2025)
      light: {
        title: "var(--md-sys-color-on-surface-variant, #1b1b1d)",
        icon: "var(--md-sys-color-on-surface-variant, #1b1b1d)",
        percentage: "var(--md-sys-color-on-surface-variant, #1b1b1d)",
        slider: "var(--md-sys-color-surface-container, #e8e8ea)",
        background: "var(--md-sys-color-surface-container, #e8e8ea)",
      },
    },
  },
};

export const google_color_old = {
  dark: {
    offline: {
      // (Updated on 21/07/2025)
      climate: {
        title: "#717173",
        icon: "#717173",
        background: "#2c2c2e",
      },
      // (Updated on 22/07/2025)
      button: {
        title: "#717173",
        icon: "#717173",
        percentage: "#717173",
        background: "#2c2c2e",
      },
      // (Updated on 22/07/2025)
      light: {
        title: "#717173",
        icon: "#717173",
        percentage: "#717173",
        slider: "#2c2c2e",
        background: "#2c2c2e",
      },
    },
    on: {
      climate: {
        // (Updated on 21/07/2025)
        material: {
          title: "#fedcca",
          subtitle: "#e6c0b2",
          icon: "#fedcca",
          button: "#4b332b",
          background: "rgba(92, 64, 53, 0.85)",
        },
        // (Updated on 21/07/2025)
        default: {
          title: "#c3c3c5",
          subtitle: "#c3c3c5",
          icon: "#c3c3c5",
          button: "#5c5b60",
          background: "rgba(65, 66, 70, 0.83)",
        },
      },
      // (Updated on 22/07/2025)
      button: {
        title: "#d8e3f7",
        icon: "#d8e3f7",
        percentage: "#d8e3f7",
        background: "#3e4758",
      },
      // (Updated on 22/07/2025)
      light: {
        title: "#ffe083",
        icon: "#ffe083",
        percentage: "#ffe083",
        slider: "#50472a",
        background: "#333029",
      },
    },
    off: {
      climate: {
        // (Updated on 21/07/2025)
        default: {
          title: "#c3c3c5",
          subtitle: "#c3c3c5",
          icon: "#c3c3c5",
          button: "#5c5b60",
          background: "#414246",
        },
      },
      // (Updated on 22/07/2025)
      button: {
        title: "#e3e3e5",
        icon: "#e3e3e5",
        percentage: "#e3e3e5",
        background: "#292a2e",
      },
      // (Updated on 22/07/2025)
      light: {
        title: "#e3e3e5",
        icon: "#e3e3e5",
        percentage: "#e3e3e5",
        slider: "#292a2e",
        background: "#292a2e",
      },
    },
  },
  light: {
    offline: {
      // (Updated on 21/07/2025)
      climate: {
        title: "#949496",
        icon: "#949496",
        background: "rgba(223, 223, 225, 0.85)",
      },
      // (Updated on 22/07/2025)
      button: {
        title: "#949496",
        icon: "#949496",
        percentage: "#949496",
        background: "#dfdfe1",
      },
      // (Updated on 22/07/2025)
      light: {
        title: "#959597",
        icon: "#959597",
        percentage: "#959597",
        slider: "#dfdfe1",
        background: "#dfdfe1",
      },
    },
    on: {
      climate: {
        // (Updated on 21/07/2025)
        material: {
          title: "#812800",
          subtitle: "#812800",
          icon: "#812800",
          button: "rgba(245, 180, 150, 0.6)",
          background: "rgba(258, 193.8, 166, 0.3)",
        },
        // (Updated on 21/07/2025)
        default: {
          title: "#525252",
          subtitle: "#525252",
          icon: "#525252",
          button: "#c1c1c3",
          background: "rgba(221, 221, 223, 0.83)",
        },
      },
      // (Updated on 22/07/2025)
      button: {
        title: "#131c2b",
        icon: "#131c2b",
        percentage: "#131c2b",
        background: "#d8e3f7",
      },
      // (Updated on 22/07/2025)
      light: {
        title: "#745b00",
        icon: "#745b00",
        percentage: "#745b00",
        slider: "#ffe083",
        background: "#feefc8",
      },
    },
    off: {
      climate: {
        // (Updated on 21/07/2025)
        default: {
          title: "#525252",
          subtitle: "#525252",
          icon: "#525252",
          button: "#c1c1c3",
          background: "#dddddf",
        },
      },
      // (Updated on 22/07/2025)
      button: {
        title: "#1b1b1d",
        icon: "#1b1b1d",
        percentage: "#1b1b1d",
        background: "#e8e8ea",
      },
      // (Updated on 22/07/2025)
      light: {
        title: "#1b1b1d",
        icon: "#1b1b1d",
        percentage: "#1b1b1d",
        slider: "#e8e8ea",
        background: "#e8e8ea",
      },
    },
  },
};
