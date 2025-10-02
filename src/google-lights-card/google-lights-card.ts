import { LitElement, html, TemplateResult, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant } from "custom-card-helpers";
import jsyaml from "js-yaml";
import { applyRippleEffect } from "../animations";
import { GoogleLightCardConfig, googleTemplate } from "./google-lights-const";

@customElement("google-lights-card")
export class GoogleLightsCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config?: GoogleLightCardConfig;
  @state() private _card?: any;

  public static getStubConfig(): Partial<GoogleLightCardConfig> {
    return {
      type: "custom:google-lights-card",
      on_text: "Lights on",
      off_text: "Lights off",
    };
  }

  public async setConfig(config: GoogleLightCardConfig): Promise<void> {
    if (!config) throw new Error("Invalid configuration");
    this._config = config;
  }

  protected async updated(changedProps: Map<string, any>) {
    if (changedProps.has("hass")) {
      if (this._card) {
        this._card.hass = this.hass; // aggiorna la card esistente
      } else if (this._config) {
        const template = this.mapTemplate(this._config);
        const configJson = jsyaml.load(template);

        const helpers = await (window as any).loadCardHelpers();
        const card = await helpers.createCardElement(configJson);
        card.classList.add("ripple-card");
        card.hass = this.hass;

        this._card = card;
        this.requestUpdate();
      }
      console.log("This LOG is for debug purpose, Google Lights");
      console.log(this.hass);
    }
  }

  static getCardSize() {
    return 1;
  }

  static async getConfigElement() {
    return document.createElement("google-lights-card-editor");
  }

  private mapTemplate(config: GoogleLightCardConfig) {
    const text = googleTemplate(config);
    return text;
  }

  private _handleClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    // Cerca l'elemento più vicino che abbia una classe riconoscibile, ad es. 'button-card'
    const card = target.closest(".ripple-card") as HTMLElement;
    if (card) {
      applyRippleEffect(card, event);
    }
  }

  protected render(): TemplateResult {
    if (!this._card) {
      return html`<ha-card>Loading…</ha-card>`;
    }

    // Avvolgi il contenuto in un div che intercetta il click
    return html`
      <div style="margin: 0px 0px;" @mousedown=${this._handleClick}>
        ${this._card}
      </div>
    `;
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
