import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";
import { localize } from "../localize/localize";
import { _valueChanged } from "../shared/ha-editor";
import {
  DEFAULT_CONFIG,
  MaterialUsersCardConfig,
} from "./material-users-const";

@customElement("material-users-card-editor")
export class MaterialUsersCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: MaterialUsersCardConfig = DEFAULT_CONFIG;

  public setConfig(config: MaterialUsersCardConfig): void {
    this._config = { ...config };
  }

  render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html``;
    }

    return html`
      <div class="form">
        <div class="switch-row">
          <span class="switch-label"
            >${localize("material_users_card.user_title")}
            <div class="small-text">
              ${localize("material_users_card.user_description")}
            </div></span
          >
          <ha-switch
            .checked=${this._config.is_user_map_enabled ?? false}
            configValue="is_user_map_enabled"
            @change=${(ev: Event) => _valueChanged(ev, this)}
          />
        </div>
        <div class="switch-row">
          <span class="switch-label"
            >${localize("material_users_card.add_button_title")}
            <div class="small-text">
              ${localize("material_users_card.add_button_description")}
            </div></span
          >
          <ha-switch
            .checked=${this._config.is_add_button_enabled ?? false}
            configValue="is_add_button_enabled"
            @change=${(ev: Event) => _valueChanged(ev, this)}
          />
        </div>
      </div>
    `;
  }

  static styles = css`
    .form {
      display: flex;
      flex-direction: column;
      gap: 30px;
      padding: 16px;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .small-text {
      font-size: 0.9rem;
      color: gray;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "material-users-card-editor": MaterialUsersCardEditor;
  }
}
