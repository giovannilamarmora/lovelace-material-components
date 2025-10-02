import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { localize } from "../localize/localize";
import { HomeAssistant } from "../ha-types";
import {
  DEFAULT_CONFIG,
  GoogleClimateCardConfig,
} from "./google-climate-const";
import { fireEvent } from "custom-card-helpers";
import { applyRippleEffect } from "../animations";
import { google_color } from "../shared/color";
import { isDeviceOn, isNullOrEmpty, isOfflineState } from "../shared/utils";
import { getIcon, getName, mapStateDisplay } from "../shared/mapper";
import {
  adjustNewTempAuto,
  adjustTempAuto,
  setColorCard,
} from "./google-climate-mapper";

@customElement("google-climate-card")
export class GoogleClimateCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: GoogleClimateCardConfig = DEFAULT_CONFIG;
  private google_color_scheme: any = google_color;

  public setConfig(config: GoogleClimateCardConfig): void {
    if (!config || !config.entity) {
      throw new Error(localize("common.invalid_configuration"));
    }
    this._config = config;
  }

  public static getStubConfig(
    _hass: HomeAssistant
  ): Partial<GoogleClimateCardConfig> {
    const allEntities = Object.keys(_hass.states);
    const climates = allEntities
      .filter((entity) => entity.startsWith("climate."))
      .sort();

    const randomClimate = climates[Math.floor(Math.random() * climates.length)];

    return {
      type: "custom:google-climate-card",
      entity: randomClimate,
      increase_temp: 1,
      decrease_temp: 1,
      use_material_color: true,
      use_default_icon: true,
    };
  }

  static getCardSize() {
    return 1;
  }

  static async getConfigElement() {
    return document.createElement("google-climate-card-editor");
  }

  public _onClick(event: MouseEvent) {
    applyRippleEffect(event.currentTarget as HTMLElement, event);
    if (navigator.vibrate) {
      navigator.vibrate(60);
    }

    if (!this._config || !this.hass) return;

    const entityId = this._config.entity;

    fireEvent(this, "hass-more-info", { entityId });
  }

  private async _adjustTemp(delta: number): Promise<void> {
    if (navigator.vibrate) {
      navigator.vibrate(60);
    }
    if (!this.hass || !this._config?.entity) return;

    const stateObj = this.hass.states[this._config.entity];

    const current = Number(
      adjustTempAuto(
        this._config.fix_temperature!,
        stateObj.attributes.temperature
      )
    );
    if (isNaN(current)) return;

    const newTemp = adjustNewTempAuto(
      this._config.fix_temperature!,
      current + delta
    );

    this.hass.states[this._config.entity]!.attributes!.temperature! = newTemp;

    await this.hass.callService("climate", "set_temperature", {
      entity_id: this._config.entity,
      temperature: newTemp,
    });

    // Attendi un momento per permettere a HASS di aggiornare lo stato
    setTimeout(() => {
      this.requestUpdate(); // Forza il re-render manuale
    }, 500); // 500ms è solitamente sufficiente
  }

  private setColorCard(
    use_material_color: boolean,
    theme: string,
    isOffline: boolean,
    isOn: boolean,
    isConditioner: boolean
  ) {
    let nameColor = "";
    let iconColor = "";
    let adjustTemp = "";
    let internalTemp = "";
    let containerColor = "";
    if (isOffline) {
      // Offline, tema light
      if (theme === "light") {
        nameColor = iconColor =
          this.google_color_scheme.light.offline.climate.title;
        containerColor =
          this.google_color_scheme.light.offline.climate.background;
        //containerColor = "#dfdfe1";
      } else {
        // Offline, tema dark
        nameColor = iconColor =
          this.google_color_scheme.dark.offline.climate.title;
        containerColor =
          this.google_color_scheme.dark.offline.climate.background;
      }
    } else if (isOn) {
      // Acceso, tema dark
      if (theme === "dark") {
        if (use_material_color) {
          if (isConditioner) {
            nameColor =
              this.google_color_scheme.dark.on.climate.material_cool.title;
            iconColor =
              this.google_color_scheme.dark.on.climate.material_cool.icon;
            adjustTemp =
              this.google_color_scheme.dark.on.climate.material_cool.button;
            internalTemp =
              this.google_color_scheme.dark.on.climate.material_cool.subtitle;
            containerColor =
              this.google_color_scheme.dark.on.climate.material_cool.background;
          } else {
            nameColor = this.google_color_scheme.dark.on.climate.material.title;
            iconColor = this.google_color_scheme.dark.on.climate.material.icon;
            adjustTemp =
              this.google_color_scheme.dark.on.climate.material.button;
            internalTemp =
              this.google_color_scheme.dark.on.climate.material.subtitle;
            containerColor =
              this.google_color_scheme.dark.on.climate.material.background;
            //containerColor = "#5c4035";
          }
        } else {
          nameColor = iconColor =
            this.google_color_scheme.dark.on.climate.default.title;
          adjustTemp = this.google_color_scheme.dark.on.climate.default.button;
          internalTemp =
            this.google_color_scheme.dark.on.climate.default.subtitle;
          containerColor =
            this.google_color_scheme.dark.on.climate.default.background;
          //containerColor = "#414246";
        }
      } else {
        // Acceso, tema light
        if (use_material_color) {
          if (isConditioner) {
            nameColor =
              this.google_color_scheme.light.on.climate.material_cool.title;
            iconColor =
              this.google_color_scheme.light.on.climate.material_cool.icon;
            internalTemp =
              this.google_color_scheme.light.on.climate.material_cool.subtitle;
            adjustTemp =
              this.google_color_scheme.light.on.climate.material_cool.button;
            containerColor =
              this.google_color_scheme.light.on.climate.material_cool
                .background;
          } else {
            nameColor =
              this.google_color_scheme.light.on.climate.material.title;
            iconColor = this.google_color_scheme.light.on.climate.material.icon;
            internalTemp =
              this.google_color_scheme.light.on.climate.material.subtitle;
            adjustTemp =
              this.google_color_scheme.light.on.climate.material.button;
            containerColor =
              this.google_color_scheme.light.on.climate.material.background;
          }
        } else {
          nameColor =
            iconColor =
            internalTemp =
              this.google_color_scheme.light.on.climate.default.title;
          adjustTemp = this.google_color_scheme.light.on.climate.default.button;
          containerColor =
            this.google_color_scheme.light.on.climate.default.background;
        }
      }
    } else {
      // Spento, tema dark (Updated on 21/07/2025)
      if (theme === "dark") {
        nameColor =
          iconColor =
          internalTemp =
            this.google_color_scheme.dark.off.climate.default.title;
        adjustTemp = this.google_color_scheme.dark.off.climate.default.button;
        containerColor =
          this.google_color_scheme.dark.off.climate.default.background;
      } else {
        // Spento, tema light
        nameColor =
          iconColor =
          internalTemp =
            this.google_color_scheme.light.off.climate.default.title;
        adjustTemp = this.google_color_scheme.light.off.climate.default.button;
        containerColor =
          this.google_color_scheme.light.off.climate.default.background;
      }
    }

    this._setStyleProperty("--bsc-name-color", nameColor);
    this._setStyleProperty("--bsc-icon-color", iconColor);
    this._setStyleProperty("--bsc-adjustTemp-color", adjustTemp);
    this._setStyleProperty("--bsc-internalTemp-color", internalTemp);
    this._setStyleProperty("--bsc-background", containerColor);
  }

  _setStyleProperty(
    name: string,
    value: any,
    transform = (value: any): string => value
  ): void {
    if (value !== undefined && value !== null && value !== "") {
      this.style.setProperty(name, transform(value));
    }
  }

  protected render(): TemplateResult {
    if (!this._config || !this.hass) return html``;

    const stateObj = this.hass.states[this._config.entity!];
    if (!stateObj) {
      return html`<ha-card
        ><div class="warning">${localize("common.no_entity")}</div></ha-card
      >`;
    }

    const name = getName(this._config, this.hass);
    const isOffline = isOfflineState(stateObj.state);

    const stateDisplay = mapStateDisplay(
      stateObj,
      "thermometer",
      isOffline,
      this._config.fix_temperature,
      false,
      true
    );
    const theme = this.hass?.themes?.darkMode ? "dark" : "light";
    const isOn = isDeviceOn(stateObj.state);
    //const isConditioner = isAirConditioning(stateObj.attributes.hvac_modes);
    const isOffAndHasTemperature =
      !isOn && !isNullOrEmpty(stateObj.attributes.temperature);

    setColorCard(
      this.style,
      isOffline,
      isOn,
      theme,
      stateObj.state,
      this._config.use_material_color
    );

    //this.setColorCard(
    //  this._config.use_material_color,
    //  theme,
    //  isOffline,
    //  isOn,
    //  isConditioner
    //);

    const config = {
      control_type: "thermometer",
      icon: this._config.icon,
      use_default_icon: this._config.use_default_icon,
      dual_icon: this._config.dual_icon,
      icon_on: this._config.icon_on,
      icon_off: this._config.icon_off,
    };

    return html`
      <div class="temperature-card">
        <div class="header" @click=${this._onClick}>
          <div class="valve-info">
            <ha-icon
              id="icon_offline"
              icon="${getIcon(stateObj, config, this.hass)}"
              title="Climate"
              class="chevron"
              style="
                --mdc-icon-size: 20px;
                margin-top: -5px;
              "
            ></ha-icon>

            <span class="valve-name">${name}</span>
          </div>

          ${isOffline
            ? html`<ha-icon
                id="icon_offline"
                icon="m3rf:warning"
                style="position: absolute; right: 0px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color);"
                title="Offline"
              ></ha-icon>`
            : html`<ha-icon
                icon="m3rf:arrow-forward-ios"
                style="
                  position: absolute;
                  right: 0px;
                  top: 50%;
                  transform: translateY(-50%);
                  color: var(--bsc-icon-color);
                  --mdc-icon-size: 15px;
                "
                title="Enter"
                class="chevron"
              ></ha-icon> `}
        </div>
        ${isOffline
          ? html`
              <div class="temperature-control offline-control">
                <div class="temperature-display offline">Offline</div>
              </div>
            `
          : html`
              <div
                class="temperature-control"
                style="${isOn || isOffAndHasTemperature
                  ? "justify-content: space-between;"
                  : "justify-content: center;"}"
              >
                ${isOn || isOffAndHasTemperature
                  ? html`<button
                      class="control-btn minus-btn"
                      @click=${() =>
                        this._adjustTemp(
                          -this._config.decrease_temp |
                            -DEFAULT_CONFIG.decrease_temp
                        )}
                    >
                      −
                    </button>`
                  : html``}

                <div
                  class="temperature-display"
                  id="tempDisplay"
                  style="${isOn || isOffAndHasTemperature
                    ? ""
                    : "font-size: 65px; margin-bottom: 7px;"}"
                >
                  ${isOn || isOffAndHasTemperature
                    ? adjustTempAuto(
                        this._config.fix_temperature!,
                        stateObj.attributes.temperature
                      ) //this._config.fix_temperature
                    : //? stateObj.attributes.temperature * 5
                      //: stateObj.attributes.temperature
                      localize("common.off")}
                </div>
                ${isOn || isOffAndHasTemperature
                  ? html`<button
                      class="control-btn plus-btn"
                      @click=${() =>
                        this._adjustTemp(
                          this._config.decrease_temp |
                            DEFAULT_CONFIG.increase_temp
                        )}
                    >
                      +
                    </button>`
                  : html``}
              </div>

              <div class="internal-temp">
                <span id="internalTemp">${stateDisplay}</span>
              </div>
            `}
      </div>
    `;
  }

  static styles = css`
    .temperature-card {
      background: var(--bsc-background);
      border-radius: 28px;
      padding: 10px 15px;
      width: -webkit-fill-available;
      box-shadow: none;
      position: relative;
      overflow: hidden;
    }

    .temperature-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--bsc-background);
      border-radius: 24px;
      pointer-events: none;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 25px;
      position: relative;
      z-index: 2;
      pointer-events: visible;
      cursor: pointer;
      -webkit-user-select: none; /* Safari */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* IE10+/Edge */
      user-select: none; /* Standard */
    }

    .valve-info {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-top: 2px;
    }

    .steam-icon {
      color: #888;
      font-size: 20px;
    }

    .valve-name {
      color: var(--bsc-name-color);
      font-size: 16px;
      font-weight: 500;
    }

    .chevron {
      color: var(--bsc-icon-color);
      font-size: 20px;
      cursor: pointer;
      transition: color 0.2s ease;
    }

    .chevron:hover {
      color: #ccc;
    }

    .temperature-control {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
      position: relative;
      z-index: 2;
    }

    .control-btn {
      width: 80px;
      height: 55px;
      border-radius: 30px;
      background: var(--bsc-adjustTemp-color);
      border: none;
      color: var(--bsc-name-color);
      font-size: 32px;
      font-weight: 300;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px);
      -webkit-tap-highlight-color: transparent;
    }

    .control-btn:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: scale(1.05);
    }

    .control-btn:active {
      transform: scale(0.98);
    }

    .temperature-display {
      /* color: #c3c3c3; */
      color: var(--bsc-name-color);
      font-size: 72px;
      font-weight: 450;
      text-align: center;
      line-height: 1;
    }

    .internal-temp {
      text-align: center;
      color: var(--bsc-internalTemp-color);
      font-size: 15px;
      font-weight: 400;
      position: relative;
      z-index: 2;
      margin-bottom: 20px;
    }

    .offline {
      font-size: 65px;
    }

    .offline-control {
      justify-content: center;
      margin-bottom: 61px;
      margin-top: 30px;
    }

    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      transform: scale(0);
      animation: ripple 0.6s linear;
      pointer-events: none;
    }

    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }

    @media (max-width: 420px) {
      .valve-name,
      .state {
        font-size: 15px;
      }
      .valve-name {
        line-height: 1.4;
      }

      .temperature-display {
        font-size: 60px;
      }

      .control-btn {
        width: 65px;
        height: 45px;
        font-size: 28px;
      }

      .offline {
        font-size: 55px;
      }

      .offline-control {
        margin-bottom: 59px;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "google-climate-card": GoogleClimateCard;
  }
}
