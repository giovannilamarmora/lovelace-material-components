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
  ControlType,
  DEFAULT_BTN_CONFIG,
  GoogleButtonCardConfig,
} from "./google-button-const";

@customElement("google-button-card-editor")
export class GoogleButtonCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: GoogleButtonCardConfig = DEFAULT_BTN_CONFIG;
  @state() private _configLoaded: boolean = false;

  public setConfig(config: GoogleButtonCardConfig): void {
    this._config = {
      ...DEFAULT_BTN_CONFIG,
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
      new CustomEvent("config-changed", { detail: { config: newConfig } })
    );
  }

  //private _valueChanged = (ev: Event): void => {
  //  const target = ev.target as any;
  //  const configValue = target.getAttribute("configValue");
  //
  //  const value =
  //    ev instanceof CustomEvent && ev.detail?.value !== undefined
  //      ? ev.detail.value
  //      : (target.checked ?? target.value);
  //
  //  if (!configValue || this._config[configValue] === value) return;
  //
  //  this._config = {
  //    ...this._config,
  //    [configValue]: value,
  //  };
  //
  //  this.dispatchEvent(
  //    new CustomEvent("config-changed", {
  //      detail: { config: this._config },
  //    })
  //  );
  //};

  private _entityChanged(ev: CustomEvent): void {
    const value = ev.detail.value;
    if (this._config?.entity === value) return;
    this._config = {
      ...this._config,
      entity: value,
    };
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config },
      })
    );
  }
  // Ritorna "toggle" se assente; se è stringa la usa, se è oggetto usa .action
  private _getActionValue(a?: any): string {
    if (!a) return "toggle";
    return typeof a === "string" ? a : (a.action ?? "toggle");
  }

  private _setAction(which: "tap_action" | "hold_action", action: string) {
    if (!this._configLoaded) return;

    const defaults: Record<string, any> = {
      toggle: { action: "toggle" },
      "more-info": { action: "more-info" },
      navigate: { action: "navigate", navigation_path: "/" },
      url: { action: "url", url_path: "" },
      none: { action: "none" },
    };
    const next = defaults[action] || { action };

    this._config = { ...this._config, [which]: next };
    this.dispatchEvent(
      new CustomEvent("config-changed", { detail: { config: this._config } })
    );
  }

  private _onTapSelected = (ev: CustomEvent) => {
    const value = (ev.target as any).value as string;
    if (value == this._config.tap_action?.action) return;
    this._setAction("tap_action", value);
  };

  private _onHoldSelected = (ev: CustomEvent) => {
    const value = (ev.target as any).value as string;
    if (value == this._config.hold_action?.action) return;
    this._setAction("hold_action", value);
  };

  private _setActionValue(
    which: "tap_action" | "hold_action",
    key: string,
    value: any
  ) {
    let action = this._config[which];

    if (typeof action === "string") {
      action = { action } as any as ActionConfig; // cast a ActionConfig
    }

    const updated = { ...action, [key]: value };

    this._config = { ...this._config, [which]: updated };
    this.dispatchEvent(
      new CustomEvent("config-changed", { detail: { config: this._config } })
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

    return html`
      <div class="form">
        <ha-select
          label="${localize("google_button_card.control_type")}"
          .value=${this._config.control_type ?? "generic"}
          configValue="control_type"
          @selected=${this._valueChanged}
          @closed=${(ev: Event) => ev.stopPropagation()}
        >
          <mwc-list-item value="generic">
            ${localize("google_button_card.type.generic")}
          </mwc-list-item>
          <mwc-list-item value="thermometer">
            ${localize("google_button_card.type.thermometer")}
          </mwc-list-item>
          <mwc-list-item value="automation">
            ${localize("google_button_card.type.automation")}
          </mwc-list-item>
          <mwc-list-item value="scene">
            ${localize("google_button_card.type.scene")}
          </mwc-list-item>
          <mwc-list-item value="media_player">
            ${localize("google_button_card.type.media")}
          </mwc-list-item>
          <mwc-list-item value="state">
            ${localize("google_button_card.type.state")}
          </mwc-list-item>
          <mwc-list-item value="action">
            ${localize("google_button_card.type.action")}
          </mwc-list-item>
          <mwc-list-item value="app_version">
            ${localize("google_button_card.type.app_version")}
          </mwc-list-item>
        </ha-select>

        <ha-textfield
          label="${localize("google_button_card.name")}"
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
              @value-changed=${this._entityChanged}
              required
            ></ha-entity-picker>`}
        ${this._config.control_type == ControlType.APP_VERSION ||
        this._config.control_type == ControlType.ACTION
          ? html``
          : html`<div class="switch-row">
              <span class="switch-label"
                >${localize("google_button_card.dual_icon.default")}</span
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
                    >${localize("google_button_card.dual_icon.options")}</span
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
                >${localize("google_button_card.dual_text.default")}</span
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
                  label="${localize("google_button_card.dual_text.text_on")}"
                  .value=${this._config.text_on || ""}
                  configValue="text_on"
                  @input=${this._valueChanged}
                  placeholder="On"
                ></ha-textfield>
                <ha-textfield
                  label="${localize("google_button_card.dual_text.text_off")}"
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
                  >${localize("google_climate_card.theme")}</span
                >
                <ha-switch
                  .checked=${this._config.use_material_color ?? false}
                  configValue="use_material_color"
                  @change=${this._valueChanged}
                />
              </div>
              <!--<div class="switch-row">
                <span class="switch-label"
                  >${localize("google_climate_card.fix_temperature")}</span
                >
                <ha-switch
                  .checked=${this._config.fix_temperature ?? false}
                  configValue="fix_temperature"
                  @change=${this._valueChanged}
                />
              </div>-->
              <ha-select
                label="${localize("google_climate_card.fix_temperature")}"
                .value=${this._config.fix_temperature ?? false}
                configValue="fix_temperature"
                @selected=${this._valueChanged}
                @closed=${(ev: Event) => ev.stopPropagation()}
              >
                <mwc-list-item value="false">
                  ${localize("google_climate_card.false")}
                </mwc-list-item>
                <mwc-list-item value="true">
                  ${localize("google_climate_card.true")}
                </mwc-list-item>
                <mwc-list-item value="auto">
                  ${localize("google_climate_card.auto")}
                </mwc-list-item>
              </ha-select>`}
        ${this._config.control_type == ControlType.ACTION
          ? html``
          : html`<div class="switch-row">
              <span class="switch-label"
                >${localize("google_button_card.toggle.title")}</span
              >
              <ha-switch
                .checked=${this._config.use_default_toggle ?? true}
                configValue="use_default_toggle"
                @change=${this._valueChanged}
              />
            </div>`}
        ${this._config.use_default_toggle
          ? html``
          : html`<ha-select
                label="${localize("google_button_card.toggle.press")}"
                .value=${this._getActionValue(this._config.tap_action)}
                @selected=${this._onTapSelected}
                @closed=${(ev: Event) => ev.stopPropagation()}
              >
                <mwc-list-item value="toggle">
                  ${localize("google_button_card.toggle.click")}
                </mwc-list-item>
                <mwc-list-item value="more-info">
                  ${localize("google_button_card.toggle.info")}
                </mwc-list-item>
                <mwc-list-item value="navigate">
                  ${localize("google_button_card.toggle.navigate")}
                </mwc-list-item>
                <mwc-list-item value="url">
                  ${localize("google_button_card.toggle.url")}
                </mwc-list-item>
                <mwc-list-item value="none">
                  ${localize("google_button_card.toggle.none")}
                </mwc-list-item>
              </ha-select>

              ${this._renderExtraField(this._config.tap_action, (key, value) =>
                this._setActionValue("tap_action", key, value)
              )}

              <ha-select
                label="${localize("google_button_card.toggle.hold")}"
                .value=${this._getActionValue(this._config.hold_action)}
                @selected=${this._onHoldSelected}
                @closed=${(ev: Event) => ev.stopPropagation()}
              >
                <mwc-list-item value="toggle">
                  ${localize("google_button_card.toggle.click")}
                </mwc-list-item>
                <mwc-list-item value="more-info">
                  ${localize("google_button_card.toggle.info")}
                </mwc-list-item>
                <mwc-list-item value="navigate">
                  ${localize("google_button_card.toggle.navigate")}
                </mwc-list-item>
                <mwc-list-item value="url">
                  ${localize("google_button_card.toggle.url")}
                </mwc-list-item>
                <mwc-list-item value="none">
                  ${localize("google_button_card.toggle.none")}
                </mwc-list-item>
              </ha-select>

              ${this._renderExtraField(this._config.hold_action, (key, value) =>
                this._setActionValue("hold_action", key, value)
              )}`}
      </div>
    `;
  }

  private _renderExtraField(
    action: any,
    onChange: (key: string, value: any) => void
  ) {
    const currentAction = action?.action ?? action; // stringa o oggetto

    return html`
      ${currentAction === "navigate"
        ? html`
            <ha-textfield
              style="display: block; margin-top: 10px;"
              label="Percorso di navigazione"
              .value=${(action as NavigateActionConfig)?.navigation_path || ""}
              @input=${(e: Event) =>
                onChange(
                  "navigation_path",
                  (e.target as HTMLInputElement).value
                )}
            ></ha-textfield>
          `
        : ""}
      ${currentAction === "url"
        ? html`
            <ha-textfield
              style="display: block; margin-top: 10px;"
              label="URL"
              .value=${(action as UrlActionConfig)?.url_path || ""}
              @input=${(e: Event) =>
                onChange("url_path", (e.target as HTMLInputElement).value)}
            ></ha-textfield>
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
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "google-button-card-editor": GoogleButtonCardEditor;
  }
}
