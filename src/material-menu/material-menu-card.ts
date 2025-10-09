import { LitElement, html, TemplateResult, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant } from "custom-card-helpers";
import jsyaml from "js-yaml";
import { DEFAULT_CONFIG, MaterialMenuCardConfig } from "./material-menu-const";
import { materialMenuTemplate } from "./material-menu-template";

@customElement("material-menu-card")
export class MaterialMenuCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: MaterialMenuCardConfig = DEFAULT_CONFIG;
  @state() private _card?: any;

  public static getStubConfig(): Partial<MaterialMenuCardConfig> {
    return DEFAULT_CONFIG;
  }

  public async setConfig(config: MaterialMenuCardConfig): Promise<void> {
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
      console.log("This LOG is for debug purpose, Material Dashboard");
      console.log(this.hass);
    }
  }

  static getCardSize() {
    return 1;
  }

  static async getConfigElement() {
    return document.createElement("material-menu-card-editor");
  }

  private mapTemplate() {
    const text = materialMenuTemplate(this._config);
    console.log(text);
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
