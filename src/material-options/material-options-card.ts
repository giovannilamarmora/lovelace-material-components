import { LitElement, html, TemplateResult, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  DEFAULT_CONFIG,
  MaterialOptionsCardConfig,
} from "./material-options-const";
import { getIcon } from "../shared/mapper";
import { mapStateTitle, mapStateValue } from "../dialog/dialog-mapper";
import { getOrDefault } from "../shared/utils";
import { setStyle } from "./material-options-mapper";

@customElement("material-options-card")
export class MaterialOptionsCard extends LitElement {
  @property({ attribute: false }) public hass!: any;
  @state() private _config: MaterialOptionsCardConfig = DEFAULT_CONFIG;

  public static getStubConfig(): Partial<MaterialOptionsCardConfig> {
    return {
      type: "custom:material-options-card",
    };
  }

  public async setConfig(config: MaterialOptionsCardConfig): Promise<void> {
    if (!config) throw new Error("Invalid configuration");
    this._config = config;
  }

  static getCardSize() {
    return 1;
  }

  static async getConfigElement() {
    return document.createElement("material-options-card-editor");
  }

  protected render(): TemplateResult {
    if (!this._config || !this.hass) return html``;

    const theme = this.hass?.themes?.darkMode ? "dark" : "light";

    const entity_id = this._config.entity;

    let stateObj: any;
    let icon = this._config.icon;
    let entity: any;
    if (entity_id) {
      stateObj = this.hass.states[entity_id!];

      // Get icon from mapper if not set in config
      const config: any = { ...this._config };
      config.use_default_icon =
        this._config.icon || this._config.dual_icon ? false : true;

      icon = getIcon(stateObj, config, this.hass);

      entity = this.hass.entities[stateObj.entity_id];
    }

    const textName = getOrDefault(
      this._config.name,
      mapStateTitle(stateObj, entity)
    );

    const subtitle = this._config.subtitle;

    setStyle(this.style, this._config);
    return html`
      <div class="menu-card link ${theme}">
        <ha-icon icon="${icon}"></ha-icon>
        <div class="menu-text-container">
          <span class="menu-text name">${textName}</span>
          <span class="menu-text subtitle">${subtitle}</span>
        </div>
        ${this._config.show_entity_options
          ? html`<span class="menu-text flex-end"
              >${mapStateValue(stateObj)}</span
            >`
          : ""}
      </div>
    `;
  }

  static styles = css`
    /* Fullscreen mobile */
    @media (max-width: 450px) {
      .menu-card.link {
        filter: brightness(1) !important;
      }
    }

    .menu-card {
      border-radius: 14px;
      padding: var(--menu-card-padding, 24px 18px);
      display: flex;
      align-items: center;
      gap: 16px;
      cursor: pointer;
      transition: all 0.2s ease;
      max-width: 500px;
      width: -webkit-fill-available;
    }

    .menu-card.link {
      background-color: var(--md-sys-color-surface-container);
    }

    .menu-card.state {
      border-radius: 28px;
    }

    .menu-card.light {
      filter: brightness(0.9);
    }

    .state {
      font-size: 13px;
      color: var(--secondary-text-color);
      text-transform: capitalize;
    }

    .menu-text-container {
      display: flex;
      flex-direction: column; /* mette subtitle sotto name */
    }

    .menu-text.name {
      font-size: 15px; /* mantiene la dimensione originale */
      font-weight: 550;
      letter-spacing: 0.1px;
    }

    .menu-text.subtitle {
      font-size: 12px; /* più piccolo del name */
      color: var(--secondary-text-color); /* colore non bianco */
      letter-spacing: 0.05px;
    }

    .flex-end {
      text-align: end;
      flex: auto;
      padding-right: 5px;
    }
  `;
}
