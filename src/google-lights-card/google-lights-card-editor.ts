import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";
import { localize } from "../localize/localize";
import { DEFAULT_CONFIG, GoogleLightCardConfig } from "./google-lights-const";

@customElement("google-lights-card-editor")
export class GoogleLightsCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: GoogleLightCardConfig = DEFAULT_CONFIG;

  public setConfig(config: GoogleLightCardConfig): void {
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

    return html`
      <div class="form">
        <span class="text-label"
          >${localize("google_lights_card.on_text")}</span
        >
        <ha-textfield
          label="${localize("google_lights_card.on_text")}"
          .value=${this._config.on_text || ""}
          configValue="on_text"
          @input=${this._valueChanged}
          placeholder="e.g. Lights On"
        ></ha-textfield>

        <span class="text-label"
          >${localize("google_lights_card.off_text")}</span
        >
        <ha-textfield
          label="${localize("google_lights_card.off_text")}"
          .value=${this._config.off_text || ""}
          configValue="off_text"
          @input=${this._valueChanged}
          placeholder="e.g. Lights Off"
        ></ha-textfield>
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
    "google-lights-card-editor": GoogleLightsCardEditor;
  }
}
