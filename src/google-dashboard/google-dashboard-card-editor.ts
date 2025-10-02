import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";
import { localize } from "../localize/localize";
import { DEFAULT_CONFIG } from "./google-dashboard-const";
import { GoogleButtonCardConfig } from "../google-button/google-button-const";

@customElement("google-dashboard-card-editor")
export class GoogleDashboardCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: GoogleButtonCardConfig = DEFAULT_CONFIG;

  public setConfig(config: GoogleButtonCardConfig): void {
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

  private _entityChanged(ev: CustomEvent): void {
    const value = ev.detail.value;
    if (this._config?.entity === value) return;
    this._config = {
      ...this._config,
      entity: value,
    };
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config },
      })
    );
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

    this._config.use_default_icon = this._config.use_default_icon ?? true;
    this._config.default_action = this._config.default_action ?? true;

    return html`
      <div class="form">
        <span class="switch-label"
          >${localize("google_dashboard_card.description")}</span
        >

        <span class="text-label"
          >${localize("google_dashboard_card.cameras")}</span
        >
        <ha-textfield
          label="${localize("google_dashboard_card.placeholder")}"
          .value=${this._config.cameras || ""}
          configValue="cameras"
          @input=${this._valueChanged}
          placeholder="e.g. ./cameras"
        ></ha-textfield>

        <span class="text-label"
          >${localize("google_dashboard_card.lighting")}</span
        >
        <ha-textfield
          label="${localize("google_dashboard_card.placeholder")}"
          .value=${this._config.lighting || ""}
          configValue="lighting"
          @input=${this._valueChanged}
          placeholder="e.g. ./lighting"
        ></ha-textfield>

        <span class="text-label"
          >${localize("google_dashboard_card.wifi")}</span
        >
        <ha-textfield
          label="${localize("google_dashboard_card.placeholder")}"
          .value=${this._config.wifi || ""}
          configValue="wifi"
          @input=${this._valueChanged}
          placeholder="e.g. ./wifi"
        ></ha-textfield>

        <span class="text-label"
          >${localize("google_dashboard_card.climate")}</span
        >
        <ha-textfield
          label="${localize("google_dashboard_card.placeholder")}"
          .value=${this._config.climate || ""}
          configValue="climate"
          @input=${this._valueChanged}
          placeholder="e.g. ./climate"
        ></ha-textfield>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("google_dashboard_card.default")}</span
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
                label="${localize("google_dashboard_card.tap_type")}"
                .value=${this._config.action_type || "tap_action"}
                configValue="action_type"
                @selected=${this._valueChanged}
                @closed=${(ev: Event) => ev.stopPropagation()}
              >
                <mwc-list-item value="tap_action">
                  ${localize("google_dashboard_card.single")}
                </mwc-list-item>
                <mwc-list-item value="hold_action">
                  ${localize("google_dashboard_card.hold")}
                </mwc-list-item>
                <mwc-list-item value="double_tap_action">
                  ${localize("google_dashboard_card.double")}
                </mwc-list-item>
              </ha-select>

              <div class="switch-row">
                <span class="switch-label"
                  >${localize("google_dashboard_card.web")}</span
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
    "google-dashboard-card-editor": GoogleDashboardCardEditor;
  }
}
