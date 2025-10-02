import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { localize } from "../localize/localize";
import { HomeAssistant } from "../ha-types";
import {
  DEFAULT_CONFIG,
  GoogleControlCardConfig,
  googleControlTemplate,
} from "./google-control-const";
import jsyaml from "js-yaml";
import { getName } from "../shared/mapper";

@customElement("google-control-card")
export class GoogleControlCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: GoogleControlCardConfig = DEFAULT_CONFIG;
  @state() private _card?: any;

  public async setConfig(config: GoogleControlCardConfig): Promise<void> {
    if (!config) {
      throw new Error(localize("common.invalid_configuration"));
    }
    this._config = config;
  }

  public static getStubConfig(): Partial<GoogleControlCardConfig> {
    return {
      type: "custom:google-control-card",
      name: "Control Card",
      icon: "mdi:link",
      tap_action: {
        action: "more-info",
      },
      hold_action: {
        action: "more-info",
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
    return document.createElement("google-control-card-editor");
  }

  //private mapAction(actions: any) {
  //  if (actions == undefined) return actions;
  //
  //  // Crea una copia dell'oggetto
  //  const newActions = { ...actions };
  //
  //  if (newActions.action === "navigate") {
  //    newActions.navigation_path = this.evalTripleBrackets(
  //      newActions.navigation_path
  //    );
  //  }
  //
  //  if (newActions.action === "url") {
  //    newActions.url_path = this.evalTripleBrackets(newActions.url_path);
  //  }
  //
  //  return newActions;
  //}

  private mapAction(actions: any): any {
    if (!actions || typeof actions !== "object") return actions;

    const mapped = { ...actions };

    for (const key of ["navigation_path", "url_path"]) {
      if (key in mapped && typeof mapped[key] === "string") {
        mapped[key] = this.evalTripleBrackets(mapped[key]);
      }
    }

    return mapped;
  }

  private mapTemplate() {
    const name = getName(this._config, this.hass);

    // Cloniamo l’oggetto per renderlo modificabile
    const newConfig = { ...this._config, name };
    newConfig.tap_action = this.mapAction(newConfig.tap_action);
    newConfig.hold_action = this.mapAction(newConfig.hold_action);
    const text = googleControlTemplate(newConfig);

    return text;
  }

  private evalTripleBrackets(input: string): any {
    const tripleBracketRegex = /^\s*\[\[\[\s*([\s\S]*?)\s*\]\]\]\s*$/;
    const match = input.match(tripleBracketRegex);
    if (match) {
      try {
        const fn = new Function(match[1]);
        return fn();
      } catch (err) {
        console.error("Eval error:", err);
      }
    }
    return input;
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
    "google-control-card": GoogleControlCard;
  }
}
