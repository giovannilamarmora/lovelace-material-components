import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";
import { localize } from "../localize/localize";
import {
  DEFAULT_CONFIG,
  MaterialLightCardConfig,
} from "./material-lights-const";
import { _valueChanged } from "../shared/ha-editor";

@customElement("material-lights-card-editor")
export class MaterialLightsCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: MaterialLightCardConfig = DEFAULT_CONFIG;

  public setConfig(config: MaterialLightCardConfig): void {
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
        <span class="text-label"
          >${localize("material_lights_card.on_text")}</span
        >
        <ha-textfield
          label="${localize("material_lights_card.on_text")}"
          .value=${this._config.on_text || ""}
          configValue="on_text"
          @input=${(ev: Event) => _valueChanged(ev, this)}
          placeholder="e.g. Lights On"
        ></ha-textfield>

        <span class="text-label"
          >${localize("material_lights_card.off_text")}</span
        >
        <ha-textfield
          label="${localize("material_lights_card.off_text")}"
          .value=${this._config.off_text || ""}
          configValue="off_text"
          @input=${(ev: Event) => _valueChanged(ev, this)}
          placeholder="e.g. Lights Off"
        ></ha-textfield>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("material_lights_card.control_area")}</span
          >
          <ha-switch
            .checked=${this._config.control_area ?? false}
            configValue="control_area"
            @change=${(ev: Event) => {
              _valueChanged(ev, this);
              this.resetForm();
            }}
          />
        </div>

        ${this._config.control_area
          ? html`
              <ha-selector
                style="display: block; margin-top: 10px;"
                .hass=${this.hass}
                .selector=${{ area: {} }}
                .value=${this._config.area_id}
                .label=${localize("material_lights_card.area_id")}
                configValue="area_id"
                @value-changed=${(ev: Event) => _valueChanged(ev, this)}
              ></ha-selector>
            `
          : ""}
      </div>
    `;
  }

  private resetForm() {
    if (!this._config.control_area && "area_id" in this._config) {
      delete this._config.area_id;

      this.dispatchEvent(
        new CustomEvent("config-changed", {
          detail: { config: this._config },
        })
      );
    }
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
    "material-lights-card-editor": MaterialLightsCardEditor;
  }
}
