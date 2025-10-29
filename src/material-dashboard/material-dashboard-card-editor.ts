import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";
import { localize } from "../localize/localize";
import {
  DEFAULT_CONFIG,
  MaterialDashboardCardConfig,
} from "./material-dashboard-const";
import { _navigationChanged, _valueChanged } from "../shared/ha-editor";

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

        <div class="switch-row">
          <span class="text-label">
            ${localize("material_dashboard_card.cameras")}
          </span>
          <div class="switch-control">
            <span class="switch-label">${localize("common.hidden")}</span>
            <ha-switch
              .checked=${this._config.hide_cameras ?? false}
              configValue="hide_cameras"
              @change=${(ev: Event) => _valueChanged(ev, this)}
            ></ha-switch>
          </div>
        </div>

        <ha-selector
          .hass=${this.hass}
          .selector=${{ navigation: {} }}
          .value=${this._config.cameras || ""}
          .label=${localize("material_dashboard_card.cameras")}
          configValue="cameras"
          @value-changed=${(ev: CustomEvent) => _navigationChanged(ev, this)}
        ></ha-selector>

        <div class="switch-row">
          <span class="text-label">
            ${localize("material_dashboard_card.lighting")}
          </span>
          <div class="switch-control">
            <span class="switch-label">${localize("common.hidden")}</span>
            <ha-switch
              .checked=${this._config.hide_lighting ?? false}
              configValue="hide_lighting"
              @change=${(ev: Event) => _valueChanged(ev, this)}
            ></ha-switch>
          </div>
        </div>

        <ha-selector
          .hass=${this.hass}
          .selector=${{ navigation: {} }}
          .value=${this._config.lighting || ""}
          .label=${localize("material_dashboard_card.lighting")}
          configValue="lighting"
          @value-changed=${(ev: CustomEvent) => _navigationChanged(ev, this)}
        ></ha-selector>

        <div class="switch-row">
          <span class="text-label">
            ${localize("material_dashboard_card.wifi")}
          </span>
          <div class="switch-control">
            <span class="switch-label">${localize("common.hidden")}</span>
            <ha-switch
              .checked=${this._config.hide_wifi ?? false}
              configValue="hide_wifi"
              @change=${(ev: Event) => _valueChanged(ev, this)}
            ></ha-switch>
          </div>
        </div>

        <ha-selector
          .hass=${this.hass}
          .selector=${{ navigation: {} }}
          .value=${this._config.wifi || ""}
          .label=${localize("material_dashboard_card.wifi")}
          configValue="wifi"
          @value-changed=${(ev: CustomEvent) => _navigationChanged(ev, this)}
        ></ha-selector>

        <div class="switch-row">
          <span class="text-label">
            ${localize("material_dashboard_card.climate")}
          </span>
          <div class="switch-control">
            <span class="switch-label">${localize("common.hidden")}</span>
            <ha-switch
              .checked=${this._config.hide_climate ?? false}
              configValue="hide_climate"
              @change=${(ev: Event) => _valueChanged(ev, this)}
            ></ha-switch>
          </div>
        </div>

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

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .text-label {
      font-size: 14px;
      font-weight: 500;
    }

    .switch-control {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .switch-label {
      font-size: 14px;
      font-weight: 500;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "material-dashboard-card-editor": MaterialDashboardCardEditor;
  }
}
