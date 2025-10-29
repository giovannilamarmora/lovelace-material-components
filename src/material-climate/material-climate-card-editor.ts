import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";
import { localize } from "../localize/localize";
import {
  DEFAULT_CONFIG,
  MaterialClimateCardConfig,
} from "./material-climate-const";
import { _entityChanged, _valueChanged } from "../shared/ha-editor";

@customElement("material-climate-card-editor")
export class MaterialClimateCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: MaterialClimateCardConfig = DEFAULT_CONFIG;

  public setConfig(config: MaterialClimateCardConfig): void {
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

    this._config.use_default_icon = this._config.use_default_icon ?? true;
    this._config.use_material_color = this._config.use_material_color ?? true;

    return html`
      <div class="form">
        <ha-textfield
          label="${localize("material_climate_card.name")}"
          .value=${this._config.name || ""}
          configValue="name"
          @input=${(ev: Event) => _valueChanged(ev, this)}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <ha-entity-picker
          label="${localize("material_climate_card.entity")}"
          .value=${this._config.entity || ""}
          .hass=${this.hass}
          .includeDomains=${["climate"]}
          allow-custom-entity
          configValue="entity"
          @value-changed=${(ev: CustomEvent) => _entityChanged(ev, this)}
          required
        ></ha-entity-picker>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("material_climate_card.theme")}</span
          >
          <ha-switch
            .checked=${this._config.use_material_color ?? true}
            configValue="use_material_color"
            @change=${(ev: Event) => _valueChanged(ev, this)}
          />
        </div>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("material_climate_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${this._config.use_default_icon ?? true}
            configValue="use_default_icon"
            @change=${(ev: Event) => _valueChanged(ev, this)}
          />
        </div>

        ${this._config.use_default_icon
          ? html``
          : html`
              <ha-icon-picker
                label="Icon"
                .value=${this._config.icon || ""}
                configValue="icon"
                @value-changed=${(ev: Event) => _valueChanged(ev, this)}
                placeholder="mdi:lightbulb"
              />
            `}

        <ha-textfield
          label="${localize("material_climate_card.increase_temp")}"
          .value=${this._config.increase_temp || 1}
          configValue="increase_temp"
          @input=${(ev: Event) => _valueChanged(ev, this)}
          placeholder="e.g. 0.5"
        ></ha-textfield>

        <ha-textfield
          label="${localize("material_climate_card.decrease_temp")}"
          .value=${this._config.decrease_temp || 1}
          configValue="decrease_temp"
          @input=${(ev: Event) => _valueChanged(ev, this)}
          placeholder="e.g. 0.5"
        ></ha-textfield>

        <!--<div class="switch-row">
          <span class="switch-label"
            >${localize("material_climate_card.fix_temperature")}</span
          >
          <ha-switch
            .checked=${this._config.fix_temperature ?? false}
            configValue="fix_temperature"
            @change=${(ev: Event) => _valueChanged(ev, this)}
          />
        </div>-->

        <ha-select
          label="${localize("material_climate_card.fix_temperature")}"
          .value=${this._config.fix_temperature ?? "false"}
          configValue="fix_temperature"
          @selected=${(ev: Event) => _valueChanged(ev, this)}
          @closed=${(ev: Event) => ev.stopPropagation()}
        >
          <mwc-list-item value="false">
            ${localize("material_climate_card.false")}
          </mwc-list-item>
          <mwc-list-item value="true">
            ${localize("material_climate_card.true")}
          </mwc-list-item>
          <mwc-list-item value="auto">
            ${localize("material_climate_card.auto")}
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
    "material-climate-card-editor": MaterialClimateCardEditor;
  }
}
