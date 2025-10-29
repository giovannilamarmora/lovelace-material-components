import { LitElement, html, TemplateResult, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant } from "custom-card-helpers";
import jsyaml from "js-yaml";
import { MaterialDashboardCardConfig } from "./material-dashboard-const";
import { applyRippleEffect } from "../animations";
import { materialDashboadTemplate } from "./material-dashboard-template";

@customElement("material-dashboard-card")
export class MaterialDashboardCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config?: MaterialDashboardCardConfig;
  @state() private _card?: any;

  public static getStubConfig(): Partial<MaterialDashboardCardConfig> {
    return {
      type: "custom:material-dashboard-card",
    };
  }

  public async setConfig(config: MaterialDashboardCardConfig): Promise<void> {
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
      console.log("This LOG is for debug purpose, Material Dashboard");
      console.log(this.hass);
    }
  }

  static getCardSize() {
    return 1;
  }

  static async getConfigElement() {
    return document.createElement("material-dashboard-card-editor");
  }

  private mapTemplate(config: MaterialDashboardCardConfig) {
    //const text = materialDashboadTemplate(
    //  config.cameras!,
    //  config.lighting!,
    //  config.wifi!,
    //  config.climate!
    //);
    const text = materialDashboadTemplate(config);
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
      <div style="margin: 0px -15px;" @mousedown=${this._handleClick}>
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
