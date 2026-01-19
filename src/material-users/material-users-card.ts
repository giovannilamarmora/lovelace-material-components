import { LitElement, html, TemplateResult, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant } from "custom-card-helpers";
import jsyaml from "js-yaml";
import {
  DEFAULT_CONFIG,
  MaterialUsersCardConfig,
} from "./material-users-const";
import { materialUsersTemplate } from "./material-users-template";

@customElement("material-users-card")
export class MaterialUsersCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: MaterialUsersCardConfig = DEFAULT_CONFIG;
  @state() private _card?: any;

  public static getStubConfig(): Partial<MaterialUsersCardConfig> {
    return {
      type: "custom:material-users-card",
    };
  }

  public async setConfig(config: MaterialUsersCardConfig): Promise<void> {
    if (!config) throw new Error("Invalid configuration");
    this._config = config;
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
      console.log("This LOG is for debug purpose, Material User");
      console.log(this.hass);
    }
  }

  static getCardSize() {
    return 1;
  }

  static async getConfigElement() {
    return document.createElement("material-users-card-editor");
  }

  private mapTemplate() {
    const isAdmin = this.hass.user.is_admin;
    const text = materialUsersTemplate(isAdmin, this._config);
    return text;
  }

  protected render(): TemplateResult {
    if (!this._card) {
      return html`<ha-card>Loading…</ha-card>`;
    }

    // Avvolgi il contenuto in un div che intercetta il click
    return html` ${this._card} `;
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
