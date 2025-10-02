import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";
import { localize } from "../localize/localize";
import {
  DEFAULT_CONFIG,
  GoogleClimateCardConfig,
} from "./google-climate-const";

@customElement("google-climate-card-editor")
export class GoogleClimateCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: GoogleClimateCardConfig = DEFAULT_CONFIG;

  public setConfig(config: GoogleClimateCardConfig): void {
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
    this._config.use_material_color = this._config.use_material_color ?? true;

    return html`
      <div class="form">
        <ha-textfield
          label="${localize("google_climate_card.name")}"
          .value=${this._config.name || ""}
          configValue="name"
          @input=${this._valueChanged}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <ha-entity-picker
          label="${localize("google_climate_card.entity")}"
          .value=${this._config.entity || ""}
          .hass=${this.hass}
          .includeDomains=${["climate"]}
          allow-custom-entity
          configValue="entity"
          @value-changed=${this._entityChanged}
          required
        ></ha-entity-picker>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("google_climate_card.theme")}</span
          >
          <ha-switch
            .checked=${this._config.use_material_color ?? true}
            configValue="use_material_color"
            @change=${this._valueChanged}
          />
        </div>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("google_climate_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${this._config.use_default_icon ?? true}
            configValue="use_default_icon"
            @change=${this._valueChanged}
          />
        </div>

        ${this._config.use_default_icon
          ? html``
          : html`
              <ha-icon-picker
                label="Icon"
                .value=${this._config.icon || ""}
                configValue="icon"
                @value-changed=${this._valueChanged}
                placeholder="mdi:lightbulb"
              />
            `}

        <ha-textfield
          label="${localize("google_climate_card.increase_temp")}"
          .value=${this._config.increase_temp || 1}
          configValue="increase_temp"
          @input=${this._valueChanged}
          placeholder="e.g. 0.5"
        ></ha-textfield>

        <ha-textfield
          label="${localize("google_climate_card.decrease_temp")}"
          .value=${this._config.decrease_temp || 1}
          configValue="decrease_temp"
          @input=${this._valueChanged}
          placeholder="e.g. 0.5"
        ></ha-textfield>

        <!--<div class="switch-row">
          <span class="switch-label"
            >${localize("google_climate_card.fix_temperature")}</span
          >
          <ha-switch
            .checked=${this._config.fix_temperature ?? false}
            configValue="fix_temperature"
            @change=${this._valueChanged}
          />
        </div>-->

        <ha-select
          label="${localize("google_climate_card.fix_temperature")}"
          .value=${this._config.fix_temperature ?? "false"}
          configValue="fix_temperature"
          @selected=${this._valueChanged}
          @closed=${(ev: Event) => ev.stopPropagation()}
        >
          <mwc-list-item value="false">
            ${localize("google_climate_card.false")}
          </mwc-list-item>
          <mwc-list-item value="true">
            ${localize("google_climate_card.true")}
          </mwc-list-item>
          <mwc-list-item value="auto">
            ${localize("google_climate_card.auto")}
          </mwc-list-item>
        </ha-select>
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

    .dual-icons {
      display: flex;
      gap: 16px;
    }

    .dual-icons ha-icon-input {
      flex: 1;
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
    "google-climate-card-editor": GoogleClimateCardEditor;
  }
}
