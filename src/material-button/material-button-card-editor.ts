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
  MaterialButtonCardConfig,
} from "./material-button-const";
import { ControlType } from "../shared/types";
import { _entityChanged, _valueChanged } from "../shared/ha-editor";
import { getCardVersion } from "../shared/utils/log";

@customElement("material-button-card-editor")
export class MaterialButtonCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: MaterialButtonCardConfig = DEFAULT_CONFIG;
  @state() private _configLoaded: boolean = false;

  public setConfig(config: MaterialButtonCardConfig): void {
    this._config = {
      ...DEFAULT_CONFIG,
      ...config,
      tap_action: config.tap_action,
      hold_action: config.hold_action,
    };
    this._configLoaded = true;
  }

  private _valueChanged(ev: CustomEvent): void {
    if (!this._config) return;
    const target = ev.target as any;
    const configValue = target.getAttribute("configValue");
    const newConfig = {
      ...this._config,
      [configValue]: target.checked ?? target.value,
    };

    // 👇 rimuovi entity se non serve più
    if (
      newConfig.control_type === ControlType.APP_VERSION ||
      newConfig.control_type === ControlType.ACTION
    ) {
      delete newConfig.entity;
    }

    if (newConfig.use_default_toggle) {
      delete newConfig.tap_action;
      delete newConfig.hold_action;
    }

    this.dispatchEvent(
      new CustomEvent("config-changed", { detail: { config: newConfig } }),
    );
  }

  // Ritorna "toggle" se assente; se è stringa la usa, se è oggetto usa .action
  private _getActionValue(a?: any): string {
    if (!a) return "toggle";
    return typeof a === "string" ? a : (a.action ?? "toggle");
  }

  private _onTapSelected(ev: CustomEvent): void {
    if (!this._config || !this.hass) return;

    // CORREZIONE: Estrai il valore da ev.detail.value
    const value = ev.detail.value;

    // Evita aggiornamenti se il valore è identico
    const currentValue = this._getActionValue(this._config.tap_action);
    if (value === currentValue) return;

    this._setAction("tap_action", value);
  }

  private _setAction(which: "tap_action" | "hold_action", action: string) {
    const defaults: Record<string, any> = {
      toggle: { action: "toggle" },
      "more-info": { action: "more-info" },
      navigate: { action: "navigate", navigation_path: "/" },
      url: { action: "url", url_path: "" },
      none: { action: "none" },
    };

    const actionConfig = defaults[action] || { action };

    // Crea una nuova copia dell'oggetto config
    const newConfig = {
      ...this._config,
      [which]: actionConfig,
    };

    // Dispatch dell'evento per notificare l'editor di HA
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: newConfig },
      }),
    );

    // Importante: aggiorna anche il riferimento locale se Lit non lo fa automaticamente
    this._config = newConfig;
  }

  private _onHoldSelected = (ev: CustomEvent): void => {
    if (!this._config) return;

    // 1. Estrai il valore da ev.detail.value (standard per ha-selector)
    const value = ev.detail.value;

    // 2. Recupera il valore attuale pulito (stringa) per il confronto
    // Usiamo lo stesso helper _getActionValue per coerenza
    const currentValue = this._getActionValue(this._config.hold_action);

    // 3. Se il valore non è cambiato, interrompi per evitare loop o render inutili
    if (value === currentValue) return;

    // 4. Applica la modifica
    this._setAction("hold_action", value);
  };

  private _setActionValue(
    which: "tap_action" | "hold_action",
    key: string,
    value: any,
  ) {
    let action = this._config[which];

    if (typeof action === "string") {
      action = { action } as any as ActionConfig; // cast a ActionConfig
    }

    const updated = { ...action, [key]: value };

    this._config = { ...this._config, [which]: updated };
    this.dispatchEvent(
      new CustomEvent("config-changed", { detail: { config: this._config } }),
    );
  }

  async firstUpdated() {
    const helpers = await (window as any).loadCardHelpers();
    const card = await helpers.createCardElement({
      type: "entities",
      entities: [],
    });
    await card.constructor.getConfigElement();
  }

  setEntityFilter() {
    switch (this._config.control_type) {
      case ControlType.THERMOMETER:
        return ["climate"];
      case ControlType.AUTOMATION:
        return ["automation"];
      case ControlType.SCENE:
        return ["scene"];
      case ControlType.MEDIA_PLAYER:
        return ["media_player"];
      default:
        return undefined;
    }
  }

  render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html``;
    }

    this._config.use_default_icon = this._config.use_default_icon ?? true;
    if (
      this._config.control_type == ControlType.APP_VERSION ||
      this._config.control_type == ControlType.ACTION
    )
      this._config.use_default_icon = false;
    if (this._config.control_type == ControlType.ACTION)
      this._config.use_default_toggle = false;
    this._config.use_default_toggle = this._config.use_default_toggle ?? true;
    this._config.use_default_text = this._config.use_default_text ?? true;

    const controlTypeOptions = [
      {
        value: "generic",
        label: localize("material_button_card.type.generic"),
      },
      {
        value: "thermometer",
        label: localize("material_button_card.type.thermometer"),
      },
      {
        value: "automation",
        label: localize("material_button_card.type.automation"),
      },
      {
        value: "scene",
        label: localize("material_button_card.type.scene"),
      },
      {
        value: "media_player",
        label: localize("material_button_card.type.media"),
      },
      {
        value: "state",
        label: localize("material_button_card.type.state"),
      },
      {
        value: "action",
        label: localize("material_button_card.type.action"),
      },
      {
        value: "app_version",
        label: localize("material_button_card.type.app_version"),
      },
    ];

    const fixTemperatureOptions = [
      {
        value: "false",
        label: localize("material_climate_card.false"),
      },
      {
        value: "true",
        label: localize("material_climate_card.true"),
      },
      {
        value: "auto",
        label: localize("material_climate_card.auto"),
      },
    ];

    const actions = [
      {
        value: "toggle",
        label: localize("actions.toggle"),
      },
      {
        value: "more-info",
        label: localize("actions.more_info"),
      },
      {
        value: "navigate",
        label: localize("actions.navigate"),
      },
      {
        value: "url",
        label: localize("actions.url"),
      },
      {
        value: "none",
        label: localize("actions.none"),
      },
    ];

    return html`
      <div class="form">
        <ha-selector
          .hass=${this.hass}
          label="${localize("material_button_card.control_type")}"
          .selector=${{
            select: {
              options: controlTypeOptions,
              mode: "dropdown", // o "list" se preferisci i bottoni
            },
          }}
          .value=${this._config.control_type ?? "generic"}
          .required=${true}
          configValue="control_type"
          @value-changed=${(ev: CustomEvent) => _valueChanged(ev, this)}
        >
        </ha-selector>

        <ha-textfield
          label="${localize("material_button_card.name")}"
          .value=${this._config.name || ""}
          configValue="name"
          @input=${this._valueChanged}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        ${this._config.control_type == ControlType.APP_VERSION ||
        this._config.control_type == ControlType.ACTION
          ? html``
          : html`<ha-entity-picker
              label="Entity"
              .value=${this._config.entity || ""}
              .hass=${this.hass}
              .includeDomains=${this.setEntityFilter()}
              allow-custom-entity
              configValue="entity"
              @value-changed=${(ev: CustomEvent) => _entityChanged(ev, this)}
              required
            ></ha-entity-picker>`}
        ${this._config.control_type == ControlType.APP_VERSION ||
        this._config.control_type == ControlType.ACTION
          ? html``
          : html`<div class="switch-row">
              <span class="switch-label"
                >${localize("material_button_card.dual_icon.default")}</span
              >
              <ha-switch
                .checked=${this._config.use_default_icon ?? true}
                configValue="use_default_icon"
                @change=${this._valueChanged}
              />
            </div>`}
        ${this._config.use_default_icon
          ? html``
          : html`${this._config.control_type == ControlType.APP_VERSION ||
            this._config.control_type == ControlType.ACTION ||
            this._config.control_type == ControlType.THERMOMETER ||
            this._config.control_type == ControlType.SCENE ||
            this._config.control_type == ControlType.STATE
              ? html``
              : html`<div class="switch-row">
                  <span class="switch-label"
                    >${localize("material_button_card.dual_icon.options")}</span
                  >
                  <ha-switch
                    .checked=${this._config.dual_icon ?? false}
                    configValue="dual_icon"
                    @change=${this._valueChanged}
                  />
                </div>`}
            ${this._config.dual_icon
              ? html`
                  <div class="dual-icons">
                    <ha-icon-picker
                      label="Icon ON"
                      .value=${this._config.icon_on || ""}
                      configValue="icon_on"
                      @value-changed=${this._valueChanged}
                      placeholder="mdi:lightbulb-on"
                    ></ha-icon-picker>
                    <ha-icon-picker
                      label="Icon OFF"
                      .value=${this._config.icon_off || ""}
                      configValue="icon_off"
                      @value-changed=${this._valueChanged}
                      placeholder="mdi:lightbulb-off"
                    ></ha-icon-picker>
                  </div>
                `
              : html`
                  <ha-icon-picker
                    label="Icon"
                    .value=${this._config.icon || ""}
                    configValue="icon"
                    @value-changed=${this._valueChanged}
                    placeholder="mdi:lightbulb"
                  />
                `} `}
        ${this._config.control_type == ControlType.APP_VERSION ||
        this._config.control_type == ControlType.ACTION ||
        this._config.control_type == ControlType.THERMOMETER ||
        this._config.control_type == ControlType.SCENE ||
        this._config.control_type == ControlType.MEDIA_PLAYER ||
        this._config.control_type == ControlType.STATE
          ? html``
          : html`<div class="switch-row">
              <span class="switch-label"
                >${localize("material_button_card.dual_text.default")}</span
              >
              <ha-switch
                .checked=${this._config.use_default_text ?? true}
                configValue="use_default_text"
                @change=${this._valueChanged}
              />
            </div>`}
        ${this._config.use_default_text
          ? html``
          : html`
              <div class="dual-icons">
                <ha-textfield
                  label="${localize("material_button_card.dual_text.text_on")}"
                  .value=${this._config.text_on || ""}
                  configValue="text_on"
                  @input=${this._valueChanged}
                  placeholder="On"
                ></ha-textfield>
                <ha-textfield
                  label="${localize("material_button_card.dual_text.text_off")}"
                  .value=${this._config.text_off || ""}
                  configValue="text_off"
                  @input=${this._valueChanged}
                  placeholder="Off"
                ></ha-textfield>
              </div>
            `}
        ${this._config.control_type != ControlType.THERMOMETER
          ? html``
          : html` <div class="switch-row">
                <span class="switch-label"
                  >${localize("material_climate_card.theme")}</span
                >
                <ha-switch
                  .checked=${this._config.use_material_color ?? false}
                  configValue="use_material_color"
                  @change=${this._valueChanged}
                />
              </div>
              <!--<div class="switch-row">
                <span class="switch-label"
                  >${localize("material_climate_card.fix_temperature")}</span
                >
                <ha-switch
                  .checked=${this._config.fix_temperature ?? false}
                  configValue="fix_temperature"
                  @change=${this._valueChanged}
                />
              </div>-->
              <ha-selector
                .hass=${this.hass}
                label="${localize("material_climate_card.fix_temperature")}"
                .selector=${{
                  select: {
                    options: fixTemperatureOptions,
                    mode: "dropdown", // o "list" se preferisci i bottoni
                  },
                }}
                .value=${this._config.fix_temperature ?? "false"}
                configValue="fix_temperature"
                @value-changed=${(ev: CustomEvent) => _valueChanged(ev, this)}
              >
              </ha-selector>`}
        ${this._config.control_type == ControlType.ACTION
          ? html``
          : html`<div class="switch-row">
              <span class="switch-label"
                >${localize("actions.automatic_action")}</span
              >
              <ha-switch
                .checked=${this._config.use_default_toggle ?? true}
                configValue="use_default_toggle"
                @change=${this._valueChanged}
              />
            </div>`}
        ${this._config.use_default_toggle
          ? html``
          : html`<div class="warning">${localize("actions.warning")}</div>
              <ha-selector
                .hass=${this.hass}
                label="${localize("actions.tap_action_title")}"
                .selector=${{
                  select: {
                    options: actions,
                    mode: "dropdown", // o "list" se preferisci i bottoni
                  },
                }}
                .value=${this._getActionValue(this._config.tap_action)}
                @value-changed=${this._onTapSelected}
              >
              </ha-selector>

              ${this._renderExtraField(this._config.tap_action, (key, value) =>
                this._setActionValue("tap_action", key, value),
              )}

              <ha-selector
                .hass=${this.hass}
                label="${localize("actions.hold_action_title")}"
                .selector=${{
                  select: {
                    options: actions,
                    mode: "dropdown", // o "list" se preferisci i bottoni
                  },
                }}
                .value=${this._getActionValue(this._config.hold_action)}
                @value-changed=${this._onHoldSelected}
              >
              </ha-selector>

              ${this._renderExtraField(this._config.hold_action, (key, value) =>
                this._setActionValue("hold_action", key, value),
              )}`}
      </div>
      ${getCardVersion()}
    `;
  }

  private _renderExtraField(
    action: any,
    onChange: (key: string, value: any) => void,
  ) {
    const currentAction = action?.action ?? action; // stringa o oggetto

    return html`
      ${currentAction === "navigate"
        ? html`
            <ha-selector
              style="display: block; margin-top: 10px;"
              .hass=${this.hass}
              .selector=${{ navigation: {} }}
              .value=${(action as NavigateActionConfig)?.navigation_path || ""}
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

    .warning {
      margin-top: 16px;
      color: var(--error-color, #d32f2f);
      font-size: 0.9rem;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "material-button-card-editor": MaterialButtonCardEditor;
  }
}
