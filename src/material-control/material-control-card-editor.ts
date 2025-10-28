import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  ActionConfig,
  HomeAssistant,
  LovelaceCardEditor,
  NavigateActionConfig,
  UrlActionConfig,
} from "custom-card-helpers";
import { localize } from "../localize/localize";
import {
  DEFAULT_CONFIG,
  MaterialControlCardConfig,
} from "./material-control-const";
import { toggleConfigs } from "./material-control-const";
import { _entityChanged, _valueChanged } from "../shared/ha-editor";

@customElement("material-control-card-editor")
export class MaterialControlCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: MaterialControlCardConfig = DEFAULT_CONFIG;
  @state() private _configLoaded: boolean = false;

  public setConfig(config: MaterialControlCardConfig): void {
    this._config = { ...config };
    this._configLoaded = true;
  }

  async firstUpdated() {
    const helpers = await (window as any).loadCardHelpers();
    const card = await helpers.createCardElement({
      type: "entities",
      entities: [],
    });
    await card.constructor.getConfigElement();
  }

  private _tapActionChanged() {
    return (key: string, value: any) => {
      if (!this._configLoaded) return;

      if (key === "action" && this._config.tap_action.action != value) {
        const defaultConfigs: Record<string, any> = toggleConfigs;
        const action = defaultConfigs[value];
        this._config.tap_action = action;
      } else {
        if (key == "navigation_path") {
          this._config.tap_action.navigation_path = value;
        }
        if (key == "url_path") {
          this._config.tap_action.url_path = value;
        }
      }

      this.dispatchEvent(
        new CustomEvent("config-changed", {
          detail: { config: this._config },
        })
      );
    };
  }

  private _holdActionChanged() {
    return (key: string, value: any) => {
      if (!this._configLoaded) return;

      if (key === "action" && this._config.hold_action.action != value) {
        const defaultConfigs: Record<string, any> = toggleConfigs;
        const action = defaultConfigs[value];
        this._config.hold_action = action;
      } else {
        if (key == "navigation_path") {
          this._config.hold_action.navigation_path = value;
        }
        if (key == "url_path") {
          this._config.hold_action.url_path = value;
        }
      }

      this.dispatchEvent(
        new CustomEvent("config-changed", {
          detail: { config: this._config },
        })
      );
    };
  }

  render(): TemplateResult {
    if (!this._configLoaded || !this.hass) return html``;

    this._config.use_default_icon = this._config.use_default_icon ?? true;
    this._config.use_card_entity = this._config.use_card_entity ?? false;

    const renderActionEditor = (
      actionType: string,
      action: ActionConfig | undefined,
      onChange: (key: string, value: any) => void
    ) => {
      const currentAction = action?.action ?? "more-info";

      return html`
        <ha-select
          style="display: block;"
          label="${localize("actions." + actionType + "_title")}"
          .value=${currentAction}
          @selected=${(e: CustomEvent) => {
            const target = e.target as HTMLInputElement;
            const newAction = target.value;
            onChange("action", newAction);
          }}
          @closed=${(ev: Event) => ev.stopPropagation()}
        >
          <mwc-list-item value="more-info">
            ${localize("actions.more_info")}
          </mwc-list-item>
          <mwc-list-item value="toggle">
            ${localize("actions.toggle")}
          </mwc-list-item>
          <mwc-list-item value="navigate">
            ${localize("actions.navigate")}
          </mwc-list-item>
          <mwc-list-item value="url">
            ${localize("actions.url")}
          </mwc-list-item>
          <mwc-list-item value="none">
            ${localize("actions.none")}
          </mwc-list-item>
          <mwc-list-item value="google-home">
            ${localize("actions.google_home")}
          </mwc-list-item>
          <mwc-list-item value="settings">
            ${localize("actions.settings")}
          </mwc-list-item>
        </ha-select>

        ${currentAction === "navigate"
          ? html`
              <ha-selector
                style="display: block; margin-top: 10px;"
                .hass=${this.hass}
                .selector=${{ navigation: {} }}
                .value=${(action as NavigateActionConfig)?.navigation_path ||
                ""}
                .label=${localize("actions.navigate")}
                .configValue=${"navigation_path"}
                @value-changed=${(e: CustomEvent) =>
                  onChange("navigation_path", e.detail.value)}
              ></ha-selector>
            `
          : ""}
        ${currentAction === "url"
          ? html`
              <ha-selector
                style="display: block; margin-top: 10px;"
                .hass=${this.hass}
                .selector=${{ text: {} }}
                .value=${(action as UrlActionConfig)?.url_path || ""}
                .label=${localize("actions.url")}
                .configValue=${"url_path"}
                @value-changed=${(e: CustomEvent) =>
                  onChange("url_path", e.detail.value)}
              ></ha-selector>
            `
          : ""}
        <!-- Aggiungi altri campi dinamici se servono per call-service ecc. -->
      `;
    };

    return html`
      <div class="form">
        <ha-textfield
          label="${localize("material_control_card.name")}"
          .value=${this._config.name || ""}
          configValue="name"
          @input=${(ev: Event) => _valueChanged(ev, this)}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("material_control_card.entity_card")}</span
          >
          <ha-switch
            .checked=${this._config.use_card_entity}
            configValue="use_card_entity"
            @change=${(ev: Event) => _valueChanged(ev, this)}
          />
        </div>

        ${this._config.use_card_entity
          ? html`
              <ha-entity-picker
                label="${localize("material_control_card.entity")}"
                .value=${this._config.entity || ""}
                .hass=${this.hass}
                allow-custom-entity
                configValue="entity"
                @value-changed=${(ev: CustomEvent) => _entityChanged(ev, this)}
                required
              ></ha-entity-picker>
            `
          : ""}

        <div class="switch-row">
          <span class="switch-label"
            >${localize("material_control_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${this._config.use_default_icon}
            configValue="use_default_icon"
            @change=${(ev: Event) => _valueChanged(ev, this)}
          />
        </div>

        ${!this._config.use_default_icon
          ? html`
              <div class="switch-row">
                <span class="switch-label"
                  >${localize("material_control_card.dual_icon.options")}</span
                >
                <ha-switch
                  .checked=${this._config.dual_icon ?? false}
                  configValue="dual_icon"
                  @change=${(ev: Event) => _valueChanged(ev, this)}
                />
              </div>
              ${this._config.dual_icon
                ? html`
                    <div class="dual-icons">
                      <ha-icon-picker
                        label="Icon ON"
                        .value=${this._config.icon_on || ""}
                        configValue="icon_on"
                        @value-changed=${(ev: Event) => _valueChanged(ev, this)}
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Icon OFF"
                        .value=${this._config.icon_off || ""}
                        configValue="icon_off"
                        @value-changed=${(ev: Event) => _valueChanged(ev, this)}
                      ></ha-icon-picker>
                    </div>
                  `
                : html`
                    <ha-icon-picker
                      label="Icon"
                      .value=${this._config.icon || ""}
                      configValue="icon"
                      @value-changed=${(ev: Event) => _valueChanged(ev, this)}
                    ></ha-icon-picker>
                  `}
            `
          : ""}

        <div class="warning">${localize("actions.warning")}</div>
        <div>
          <h4 style="margin-bottom: 10px;">
            ${localize("actions.tap_action_title")}
          </h4>
          ${renderActionEditor(
            "tap_action",
            this._config.tap_action,
            this._tapActionChanged()
          )}
        </div>

        <div>
          <h4 style="margin-bottom: 10px;">
            ${localize("actions.hold_action_title")}
          </h4>
          ${renderActionEditor(
            "hold_action",
            this._config.hold_action,
            this._holdActionChanged()
          )}
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

    .action-editor ha-textarea {
      width: 100%;
      font-family: monospace;
    }

    .warning {
      margin-top: 16px;
      color: var(--error-color, #d32f2f);
      font-size: 0.9rem;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "material-control-card-editor": MaterialControlCardConfig;
  }
}
