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
  GoogleControlCardConfig,
} from "./google-control-const";
//import { Action } from "../shared/utils";

@customElement("google-control-card-editor")
export class GoogleControlCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: GoogleControlCardConfig = DEFAULT_CONFIG;
  @state() private _configLoaded: boolean = false;

  public setConfig(config: GoogleControlCardConfig): void {
    this._config = { ...config };
    this._configLoaded = true;
  }

  private _valueChanged = (ev: Event): void => {
    const target = ev.target as any;
    const configValue = target.getAttribute("configValue");

    const value =
      ev instanceof CustomEvent && ev.detail?.value !== undefined
        ? ev.detail.value
        : (target.checked ?? target.value);

    if (!configValue || this._config[configValue] === value) return;

    this._config = {
      ...this._config,
      [configValue]: value,
    };

    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config },
      })
    );
  };

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
        const defaultConfigs: Record<string, any> = {
          toggle: { action: "toggle" },
          "more-info": { action: "more-info" },
          navigate: { action: "navigate", navigation_path: "/" },
          url: { action: "url", url_path: "" },
          none: { action: "none" },
          "google-home": { action: "google-home" },
          settings: { action: "settings" },
        };
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
        const defaultConfigs: Record<string, any> = {
          toggle: { action: "toggle" },
          "more-info": { action: "more-info" },
          navigate: { action: "navigate", navigation_path: "/" },
          url: { action: "url", url_path: "" },
          none: { action: "none" },
          "google-home": { action: "google-home" },
          settings: { action: "settings" },
        };
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
      action: ActionConfig | undefined,
      onChange: (key: string, value: any) => void
    ) => {
      const currentAction = action?.action ?? "more-info";
      //console.log("CurrentAction", currentAction);

      return html`
        <ha-select
          style="display: block;"
          label="Azione"
          .value=${currentAction}
          @selected=${(e: CustomEvent) => {
            const target = e.target as HTMLInputElement;
            const newAction = target.value;
            onChange("action", newAction);
          }}
          @closed=${(ev: Event) => ev.stopPropagation()}
        >
          <mwc-list-item value="more-info">
            ${localize("google_control_card.actions.more_info")}
          </mwc-list-item>
          <mwc-list-item value="toggle">
            ${localize("google_control_card.actions.toggle")}
          </mwc-list-item>
          <mwc-list-item value="navigate">
            ${localize("google_control_card.actions.navigate")}
          </mwc-list-item>
          <mwc-list-item value="url">
            ${localize("google_control_card.actions.url")}
          </mwc-list-item>
          <mwc-list-item value="none">
            ${localize("google_control_card.actions.none")}
          </mwc-list-item>
          <mwc-list-item value="google-home">
            ${localize("google_control_card.actions.google_home")}
          </mwc-list-item>
          <mwc-list-item value="settings">
            ${localize("google_control_card.actions.settings")}
          </mwc-list-item>
        </ha-select>

        ${currentAction === "navigate"
          ? html`
              <ha-textfield
                style="display: block; margin-top: 10px;"
                label="Percorso di navigazione"
                .value=${(action as NavigateActionConfig)?.navigation_path ||
                ""}
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
                .value=${(action as UrlActionConfig)?.url_path}
                @input=${(e: Event) =>
                  onChange("url_path", (e.target as HTMLInputElement).value)}
              ></ha-textfield>
            `
          : ""}
        <!-- Aggiungi altri campi dinamici se servono per call-service ecc. -->
      `;
    };

    return html`
      <div class="form">
        <ha-textfield
          label="${localize("google_control_card.name")}"
          .value=${this._config.name || ""}
          configValue="name"
          @input=${this._valueChanged}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("google_control_card.entity_card")}</span
          >
          <ha-switch
            .checked=${this._config.use_card_entity}
            configValue="use_card_entity"
            @change=${this._valueChanged}
          />
        </div>

        ${this._config.use_card_entity
          ? html`
              <ha-entity-picker
                label="${localize("google_control_card.entity")}"
                .value=${this._config.entity || ""}
                .hass=${this.hass}
                allow-custom-entity
                configValue="entity"
                @value-changed=${this._entityChanged}
                required
              ></ha-entity-picker>
            `
          : ""}

        <div class="switch-row">
          <span class="switch-label"
            >${localize("google_control_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${this._config.use_default_icon}
            configValue="use_default_icon"
            @change=${this._valueChanged}
          />
        </div>

        ${!this._config.use_default_icon
          ? html`
              <div class="switch-row">
                <span class="switch-label"
                  >${localize("google_control_card.dual_icon.options")}</span
                >
                <ha-switch
                  .checked=${this._config.dual_icon ?? false}
                  configValue="dual_icon"
                  @change=${this._valueChanged}
                />
              </div>
              ${this._config.dual_icon
                ? html`
                    <div class="dual-icons">
                      <ha-icon-picker
                        label="Icon ON"
                        .value=${this._config.icon_on || ""}
                        configValue="icon_on"
                        @value-changed=${this._valueChanged}
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Icon OFF"
                        .value=${this._config.icon_off || ""}
                        configValue="icon_off"
                        @value-changed=${this._valueChanged}
                      ></ha-icon-picker>
                    </div>
                  `
                : html`
                    <ha-icon-picker
                      label="Icon"
                      .value=${this._config.icon || ""}
                      configValue="icon"
                      @value-changed=${this._valueChanged}
                    ></ha-icon-picker>
                  `}
            `
          : ""}

        <div>
          <h3>${localize("google_control_card.actions.press")}</h3>
          ${renderActionEditor(
            this._config.tap_action,
            this._tapActionChanged()
          )}
        </div>

        <div>
          <h3>${localize("google_control_card.actions.hold")}</h3>
          ${renderActionEditor(
            this._config.hold_action,
            this._holdActionChanged()
          )}
        </div>
      </div>
    `;
  }

  /*render(): TemplateResult {
    if (!this._config || !this.hass) return html``;

    this._config.use_default_icon = this._config.use_default_icon ?? true;
    this._config.use_default_toggle = this._config.use_default_toggle ?? true;
    this._config.use_card_entity = this._config.use_card_entity ?? false;

    const tapAction = this._config.tap_action || { action: "toggle" };
    const holdAction = this._config.hold_action || { action: "more-info" };

    const renderActionEditor = (
      action: any,
      onChange: (e: CustomEvent) => void
    ) => html`
      <ha-select
        style="display: block;"
        label="Action"
        .value=${action.action}
        @selected=${this._valueChanged}
        @closed=${(ev: Event) => ev.stopPropagation()}
      >
        ${["more-info", "toggle", "navigate", "url", "assist", "none"].map(
          (a) => html`<mwc-list-item .value=${a}>${a}</mwc-list-item>`
        )}
      </ha-select>

      ${action.action === "navigate"
        ? html`
            <ha-textfield
              label="Navigation Path"
              .value=${action.navigation_path || ""}
              @input=${(e: Event) =>
                onChange(
                  new CustomEvent("value-changed", {
                    detail: {
                      value: {
                        navigation_path: (e.target as HTMLInputElement).value,
                      },
                    },
                  })
                )}
            ></ha-textfield>
          `
        : ""}
      ${action.action === "url"
        ? html`
            <ha-textfield
              label="URL Path"
              .value=${action.url_path || ""}
              @input=${(e: Event) =>
                onChange(
                  new CustomEvent("value-changed", {
                    detail: {
                      value: { url_path: (e.target as HTMLInputElement).value },
                    },
                  })
                )}
            ></ha-textfield>
          `
        : ""}
      ${action.action === "assist"
        ? html`
            <ha-textfield
              label="Pipeline ID"
              .value=${action.pipeline_id || ""}
              @input=${(e: Event) =>
                onChange(
                  new CustomEvent("value-changed", {
                    detail: {
                      value: {
                        pipeline_id: (e.target as HTMLInputElement).value,
                      },
                    },
                  })
                )}
            ></ha-textfield>
            <ha-switch
              .checked=${action.start_listening ?? false}
              @change=${(e: Event) =>
                onChange(
                  new CustomEvent("value-changed", {
                    detail: {
                      value: {
                        start_listening: (e.target as HTMLInputElement).checked,
                      },
                    },
                  })
                )}
            >
              Start Listening
            </ha-switch>
          `
        : ""}
      ${action.action === "more-info"
        ? html`
            <ha-textfield
              label="Entity Override"
              .value=${action.entity || ""}
              @input=${(e: Event) =>
                onChange(
                  new CustomEvent("value-changed", {
                    detail: {
                      value: { entity: (e.target as HTMLInputElement).value },
                    },
                  })
                )}
            ></ha-textfield>
          `
        : ""}
    `;

    return html`
      <div class="form">
        <ha-textfield
          label="${localize("google_control_card.name")}"
          .value=${this._config.name || ""}
          configValue="name"
          @input=${this._valueChanged}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("google_control_card.entity_card")}</span
          >
          <ha-switch
            .checked=${this._config.use_card_entity}
            configValue="use_card_entity"
            @change=${this._valueChanged}
          />
        </div>

        ${this._config.use_card_entity
          ? html`
              <ha-entity-picker
                label="${localize("google_control_card.entity")}"
                .value=${this._config.entity || ""}
                .hass=${this.hass}
                .includeDomains=${["climate"]}
                allow-custom-entity
                configValue="entity"
                @value-changed=${this._entityChanged}
                required
              ></ha-entity-picker>
            `
          : ""}

        <div class="switch-row">
          <span class="switch-label"
            >${localize("google_control_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${this._config.use_default_icon}
            configValue="use_default_icon"
            @change=${this._valueChanged}
          />
        </div>

        ${!this._config.use_default_icon
          ? html`
              <div class="switch-row">
                <span class="switch-label"
                  >${localize("google_control_card.dual_icon.options")}</span
                >
                <ha-switch
                  .checked=${this._config.dual_icon ?? false}
                  configValue="dual_icon"
                  @change=${this._valueChanged}
                />
              </div>
              ${this._config.dual_icon
                ? html`
                    <div class="dual-icons">
                      <ha-icon-picker
                        label="Icon ON"
                        .value=${this._config.icon_on || ""}
                        configValue="icon_on"
                        @value-changed=${this._valueChanged}
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="Icon OFF"
                        .value=${this._config.icon_off || ""}
                        configValue="icon_off"
                        @value-changed=${this._valueChanged}
                      ></ha-icon-picker>
                    </div>
                  `
                : html`
                    <ha-icon-picker
                      label="Icon"
                      .value=${this._config.icon || ""}
                      configValue="icon"
                      @value-changed=${this._valueChanged}
                    ></ha-icon-picker>
                  `}
            `
          : ""}

        <div class="switch-row">
          <span class="switch-label"
            >${localize("google_button_card.toggle.title")}</span
          >
          <ha-switch
            .checked=${this._config.use_default_toggle}
            configValue="use_default_toggle"
            @change=${this._valueChanged}
          />
        </div>

        ${!this._config.use_default_toggle
          ? html`
              <div>
                <h3>Tap Action</h3>
                ${renderActionEditor(tapAction, (e: CustomEvent) =>
                  this._tapActionChanged(e)
                )}
              </div>

              <div>
                <h3>Hold Action</h3>
                ${renderActionEditor(
                  holdAction,
                  this._holdActionChanged.bind(this)
                )}
              </div>
            `
          : ""}
      </div>
    `;
  }*/

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
  `;
}

/*
  render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html``;
    }

    this._config.use_default_icon = this._config.use_default_icon ?? true;
    this._config.use_default_toggle = this._config.use_default_toggle ?? true;
    this._config.use_card_entity = this._config.use_card_entity ?? false;

    return html`
      <div class="form">
        <ha-textfield
          label="${localize("google_control_card.name")}"
          .value=${this._config.name || ""}
          configValue="name"
          @input=${this._valueChanged}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("google_control_card.entity_card")}</span
          >
          <ha-switch
            .checked=${this._config.use_card_entity ?? false}
            configValue="use_card_entity"
            @change=${this._valueChanged}
          />
        </div>

        ${this._config.use_card_entity
          ? html`<ha-entity-picker
              label="${localize("google_control_card.entity")}"
              .value=${this._config.entity || ""}
              .hass=${this.hass}
              .includeDomains=${["climate"]}
              allow-custom-entity
              configValue="entity"
              @value-changed=${this._entityChanged}
              required
            ></ha-entity-picker>`
          : html``}

        <div class="switch-row">
          <span class="switch-label"
            >${localize("google_control_card.dual_icon.default")}</span
          >
          <ha-switch
            .checked=${this._config.use_default_icon ?? true}
            configValue="use_default_icon"
            @change=${this._valueChanged}
          />
        </div>

        ${this._config.use_default_icon
          ? html``
          : html`
              <div class="switch-row">
                <span class="switch-label"
                  >${localize("google_control_card.dual_icon.options")}</span
                >
                <ha-switch
                  .checked=${this._config.dual_icon ?? false}
                  configValue="dual_icon"
                  @change=${this._valueChanged}
                />
              </div>

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
                  `}
            `}

        <div class="switch-row">
          <span class="switch-label"
            >${localize("google_button_card.toggle.title")}</span
          >
          <ha-switch
            .checked=${this._config.use_default_toggle ?? true}
            configValue="use_default_toggle"
            @change=${this._valueChanged}
          />
        </div>
        ${this._config.use_default_toggle
          ? html``
          : html`<ha-select
                label="${localize("google_button_card.toggle.press")}"
                .value=${this._config.tap_action || Action.CLICK}
                configValue="tap_action"
                @selected=${this._valueChanged}
                @closed=${(ev: Event) => ev.stopPropagation()}
              >
                <mwc-list-item value="${Action.CLICK}">
                  ${localize("google_button_card.toggle.click")}
                </mwc-list-item>
                <mwc-list-item value="${Action.HOLD}">
                  ${localize("google_button_card.toggle.info")}
                </mwc-list-item>
              </ha-select>

              ${this._config.use_default_toggle ? html`` : html``}

              <ha-select
                label="${localize("google_button_card.toggle.hold")}"
                .value=${this._config.hold_action || Action.HOLD}
                configValue="hold_action"
                @selected=${this._valueChanged}
                @closed=${(ev: Event) => ev.stopPropagation()}
              >
                <mwc-list-item value="${Action.CLICK}">
                  ${localize("google_button_card.toggle.click")}
                </mwc-list-item>
                <mwc-list-item value="${Action.HOLD}">
                  ${localize("google_button_card.toggle.info")}
                </mwc-list-item>
              </ha-select>`}
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
  `;
}*/

declare global {
  interface HTMLElementTagNameMap {
    "google-control-card-editor": GoogleControlCardConfig;
  }
}
