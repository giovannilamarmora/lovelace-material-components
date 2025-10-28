import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { localize } from "../localize/localize";
import { HomeAssistant } from "../ha-types";
import {
  DEFAULT_CONFIG,
  MaterialControlCardConfig,
} from "./material-control-const";
import jsyaml from "js-yaml";
import { getName } from "../shared/mapper";
import { materialControlTemplate } from "./material-control-template";

@customElement("material-control-card")
export class MaterialControlCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: MaterialControlCardConfig = DEFAULT_CONFIG;
  @state() private _card?: any;

  public async setConfig(config: MaterialControlCardConfig): Promise<void> {
    if (!config) {
      throw new Error(localize("common.invalid_configuration"));
    }
    this._config = config;
  }

  public static getStubConfig(): Partial<MaterialControlCardConfig> {
    return {
      type: "custom:material-control-card",
      name: "Control Card",
      icon: "mdi:link",
      tap_action: {
        action: "more-info",
      },
      hold_action: {
        action: "none",
      },
    };
  }

  protected async updated(changedProps: Map<string, any>) {
    if (changedProps.has("hass")) {
      if (this._card) {
        this._card.hass = this.hass; // aggiorna la card esistente
      } else if (this._config) {
        const template = this.mapTemplate();
        const configJson = jsyaml.load(template);

        const helpers = await (window as any).loadCardHelpers();
        const card = await helpers.createCardElement(configJson);
        card.classList.add("ripple-card");
        card.hass = this.hass;

        this._card = card;
        this.requestUpdate();
      }
    }
  }

  static getCardSize() {
    return 1;
  }

  static async getConfigElement() {
    return document.createElement("material-control-card-editor");
  }

  private mapTemplate() {
    const name = getName(this._config, this.hass);
    const newConfig = { ...this._config, name };

    const text = materialControlTemplate(newConfig);
    return text;
  }

  protected render(): TemplateResult {
    if (!this._card) {
      return html`<ha-card>Loading…</ha-card>`;
    }

    // Avvolgi il contenuto in un div che intercetta il click
    return html`${this._card}`;
  }

  static styles = css`
    .ripple-card {
      position: relative;
      overflow: hidden;
    }
  `;

  protected createRenderRoot() {
    return this;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "material-control-card": MaterialControlCard;
  }
}
