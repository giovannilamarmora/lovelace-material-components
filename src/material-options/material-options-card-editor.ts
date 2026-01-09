import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";
import { localize } from "../localize/localize";
import {
  _entityChanged,
  _valueChanged,
  removeConfigField,
  toggleWithSetter,
} from "../shared/ha-editor";
import {
  DEFAULT_CONFIG,
  MaterialOptionsCardConfig,
} from "./material-options-const";
import { OptionType } from "../shared/types";

@customElement("material-options-card-editor")
export class MaterialOptionsCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: MaterialOptionsCardConfig = DEFAULT_CONFIG;

  /** Properties used in the editor */
  @state() private use_card_entity = false;
  @state() private use_default_icon = true;

  public setConfig(config: MaterialOptionsCardConfig): void {
    this._config = { ...config };
  }

  async firstUpdated() {
    const helpers = await (window as any).loadCardHelpers();
    const card = await helpers.createCardElement({
      type: "entities",
      entities: [],
    });
    await card.constructor.getConfigElement();
    // Initialize editor properties based on config
    this.use_card_entity = !!this._config.entity;
    this.use_default_icon =
      this._config.icon || this._config.dual_icon ? false : true;
  }

  render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html``;
    }

    return html`
      <div class="form">
        <ha-select
          label="${localize("material_options_card.options_type")}"
          .value=${this._config.options_type ?? OptionType.OPTIONS}
          configValue="options_type"
          @selected=${(ev: Event) => _valueChanged(ev, this)}
          @closed=${(ev: Event) => ev.stopPropagation()}
        >
          <mwc-list-item value="options">
            ${localize("material_options_card.type.options")}
          </mwc-list-item>
          <!--<mwc-list-item value="thermometer">
            ${localize("material_button_card.type.thermometer")}
          </mwc-list-item>
          <mwc-list-item value="automation">
            ${localize("material_button_card.type.automation")}
          </mwc-list-item>
          <mwc-list-item value="scene">
            ${localize("material_button_card.type.scene")}
          </mwc-list-item>
          <mwc-list-item value="media_player">
            ${localize("material_button_card.type.media")}
          </mwc-list-item>
          <mwc-list-item value="state">
            ${localize("material_button_card.type.state")}
          </mwc-list-item>
          <mwc-list-item value="action">
            ${localize("material_button_card.type.action")}
          </mwc-list-item>
          <mwc-list-item value="app_version">
            ${localize("material_button_card.type.app_version")}
          </mwc-list-item>-->
        </ha-select>

        <ha-textfield
          label="${localize("shared_options.name")}"
          .value=${this._config.name || ""}
          configValue="name"
          @input=${(ev: Event) => _valueChanged(ev, this)}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <ha-textfield
          label="${localize("shared_options.subtitle")}"
          .value=${this._config.subtitle || ""}
          configValue="subtitle"
          @input=${(ev: Event) => _valueChanged(ev, this)}
          placeholder="e.g. Open options"
        ></ha-textfield>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("shared_options.entity_card")}</span
          >
          <ha-switch
            .checked=${this.use_card_entity}
            @change=${(ev: Event) => {
              toggleWithSetter(ev, (v) => (this.use_card_entity = v));
              if (!this.use_card_entity) {
                this.use_default_icon = true;
                removeConfigField("entity", this._config, this);
                removeConfigField("dual_icon", this._config, this);
                removeConfigField("icon_on", this._config, this);
                removeConfigField("icon_off", this._config, this);
                removeConfigField("show_entity_options", this._config, this);
              } else {
                removeConfigField("icon", this._config, this);
              }
            }}
          ></ha-switch>
        </div>

        ${this.use_card_entity
          ? html` <ha-entity-picker
                label="${localize("shared_options.entity")}"
                .value=${this._config.entity || ""}
                .hass=${this.hass}
                allow-custom-entity
                configValue="entity"
                @value-changed=${(ev: CustomEvent) => _entityChanged(ev, this)}
              ></ha-entity-picker>
              <div class="switch-row">
                <span class="switch-label"
                  >${localize("shared_options.dual_icon.default")}</span
                >
                <ha-switch
                  .checked=${this.use_default_icon}
                  configValue="use_default_icon"
                  @change=${(ev: Event) => {
                    toggleWithSetter(ev, (v) => (this.use_default_icon = v));
                    // Remove icon fields when toggling use_default_icon
                    if (this.use_default_icon) {
                      removeConfigField("icon", this._config, this);
                      removeConfigField("dual_icon", this._config, this);
                      removeConfigField("icon_on", this._config, this);
                      removeConfigField("icon_off", this._config, this);
                    }
                  }}
                />
              </div>`
          : ""}
        ${!this.use_default_icon
          ? html`
              <div class="switch-row">
                <span class="switch-label"
                  >${localize("shared_options.dual_icon.options")}</span
                >
                <ha-switch
                  .checked=${this._config.dual_icon ?? false}
                  configValue="dual_icon"
                  @change=${(ev: Event) => {
                    _valueChanged(ev, this);
                    // Remove icon fields when toggling dual_icon
                    if (this._config.dual_icon) {
                      removeConfigField("icon", this._config, this);
                    } else {
                      removeConfigField("dual_icon", this._config, this);
                    }
                  }}
                />
              </div>
              ${this._config.dual_icon
                ? html`
                    <div class="dual-icons">
                      <ha-icon-picker
                        label="${localize("shared_options.dual_icon.icon_on")}"
                        .value=${this._config.icon_on || ""}
                        configValue="icon_on"
                        @value-changed=${(ev: Event) => _valueChanged(ev, this)}
                      ></ha-icon-picker>
                      <ha-icon-picker
                        label="${localize("shared_options.dual_icon.icon_off")}"
                        .value=${this._config.icon_off || ""}
                        configValue="icon_off"
                        @value-changed=${(ev: Event) => _valueChanged(ev, this)}
                      ></ha-icon-picker>
                    </div>
                  `
                : html`
                    <ha-icon-picker
                      label="${localize("shared_options.dual_icon.icon")}"
                      .value=${this._config.icon || ""}
                      configValue="icon"
                      @value-changed=${(ev: Event) => _valueChanged(ev, this)}
                    ></ha-icon-picker>
                  `}
            `
          : ""}
        ${!this.use_card_entity
          ? html`
        <ha-icon-picker
          label="${localize("shared_options.dual_icon.icon")}"
          .value=${this._config.icon || ""}
          configValue="icon"
          @value-changed=${(ev: Event) => _valueChanged(ev, this)}
        ></ha-icon-picker>
      </div>`
          : ""}

        <div class="switch-row">
          <span class="switch-label"
            >${localize("material_options_card.large_buttons")}</span
          >
          <ha-switch
            .checked=${this._config.large_buttons ?? false}
            configValue="large_buttons"
            @change=${(ev: Event) => {
              _valueChanged(ev, this);
            }}
          />
        </div>

        ${this.use_card_entity
          ? html` <div class="switch-row">
              <span class="switch-label"
                >${localize("material_options_card.show_entity_options")}</span
              >
              <ha-switch
                .checked=${this._config.show_entity_options ?? false}
                configValue="show_entity_options"
                @change=${(ev: Event) => {
                  _valueChanged(ev, this);
                }}
              />
            </div>`
          : ""}
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

    .dual-icons {
      display: flex;
      gap: 16px;
    }

    .dual-icons ha-icon-input {
      flex: 1;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "material-options-card-editor": MaterialOptionsCardEditor;
  }
}
