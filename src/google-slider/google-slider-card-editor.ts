import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";
import { DEFAULT_CONFIG } from "./const";
import { localize } from "../localize/localize";
import { ControlType } from "../google-button/google-button-const";
import { GoogleSliderCardConfig } from "./types";

@customElement("google-slider-card-editor")
export class GoogleSliderCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: GoogleSliderCardConfig = DEFAULT_CONFIG;

  public setConfig(config: GoogleSliderCardConfig): void {
    this._config = { ...config };
  }

  private _valueChanged(ev: Event): void {
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
  }

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

    return html`
      <div class="form">
        <ha-select
          label="${localize("google_slider_card.control_type")}"
          .value=${this._config.control_type ?? "light"}
          configValue="control_type"
          @selected=${this._valueChanged}
          @closed=${(ev: Event) => ev.stopPropagation()}
        >
          <mwc-list-item value="light">
            ${localize("google_slider_card.type.light")}
          </mwc-list-item>
          <mwc-list-item value="cover">
            ${localize("google_slider_card.type.cover")}
          </mwc-list-item>
        </ha-select>

        <ha-textfield
          label="${localize("google_slider_card.name")}"
          .value=${this._config.name || ""}
          configValue="name"
          @input=${this._valueChanged}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <ha-entity-picker
          label="${localize("google_slider_card.entity")}"
          .value=${this._config.entity || ""}
          .hass=${this.hass}
          .includeDomains=${this.setEntityFilter()}
          allow-custom-entity
          configValue="entity"
          @value-changed=${this._entityChanged}
          required
        ></ha-entity-picker>

        <ha-icon-picker
          label="${localize("google_slider_card.icon")}"
          .value=${this._config.icon || ""}
          configValue="icon"
          @value-changed=${this._valueChanged}
          placeholder="mdi:lightbulb"
        ></ha-icon-picker>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("google_slider_card.percentage")}</span
          >
          <ha-switch
            .checked=${this._config.show_percentage ?? true}
            configValue="show_percentage"
            @change=${this._valueChanged}
          />
        </div>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("google_slider_card.bold_text")}</span
          >
          <ha-switch
            .checked=${this._config.bold_text ?? false}
            configValue="bold_text"
            @change=${this._valueChanged}
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
    "google-slider-card-editor": GoogleSliderCardEditor;
  }
}
