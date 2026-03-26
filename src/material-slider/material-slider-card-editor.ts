import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";
import {
  DEFAULT_CONFIG,
  MaterialSliderCardConfig,
} from "./material-slider-const";
import { localize } from "../localize/localize";
import { ControlType } from "../shared/types";
import { _entityChanged, _valueChanged } from "../shared/ha-editor";

@customElement("material-slider-card-editor")
export class MaterialSliderCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: MaterialSliderCardConfig = DEFAULT_CONFIG;

  public setConfig(config: MaterialSliderCardConfig): void {
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

  setEntityFilter() {
    switch (this._config.control_type) {
      case ControlType.LIGHT:
        return ["light"];
      case ControlType.COVER:
        return ["cover"];
      default:
        return undefined;
    }
  }

  render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html``;
    }

    const control_type = [
      {
        value: "light",
        label: localize("material_slider_card.type.light"),
      },
      {
        value: "cover",
        label: localize("material_slider_card.type.cover"),
      },
    ];

    return html`
      <div class="form">
        <ha-selector
          .hass=${this.hass}
          label="${localize("material_slider_card.control_type")}"
          .selector=${{
            select: {
              options: control_type,
              mode: "dropdown",
            },
          }}
          configValue="control_type"
          .value=${this._config.control_type ?? "light"}
          @value-changed=${(ev: Event) => _valueChanged(ev, this)}
        >
        </ha-selector>

        <ha-textfield
          label="${localize("material_slider_card.name")}"
          .value=${this._config.name || ""}
          configValue="name"
          @input=${(ev: Event) => _valueChanged(ev, this)}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <ha-entity-picker
          label="${localize("material_slider_card.entity")}"
          .value=${this._config.entity || ""}
          .hass=${this.hass}
          .includeDomains=${this.setEntityFilter()}
          allow-custom-entity
          configValue="entity"
          @value-changed=${(ev: CustomEvent) => _entityChanged(ev, this)}
          required
        ></ha-entity-picker>

        <ha-icon-picker
          label="${localize("material_slider_card.icon")}"
          .value=${this._config.icon || ""}
          configValue="icon"
          @value-changed=${(ev: Event) => _valueChanged(ev, this)}
          placeholder="mdi:lightbulb"
        ></ha-icon-picker>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("material_slider_card.percentage")}</span
          >
          <ha-switch
            .checked=${this._config.show_percentage ?? true}
            configValue="show_percentage"
            @change=${(ev: Event) => _valueChanged(ev, this)}
          />
        </div>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("material_slider_card.bold_text")}</span
          >
          <ha-switch
            .checked=${this._config.bold_text ?? false}
            configValue="bold_text"
            @change=${(ev: Event) => _valueChanged(ev, this)}
          />
        </div>
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
    "material-slider-card-editor": MaterialSliderCardEditor;
  }
}
