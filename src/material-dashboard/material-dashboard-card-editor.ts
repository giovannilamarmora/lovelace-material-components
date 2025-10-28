import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";
import { localize } from "../localize/localize";
import {
  DEFAULT_CONFIG,
  MaterialDashboardCardConfig,
} from "./material-dashboard-const";
import { _navigationChanged } from "../shared/ha-editor";

@customElement("material-dashboard-card-editor")
export class MaterialDashboardCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: MaterialDashboardCardConfig = DEFAULT_CONFIG;

  public setConfig(config: MaterialDashboardCardConfig): void {
    this._config = { ...config };
  }

  async firstUpdated() {
    const helpers = await (window as any).loadCardHelpers();
    const card = await helpers.createCardElement({
      type: "entities",
      entities: [],
    });
    await card.constructor.getConfigElement();
  }

  render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html``;
    }

    return html`
      <div class="form">
        <span class="switch-label"
          >${localize("material_dashboard_card.description")}</span
        >

        <span class="text-label"
          >${localize("material_dashboard_card.cameras")}</span
        >
        <ha-selector
          .hass=${this.hass}
          .selector=${{ navigation: {} }}
          .value=${this._config.cameras || ""}
          .label=${localize("material_dashboard_card.cameras")}
          configValue="cameras"
          @value-changed=${(ev: CustomEvent) => _navigationChanged(ev, this)}
        ></ha-selector>

        <span class="text-label"
          >${localize("material_dashboard_card.lighting")}</span
        >
        <ha-selector
          .hass=${this.hass}
          .selector=${{ navigation: {} }}
          .value=${this._config.lighting || ""}
          .label=${localize("material_dashboard_card.lighting")}
          configValue="lighting"
          @value-changed=${(ev: CustomEvent) => _navigationChanged(ev, this)}
        ></ha-selector>

        <span class="text-label"
          >${localize("material_dashboard_card.wifi")}</span
        >
        <ha-selector
          .hass=${this.hass}
          .selector=${{ navigation: {} }}
          .value=${this._config.wifi || ""}
          .label=${localize("material_dashboard_card.wifi")}
          configValue="wifi"
          @value-changed=${(ev: CustomEvent) => _navigationChanged(ev, this)}
        ></ha-selector>

        <span class="text-label"
          >${localize("material_dashboard_card.climate")}</span
        >
        <ha-selector
          .hass=${this.hass}
          .selector=${{ navigation: {} }}
          .value=${this._config.climate || ""}
          .label=${localize("material_dashboard_card.climate")}
          configValue="climate"
          @value-changed=${(ev: CustomEvent) => _navigationChanged(ev, this)}
        ></ha-selector>
      </div>
    `;
  }

  static styles = css`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }

    .text-label {
      font-size: 14px;
      font-weight: 500;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "material-dashboard-card-editor": MaterialDashboardCardEditor;
  }
}
