import { LitElement, html, TemplateResult, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant } from "custom-card-helpers";
import jsyaml from "js-yaml";
import {
  googleDashboadTemplate,
  GoogleDashboardCardConfig,
} from "./google-dashboard-const";
import { applyRippleEffect } from "../animations";

@customElement("google-dashboard-card")
export class GoogleDashboardCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config?: GoogleDashboardCardConfig;
  @state() private _card?: any;

  public static getStubConfig(): Partial<GoogleDashboardCardConfig> {
    return {
      type: "custom:google-dashboard-card",
    };
  }

  public async setConfig(config: GoogleDashboardCardConfig): Promise<void> {
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
      console.log("This LOG is for debug purpose, Google Dashboard");
      console.log(this.hass);
    }
  }

  static getCardSize() {
    return 1;
  }

  static async getConfigElement() {
    return document.createElement("google-dashboard-card-editor");
  }

  private mapTemplate(config: GoogleDashboardCardConfig) {
    const action = this.resolveAction({
      default_action: config.default_action,
      action_type: config.action_type,
      single_tap_web: config.single_tap_web,
    });

    const text = googleDashboadTemplate(
      config.cameras!,
      config.lighting!,
      config.wifi!,
      config.climate!,
      action
    );
    return text;
  }

  resolveAction({
    default_action,
    action_type,
    single_tap_web,
  }: {
    default_action?: boolean;
    action_type?: "tap_action" | "hold_action" | "double_tap_action";
    single_tap_web?: boolean;
  }): "tap_action" | "hold_action" | "double_tap_action" | any {
    const ua = navigator.userAgent || "";
    const isWeb =
      !ua.includes("Android") &&
      !ua.includes("iPhone") &&
      !ua.includes("iPad") &&
      !ua.includes("HomeAssistant");

    if (default_action) return "tap_action";
    if (isWeb && single_tap_web) return "tap_action";
    if (!action_type) return "tap_action";
    return action_type;
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
