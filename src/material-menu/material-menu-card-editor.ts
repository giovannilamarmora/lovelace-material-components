import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  ActionConfig,
  HomeAssistant,
  LovelaceCardEditor,
} from "custom-card-helpers";
import { DEFAULT_CONFIG, MaterialMenuCardConfig } from "./material-menu-const";
import { localize } from "../localize/localize";

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

  private _valueChanged(ev: CustomEvent) {
    const target = ev.target as any;
    const configValue = target?.getAttribute("configValue");
    const value =
      ev.detail?.value !== undefined
        ? ev.detail.value
        : (target.checked ?? target.value);

    if (!configValue || this._config[configValue] === value) return;
    this._config = { ...this._config, [configValue]: value };
    this._fireConfigChanged();
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
          @input=${this._valueChanged}
        ></ha-textfield>

        <ha-textfield
          label="Label"
          .value=${this._config.label || ""}
          configValue="label"
          @input=${this._valueChanged}
        ></ha-textfield>

        <ha-icon-picker
          label="Icon"
          .value=${this._config.icon || ""}
          configValue="icon"
          @value-changed=${this._valueChanged}
        ></ha-icon-picker>

        <div class="warning">${localize("actions.warning")}</div>

        <h3 style="margin: 15px 0px 0px 0px;">
          ${localize("actions.tap_action_title")}
        </h3>
        ${this._renderActionSection("tap_action", this._config.tap_action)}
        <h3 style="margin: 15px 0px 0px 0px;">
          ${localize("actions.hold_action_title")}
        </h3>
        ${this._renderActionSection("hold_action", this._config.hold_action)}
        <h3 style="margin: 15px 0px 0px 0px;">
          ${localize("actions.double_tap_action_title")}
        </h3>
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
        <mwc-list-item value="call-service">
          ${localize("actions.call_service")}
        </mwc-list-item>
        <!--<mwc-list-item value="assist">
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
    const act = action as Record<string, any>;

    switch (actionType) {
      case "navigate":
        return html`
          <ha-textfield
            label="Navigation path"
            .value=${act.navigation_path || "./"}
            @input=${(e: Event) =>
              onChange("navigation_path", (e.target as HTMLInputElement).value)}
          ></ha-textfield>
        `;
      case "url":
        return html`
          <ha-textfield
            label="URL"
            .value=${act.url_path || ""}
            @input=${(e: Event) =>
              onChange("url_path", (e.target as HTMLInputElement).value)}
          ></ha-textfield>
        `;
      case "call-service":
        return html`
          <ha-textfield
            label="Service (es. light.toggle)"
            .value=${act.service || ""}
            @input=${(e: Event) =>
              onChange("service", (e.target as HTMLInputElement).value)}
          ></ha-textfield>
          <ha-textarea
            label="Service data (YAML)"
            .value=${act.service_data || ""}
            @input=${(e: Event) =>
              onChange("service_data", (e.target as HTMLInputElement).value)}
          ></ha-textarea>
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
