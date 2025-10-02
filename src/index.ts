import { CARD_VERSION } from "./material-slider/const";
import { MaterialButtonCard } from "./material-button/material-button-card";
import { MaterialDashboardCard } from "./material-dashboard/material-dashboard-card";
import { MaterialDashboardCardEditor } from "./material-dashboard/material-dashboard-card-editor";
import { MaterialSliderCard } from "./material-slider/material-slider-card";
import { localize } from "./localize/localize";
import { MaterialClimateCard } from "./material-climate/material-climate-card";
import { MaterialClimateCardEditor } from "./material-climate/material-climate-card-editor";
import { MaterialControlCard } from "./material-control/material-control-card";
import { MaterialControlCardEditor } from "./material-control/material-control-card-editor";
import { MaterialButtonCardEditor } from "./material-button/material-button-card-editor";
import { MaterialSliderCardEditor } from "./material-slider/material-slider-card-editor";
import { MaterialLightsCard } from "./material-lights/material-lights-card";
import { MaterialLightsCardEditor } from "./material-lights/material-lights-card-editor";
import { MaterialMediaOverlay } from "./material-media-overlay/material-media-overlay";

/* eslint no-console: 0 */
console.info(
  `%c Material Component %c ${localize("common.version")} ${CARD_VERSION}`,
  "color: orange; font-weight: bold; background: black",
  "color: white; font-weight: bold; background: dimgray"
);

/** Material Slider */
customElements.define("material-slider-card", MaterialSliderCard);

if (!customElements.get("material-slider-card-editor")) {
  customElements.define(
    "material-slider-card-editor",
    MaterialSliderCardEditor
  );
}

/** Material Button */
if (!customElements.get("material-button-card")) {
  customElements.define("material-button-card", MaterialButtonCard);
}

if (!customElements.get("material-button-card-editor")) {
  customElements.define(
    "material-button-card-editor",
    MaterialButtonCardEditor
  );
}

/** Material Dashboard */
if (!customElements.get("material-dashboard-card")) {
  customElements.define("material-dashboard-card", MaterialDashboardCard);
}

if (!customElements.get("material-dashboard-card-editor")) {
  customElements.define(
    "material-dashboard-card-editor",
    MaterialDashboardCardEditor
  );
}

/** Material Climate */
if (!customElements.get("material-climate-card")) {
  customElements.define("material-climate-card", MaterialClimateCard);
}

if (!customElements.get("material-climate-card-editor")) {
  customElements.define(
    "material-climate-card-editor",
    MaterialClimateCardEditor
  );
}

/** Material Control */
if (!customElements.get("material-control-card")) {
  customElements.define("material-control-card", MaterialControlCard);
}

if (!customElements.get("material-control-card-editor")) {
  customElements.define(
    "material-control-cardeditor",
    MaterialControlCardEditor
  );
}

/** Material Lights */
if (!customElements.get("material-lights-card")) {
  customElements.define("material-lights-card", MaterialLightsCard);
}

if (!customElements.get("material-lights-card-editor")) {
  customElements.define("material-lights-cardeditor", MaterialLightsCardEditor);
}

if (!customElements.get("material-media-overlay")) {
  customElements.define("material-media-overlay", MaterialMediaOverlay);
}

(window as any).customCards = (window as any).customCards ?? [];
(window as any).customCards.push({
  type: "material-slider-card",
  name: "Material Slider Card",
  preview: true,
  description:
    "A custom slider card inspired by Google Home UI, offering smooth control and visual feedback for dimmers, lights, and other numeric entities. Designed with a clean and modern interface to blend into any dashboard.",
});

(window as any).customCards.push({
  type: "material-button-card",
  name: "Material Button Card",
  preview: true,
  description:
    "A modern, theme-aware button card inspired by Google’s design. Now stable and production-ready.",
});

(window as any).customCards.push({
  type: "material-dashboard-card",
  name: "Material Dashboard Card",
  preview: true,
  description:
    "A customizable dashboard card inspired by Google's Material Design. Perfect for building modern, responsive Home Assistant interfaces.",
});

(window as any).customCards.push({
  type: "material-climate-card",
  name: "Material Climate Card",
  preview: true,
  description:
    "A climate card inspired by Google's design, providing intuitive control and status display for HVAC devices.",
});

(window as any).customCards.push({
  type: "material-control-card",
  name: "Material Control Card",
  preview: true,
  description:
    "A control card inspired by Google's design, offering a sleek interface to interact with entities like switches, lights, and scenes in Home Assistant.",
});

(window as any).customCards.push({
  type: "material-lights-card",
  name: "Material Lights Control",
  preview: true,
  description:
    "A control card inspired by Google's design, offering a sleek interface to interact with lights in Home Assistant.",
});
