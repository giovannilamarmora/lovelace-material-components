import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  ActionConfig,
  HomeAssistant,
  LovelaceCardEditor,
  NavigateActionConfig,
  UrlActionConfig,
} from "custom-card-helpers";
import { DEFAULT_CONFIG, MaterialMenuCardConfig } from "./material-menu-const";
import { localize } from "../localize/localize";
import { _valueChanged } from "../shared/ha-editor";

@customElement("material-menu-card-editor")
export class MaterialMenuCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: MaterialMenuCardConfig = DEFAULT_CONFIG;
  @state() private _configLoaded = false;

  public setConfig(config: MaterialMenuCardConfig): void {
    this._config = { ...DEFAULT_CONFIG, ...config };
    this._configLoaded = true;
  }

  private _fireConfigChanged() {
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: this._config },
      })
    );
  }

  render(): TemplateResult {
    if (!this._config || !this.hass) return html``;

    return html`
      <div class="form">
        <ha-textfield
          label="Name"
          .value=${this._config.name || ""}
          configValue="name"
          @input=${(ev: Event) => _valueChanged(ev, this)}
        ></ha-textfield>

        <ha-textfield
          label="Label"
          .value=${this._config.label || ""}
          configValue="label"
          @input=${(ev: Event) => _valueChanged(ev, this)}
        ></ha-textfield>

        <ha-icon-picker
          label="Icon"
          .value=${this._config.icon || ""}
          configValue="icon"
          @value-changed=${(ev: Event) => _valueChanged(ev, this)}
        ></ha-icon-picker>

        <div class="warning">${localize("actions.warning")}</div>

        <h4 style="margin: 15px 0px -5px 0px;">
          ${localize("actions.tap_action_title")}
        </h4>
        ${this._renderActionSection("tap_action", this._config.tap_action)}
        <h4 style="margin: 15px 0px -5px 0px;">
          ${localize("actions.hold_action_title")}
        </h4>
        ${this._renderActionSection("hold_action", this._config.hold_action)}
        <h4 style="margin: 15px 0px -5px 0px;">
          ${localize("actions.double_tap_action_title")}
        </h4>
        ${this._renderActionSection(
          "double_tap_action",
          this._config.double_tap_action
        )}
      </div>
    `;
  }

  private _renderActionSection(
    type: "tap_action" | "hold_action" | "double_tap_action",
    action: ActionConfig | undefined
  ) {
    return this._renderActionEditor(action, (key, value) =>
      this._actionChanged(type, key, value)
    );
  }

  private _actionChanged(
    type: "tap_action" | "hold_action" | "double_tap_action",
    key: string,
    value: any
  ) {
    if (!this._configLoaded) return;
    const action: Record<string, any> = { ...(this._config[type] || {}) };

    action[key] = value;
    this._config = { ...this._config, [type]: action };
    this._fireConfigChanged();
  }

  private _renderActionEditor(
    action: ActionConfig | undefined,
    onChange: (key: string, value: any) => void
  ) {
    const currentAction = (action as any)?.action ?? "none";

    return html`
      <ha-select
        label=${localize("actions.select_option")}
        .value=${currentAction}
        @selected=${(e: CustomEvent) =>
          onChange("action", (e.target as HTMLInputElement).value)}
        @closed=${(ev: Event) => ev.stopPropagation()}
      >
        <mwc-list-item value="toggle">
          ${localize("actions.toggle")}
        </mwc-list-item>
        <mwc-list-item value="more-info">
          ${localize("actions.more_info")}
        </mwc-list-item>
        <mwc-list-item value="none">
          ${localize("actions.none")}
        </mwc-list-item>
        <mwc-list-item value="navigate">
          ${localize("actions.navigate")}
        </mwc-list-item>
        <mwc-list-item value="url"> ${localize("actions.url")} </mwc-list-item>
        <!--<mwc-list-item value="call-service">
          ${localize("actions.call_service")}
        </mwc-list-item>
        <mwc-list-item value="assist">
          ${localize("actions.assist")}
        </mwc-list-item>
        <mwc-list-item value="fire-dom-event">
          ${localize("actions.fire_dom")}
        </mwc-list-item>-->
        <mwc-list-item value="google-home">
          ${localize("actions.google_home")}
        </mwc-list-item>
        <mwc-list-item value="settings">
          ${localize("actions.settings")}
        </mwc-list-item>
      </ha-select>

      ${this._renderActionFields(currentAction, action, onChange)}
    `;
  }

  private _renderActionFields(
    actionType: string,
    action: ActionConfig | undefined,
    onChange: (key: string, value: any) => void
  ) {
    //const act = action as Record<string, any>;

    switch (actionType) {
      case "navigate":
        return html`
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
        `;
      case "url":
        return html`
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
        `;
      default:
        return html``;
    }
  }

  static styles = css`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }
    ha-select,
    ha-textfield,
    ha-textarea {
      width: 100%;
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
    "material-menu-card-editor": MaterialMenuCardEditor;
  }
}
