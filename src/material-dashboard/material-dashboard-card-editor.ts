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

  private _valueChanged = (ev: Event): void => {
    const target = ev.target as any;
    const configValue = target.getAttribute("configValue");

    const value =
      ev instanceof CustomEvent && ev.detail?.value !== undefined
        ? ev.detail.value
        : (target.checked ?? target.value);

    if (!configValue || this._config[configValue] === value) return;

    this._config = {
      ...this._config,
      [configValue]: value,
    };

    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config },
      })
    );
  };

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

    this._config.default_action = this._config.default_action ?? true;

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

        <div class="switch-row">
          <span class="switch-label"
            >${localize("material_dashboard_card.default")}</span
          >
          <ha-switch
            .checked=${this._config.default_action ?? true}
            configValue="default_action"
            @change=${this._valueChanged}
          />
        </div>

        ${this._config.default_action
          ? html``
          : html`
              <ha-select
                label="${localize("material_dashboard_card.tap_type")}"
                .value=${this._config.action_type || "tap_action"}
                configValue="action_type"
                @selected=${this._valueChanged}
                @closed=${(ev: Event) => ev.stopPropagation()}
              >
                <mwc-list-item value="tap_action">
                  ${localize("material_dashboard_card.single")}
                </mwc-list-item>
                <mwc-list-item value="hold_action">
                  ${localize("material_dashboard_card.hold")}
                </mwc-list-item>
                <mwc-list-item value="double_tap_action">
                  ${localize("material_dashboard_card.double")}
                </mwc-list-item>
              </ha-select>

              <div class="switch-row">
                <span class="switch-label"
                  >${localize("material_dashboard_card.web")}</span
                >
                <ha-switch
                  .checked=${this._config.single_tap_web ?? false}
                  configValue="single_tap_web"
                  @change=${this._valueChanged}
                />
              </div>
            `}
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
