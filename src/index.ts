import { CARD_VERSION } from "./google-slider/const";
import { GoogleButtonCard } from "./google-button/google-button-card";
import { GoogleDashboardCard } from "./google-dashboard/google-dashboard-card";
import { GoogleDashboardCardEditor } from "./google-dashboard/google-dashboard-card-editor";
import { GoogleSliderCard } from "./google-slider/google-slider-card";
import { localize } from "./localize/localize";
import { GoogleClimateCard } from "./google-climate/google-climate-card";
import { GoogleClimateCardEditor } from "./google-climate/google-climate-card-editor";
import { GoogleControlCard } from "./google-control/google-control-card";
import { GoogleControlCardEditor } from "./google-control/google-control-card-editor";
import { GoogleButtonCardEditor } from "./google-button/google-button-card-editor";
import { GoogleSliderCardEditor } from "./google-slider/google-slider-card-editor";
import { GoogleLightsCard } from "./google-lights-card/google-lights-card";
import { GoogleLightsCardEditor } from "./google-lights-card/google-lights-card-editor";
import { GoogleMediaOverlay } from "./google-media-overlay/google-media-overlay";

/* eslint no-console: 0 */
console.info(
  `%c Google Component %c ${localize("common.version")} ${CARD_VERSION}    `,
  "color: orange; font-weight: bold; background: black",
  "color: white; font-weight: bold; background: dimgray"
);

/** Google Slider */
customElements.define("google-slider-card", GoogleSliderCard);

if (!customElements.get("google-slider-card-editor")) {
  customElements.define("google-slider-card-editor", GoogleSliderCardEditor);
}

/** Google Button */
if (!customElements.get("google-button-card")) {
  customElements.define("google-button-card", GoogleButtonCard);
}

if (!customElements.get("google-button-card-editor")) {
  customElements.define("google-button-card-editor", GoogleButtonCardEditor);
}

/** Google Dashboard */
if (!customElements.get("google-dashboard-card")) {
  customElements.define("google-dashboard-card", GoogleDashboardCard);
}

if (!customElements.get("google-dashboard-card-editor")) {
  customElements.define(
    "google-dashboard-card-editor",
    GoogleDashboardCardEditor
  );
}

/** Google Climate */
if (!customElements.get("google-climate-card")) {
  customElements.define("google-climate-card", GoogleClimateCard);
}

if (!customElements.get("google-climate-card-editor")) {
  customElements.define("google-climate-card-editor", GoogleClimateCardEditor);
}

/** Google Control */
if (!customElements.get("google-control-card")) {
  customElements.define("google-control-card", GoogleControlCard);
}

if (!customElements.get("google-control-card-editor")) {
  customElements.define("google-control-cardeditor", GoogleControlCardEditor);
}

/** Google Lights */
if (!customElements.get("google-lights-card")) {
  customElements.define("google-lights-card", GoogleLightsCard);
}

if (!customElements.get("google-lights-card-editor")) {
  customElements.define("google-lights-cardeditor", GoogleLightsCardEditor);
}

if (!customElements.get("google-media-overlay")) {
  customElements.define("google-media-overlay", GoogleMediaOverlay);
}

(window as any).customCards = (window as any).customCards ?? [];
(window as any).customCards.push({
  type: "google-slider-card",
  name: "Google Slider Card",
  preview: true,
  description:
    "A custom slider card inspired by Google Home UI, offering smooth control and visual feedback for dimmers, lights, and other numeric entities. Designed with a clean and modern interface to blend into any dashboard.",
});

(window as any).customCards.push({
  type: "google-button-card",
  name: "Google Button Card",
  preview: true,
  description:
    "A modern, theme-aware button card inspired by Google’s design. Now stable and production-ready.",
});

(window as any).customCards.push({
  type: "google-dashboard-card",
  name: "Google Dashboard Card",
  preview: true,
  description:
    "A customizable dashboard card inspired by Google's Material Design. Perfect for building modern, responsive Home Assistant interfaces.",
});

(window as any).customCards.push({
  type: "google-climate-card",
  name: "Google Climate Card",
  preview: true,
  description:
    "A climate card inspired by Google's design, providing intuitive control and status display for HVAC devices.",
});

(window as any).customCards.push({
  type: "google-control-card",
  name: "Google Control Card",
  preview: true,
  description:
    "A control card inspired by Google's design, offering a sleek interface to interact with entities like switches, lights, and scenes in Home Assistant.",
});

(window as any).customCards.push({
  type: "google-lights-card",
  name: "Google Lights Control",
  preview: true,
  description:
    "A control card inspired by Google's design, offering a sleek interface to interact with lights in Home Assistant.",
});
