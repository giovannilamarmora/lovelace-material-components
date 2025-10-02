import { SlideGesture } from "@nicufarmache/slide-gesture";
import { HassEntity } from "home-assistant-js-websocket";
import { HomeAssistant } from "../ha-types";
import type { GoogleSliderCardConfig, MousePos } from "./types";
import { DEFAULT_CONFIG, TAP_THRESHOLD } from "./const";
import { localize } from "../localize/localize";
import { state } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { LitElement, html, CSSResult, TemplateResult, css } from "lit";
import { applyRippleEffect } from "../animations";
import { google_color } from "../shared/color";
import { setSliderColor } from "./google-slider-mapper";
import { ControlType } from "../google-button/google-button-const";
import {
  isDeviceOn,
  isOfflineState,
  OffStates,
  OnStates,
} from "../shared/utils";
import { getIcon } from "../shared/mapper";

export class GoogleSliderCard extends LitElement {
  // @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: GoogleSliderCardConfig = DEFAULT_CONFIG;
  @state() private _entity?: string;
  @state() private _state?: HassEntity;
  @state() private _status?: string;
  @state() private _name: string = "";
  private _hass?: HomeAssistant;
  private mouseStartPos: MousePos = { x: 0, y: 0 };
  private mousePos: MousePos = { x: 0, y: 0 };
  private containerWidth: number = 0;
  private oldValue: number = 0;
  private currentValue: number = 0;
  private holdTimer: number = 0;
  private isHold: boolean = false;
  private _shouldUpdate: boolean = true;
  private updateTimeout: number = 0;
  private pressTimeout: number = 0;
  private trackingStartTime: number = 0;
  private slideGesture: any;
  private isTap: boolean = false;
  private _lastTheme?: string;
  private _lastEntityState?: string;
  private color: any = google_color;

  public static getStubConfig(
    _hass: HomeAssistant
  ): Partial<GoogleSliderCardConfig> {
    const allEntities = Object.keys(_hass.states);
    const lights = allEntities
      .filter((entity) => entity.startsWith("light."))
      .sort();

    const randomLight = lights[Math.floor(Math.random() * lights.length)];

    return {
      type: "custom:google-slider-card",
      entity: randomLight,
      icon: "m3of:lightbulb",
      show_percentage: true,
      bold_text: false,
    };
  }

  static getCardSize() {
    return 1;
  }

  static async getConfigElement() {
    return document.createElement("google-slider-card-editor");
  }

  // life cycle

  public setConfig(config: Partial<GoogleSliderCardConfig>): void {
    if (!config) {
      throw new Error(localize("common.invalid_configuration"));
    }

    if (!config.entity) {
      throw new Error(localize("common.no_entity_set"));
    }

    const domain = config.entity.split(".")[0];
    if (
      (config.control_type === ControlType.LIGHT && domain !== "light") ||
      (config.control_type === ControlType.COVER && domain !== "cover")
    ) {
      throw new Error(
        `Entity must match the selected control type (${config.control_type})`
      );
    }

    const finalConfig: GoogleSliderCardConfig = {
      ...DEFAULT_CONFIG,
      ...config,
    };

    // fallback automatici
    if (!finalConfig.attribute) {
      if (finalConfig.control_type === ControlType.LIGHT) {
        finalConfig.attribute = "brightness";
      } else if (finalConfig.control_type === ControlType.COVER) {
        finalConfig.attribute = "current_position";
      }
    }

    this._config = finalConfig;
    this._entity = this._config.entity;
    this._config.original_min = this._config.min;
    this._config.original_max = this._config.max;
  }

  set hass(hass: HomeAssistant) {
    if (!this._entity) return;

    this._hass = hass;
    this._state = hass.states[this._entity];
    this._status = this._state?.state;

    if (this._config.control_type === ControlType.LIGHT) {
      this.currentValue = this._state?.attributes?.brightness ?? 0;
    } else if (this._config.control_type === ControlType.COVER) {
      this.currentValue = this._state?.attributes?.current_position ?? 0;
    }

    this._name =
      this._config.name ??
      this._state?.attributes?.friendly_name ??
      this._entity.split(".")[1] ??
      "";

    const currentTheme = hass.themes?.darkMode ? "dark" : "light";
    const currentEntityState = hass.states[this._entity]?.state;
    if (
      this._lastTheme !== currentTheme ||
      this._lastEntityState !== currentEntityState
    ) {
      this._lastTheme = currentTheme;
      this._lastEntityState = currentEntityState;
      this.requestUpdate(); // forza il re-render se cambia qualcosa
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener("contextmenu", this._handleContextMenu);
    this.slideGesture = new SlideGesture(this, this._handlePointer.bind(this), {
      touchActions: "pan-y",
      stopScrollDirection: "horizontal",
    });
  }

  disconnectedCallback(): void {
    this.removeEventListener("contextmenu", this._handleContextMenu);
    this.slideGesture.removeListeners();
    super.disconnectedCallback();
  }

  _handleContextMenu = (e: Event): boolean => {
    if (e.preventDefault) {
      e.preventDefault();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    return false;
  };

  _handlePointer = (evt, extra): void => {
    this.mousePos = { x: evt.pageX, y: evt.pageY };
    const minSlideTime = this._config.min_slide_time;

    if (evt.type === "pointerdown") {
      this._press();
      this.isTap = true;
      this.isHold = false;
      this.holdTimer = window.setTimeout(this._setHold, this._config.hold_time);
      this.trackingStartTime = Date.now();
      this._resetTrack();
    }

    if (["pointerdown", "pointermove", "pointerup"].includes(evt.type)) {
      this._updateValue();
    }

    if (evt.type === "pointermove") {
      if (
        this.isTap &&
        Math.abs(extra.relativeX) < TAP_THRESHOLD &&
        Math.abs(extra.relativeY) < TAP_THRESHOLD
      )
        return;
      this.isTap = false;
      clearTimeout(this.holdTimer);
      this._stopUpdates();
    }

    if (evt.type === "pointercancel") {
      clearTimeout(this.holdTimer);
      this._unpress();
      this._startUpdates();
    }

    if (evt.type === "pointerup") {
      clearTimeout(this.holdTimer);
      this._unpress();
      this._startUpdates();

      if (this.isTap) {
        this._handleTap();
        return;
      }

      if (Date.now() - this.trackingStartTime > minSlideTime) {
        this._setValue();
        this._startUpdates(true);
      }
    }
  };

  _updateValue(): void {
    const width = this.containerWidth;
    const dx = this.mousePos.x - this.mouseStartPos.x;

    const percentage = Math.round((100 * dx) / width);

    this.currentValue = this.oldValue + percentage;
    this._checklimits();
    this._updateSlider();
  }

  private _handleAction(action: any): void {
    const event = new Event("hass-action", {
      bubbles: true,
      cancelable: false,
      composed: true,
    });
    (event as any).detail = {
      config: this._config!,
      action: action,
    };
    this.dispatchEvent(event);
  }

  _setHold = (): void => {
    this.isTap = false;
    this.isHold = true;
    this._handleAction("hold");
  };

  _handleTap = (): void => {
    clearTimeout(this.holdTimer);
    if (this._config?.tap_action) {
      if (!this.isHold) {
        this._handleAction("tap");
      }
    }
  };

  _resetTrack(): void {
    this.mouseStartPos = { x: this.mousePos.x, y: this.mousePos.y };
    this.oldValue = this.currentValue;
  }

  _press(): void {
    if (this.pressTimeout) clearTimeout(this.pressTimeout);
    this.pressTimeout = window.setTimeout(
      () => this.setAttribute("pressed", ""),
      this._config.min_slide_time
    );
    this.setAttribute("half-pressed", "");
  }

  _unpress(): void {
    if (this.pressTimeout) clearTimeout(this.pressTimeout);
    this.removeAttribute("pressed");
    this.removeAttribute("half-pressed");
  }

  _checklimits(): void {
    const min = this._config.min ?? 0;
    const max = this._config.max ?? 100;
    if (this.currentValue < min) {
      this.currentValue = min;
      this._resetTrack();
    }
    if (this.currentValue > max) {
      this.currentValue = max;
      this._resetTrack();
    }
  }

  _updateSlider(): void {
    this.style.setProperty("--bsc-percent", this.currentValue + "%");
    const percentage = this?.shadowRoot?.getElementById("percentage");
    if (this._state && this._state.attributes.brightness)
      percentage &&
        (percentage.innerText = Math.round(this.currentValue) + "%");
    else if (
      this._config.control_type == ControlType.COVER &&
      this._state &&
      this._state.attributes.current_position
    )
      percentage &&
        (percentage.innerText =
          localize("common.open") +
          " • " +
          Math.round(this.currentValue) +
          "%");
    else percentage && (percentage.innerText = localize("common.on"));
  }

  _updateColors(): void {
    let color = "var(--bsc-color)";
    let brightness = "0%";
    let brightnessUI = "50%";
    let isOn = false;

    if (this._state) {
      if (this._status == OnStates.ON) {
        const stateColor = this._state.attributes?.rgb_color ?? [255, 255, 255];
        const stateBrightness = this._state.attributes?.brightness ?? 255;
        isOn = true;
        if (stateColor) {
          color = `rgb(${stateColor.join(",")})`;
        }
        if (stateBrightness) {
          brightness = `${Math.ceil((100 * stateBrightness) / 255)}%`;
          brightnessUI = `${Math.ceil((100 * stateBrightness) / 510 + 50)}%`;
        }
      } else if (this._status == OnStates.OPEN) {
        isOn = true;
      } else {
        color = "var(--bsc-off-color)";
      }
    }

    const percentage = this?.shadowRoot?.getElementById("percentage");
    if (!isOn) {
      //const isOffline = this._status != "on" && this._status != "off";
      const isOffline = isOfflineState(this._status!);
      if (!isOffline) {
        if (this._status == OffStates.OFF)
          percentage && (percentage.innerText = localize("common.off"));
        if (this._status == OffStates.CLOSED)
          percentage && (percentage.innerText = localize("common.closed"));
      } else percentage && (percentage.innerText = localize("common.offline"));
    }
    this.style.setProperty("--bsc-entity-color", color);
    this.style.setProperty("--bsc-brightness", brightness);
    this.style.setProperty("--bsc-brightness-ui", brightnessUI);
    if (this._config.icon_color && isOn) {
      this.style.setProperty("--bsc-icon-color", this._config.icon_color);
    }
    if (this._config.icon_color && !isOn) {
      this.style.removeProperty("--bsc-icon-color");
    }
  }

  _getValue(): void {
    if (!this._shouldUpdate) return;
    if (!this._state) return;

    // Se è una cover → leggiamo direttamente la posizione
    if (this._config.control_type === ControlType.COVER) {
      this._config.min = 0;
      this._config.max = 100;

      if (this._status == "unavailable") {
        this.currentValue = 0;
        this.style.setProperty("--bsc-opacity", "0.5");
      } else {
        this.style.removeProperty("--bsc-opacity");
        this.currentValue = this._state.attributes.current_position ?? 0;
      }

      this._updateSlider();
      return;
    }

    // Default → gestione light
    const attr = this._config?.attribute;
    let _value = 0;

    if (this._status == "unavailable") {
      this._config.min = 0;
      this._config.max = 0;
      this.style.setProperty("--bsc-opacity", "0.5");
    } else {
      this._config.min = this._config.original_min;
      this._config.max = this._config.original_max;
      this.style.removeProperty("--bsc-opacity");
    }

    if (this._status != "on") {
      _value = this._config.min ?? 0;
    } else {
      switch (attr) {
        case "brightness":
          _value = Math.round(
            (100 * (this._state.attributes.brightness ?? 255)) / 255
          );
          break;
        case "red":
        case "green":
        case "blue":
          const rgb = this._state.attributes.rgb_color ?? [255, 255, 255];
          if (attr === "red") _value = rgb[0];
          if (attr === "green") _value = rgb[1];
          if (attr === "blue") _value = rgb[2];
          _value = Math.ceil((100 * _value) / 255);
          break;
        case "hue":
        case "saturation":
          const hs = this._state.attributes.hs_color ?? [100, 100];
          if (attr === "hue") _value = hs[0];
          if (attr === "saturation") _value = hs[1];
          break;
      }
    }

    this.currentValue = _value;
    this._updateSlider();
  }

  _setValue(): void {
    if (!this._state) return;

    // Se è una cover → gestiamo direttamente la posizione
    if (this._config.control_type === ControlType.COVER) {
      this._hass!.callService("cover", "set_cover_position", {
        entity_id: this._state.entity_id,
        position: this.currentValue,
      });
      return;
    }

    // Default: gestione light
    let value = this.currentValue;
    let attr = this._config?.attribute ?? "brightness";

    let on = true;
    let _value;
    switch (attr) {
      case "brightness":
        value = Math.ceil((value / 100.0) * 255);
        if (!value) on = false;
        break;
      case "red":
      case "green":
      case "blue":
        _value = this._state.attributes.rgb_color ?? [255, 255, 255];
        if (attr === "red") _value[0] = value;
        if (attr === "green") _value[1] = value;
        if (attr === "blue") _value[2] = value;
        value = _value;
        attr = "rgb_color";
        break;
      case "hue":
      case "saturation":
        _value = this._state.attributes.hs_color ?? [100, 100];
        if (attr === "hue") _value[0] = value;
        if (attr === "saturation") _value[1] = value;
        value = _value;
        attr = "hs_color";
        break;
    }

    const params: Record<string, any> = {
      entity_id: this._state.entity_id,
    };

    if (on) {
      params[attr] = value;
      if (this._config.transition) {
        params.transition = this._config.transition;
      }
      this._hass!.callService("light", "turn_on", params);
    } else {
      this._hass!.callService("light", "turn_off", params);
    }
  }

  _stopUpdates(): void {
    if (this.updateTimeout) clearTimeout(this.updateTimeout);
    if (!this._shouldUpdate) return;
    this.shadowRoot?.getElementById("slider")?.classList?.remove("animate");
    this._shouldUpdate = false;
  }

  _startUpdates(settle = false): void {
    if (this.updateTimeout) clearTimeout(this.updateTimeout);
    this.updateTimeout = window.setTimeout(
      () => {
        this._shouldUpdate = true;
        this.shadowRoot?.getElementById("slider")?.classList?.add("animate");
        this.requestUpdate();
      },
      settle ? this._config.settle_time : 0
    );
  }

  public _onClick(event: MouseEvent) {
    applyRippleEffect(event.currentTarget as HTMLElement, event);
  }

  protected updated(): void {
    this.containerWidth =
      this.shadowRoot?.getElementById("container")?.clientWidth ?? 0;
    this._getValue();
    this._updateColors();
  }

  protected render(): TemplateResult | void {
    if (!(this._entity && this._entity in (this._hass?.states ?? {}))) {
      return this._showError(
        `${localize("common.no_entity")}: ${this._entity}`
      );
    }

    const colorize = (this._config.colorize && true) ?? false;
    const showPercentage = (this._config.show_percentage && true) ?? false;
    const boldText = (this._config.bold_text && true) ?? false;

    const state = this._hass?.states?.[this._entity];
    // const isOffline = state?.state != "on" && state?.state != "off";
    const isOffline = isOfflineState(state!.state);
    const theme = this._hass?.themes?.darkMode ? "dark" : "light";

    //const isOn = state?.state === "on";
    const isOn = isDeviceOn(state!.state);

    setSliderColor(
      this._config,
      isOffline,
      theme,
      isOn,
      this.color,
      this.style
    );

    // Stili dinamici basati su stato entità e tema
    //let nameColor = "";
    //let iconColor = "";
    //let percentageColor = "";
    //let sliderColor = "";
    //let containerColor = "";
    //const nameMargin = "-20px";
    //const iconMargin = "-10px";
    //const percentageMargin = "-20px";
    //
    //if (isOffline) {
    //  // Offline, tema light
    //  if (theme === "light") {
    //    nameColor = this.color.light.offline.light.title;
    //    iconColor = this.color.light.offline.light.icon;
    //    percentageColor = this.color.light.offline.light.percentage;
    //    sliderColor = this.color.light.offline.light.slider;
    //    containerColor = this.color.light.offline.light.background;
    //    // Offline, tema dark
    //  } else {
    //    nameColor = this.color.dark.offline.light.title;
    //    iconColor = this.color.dark.offline.light.icon;
    //    percentageColor = this.color.dark.offline.light.percentage;
    //    sliderColor = this.color.dark.offline.light.slider;
    //    containerColor = this.color.dark.offline.light.background;
    //  }
    //} else if (isOn) {
    //  // Acceso, tema dark
    //  if (theme === "dark") {
    //    nameColor = this.color.dark.on.light.title;
    //    iconColor = this.color.dark.on.light.icon;
    //    percentageColor = this.color.dark.on.light.percentage;
    //    sliderColor = this.color.dark.on.light.slider;
    //    containerColor = this.color.dark.on.light.background;
    //    // Acceso, tema light
    //  } else {
    //    nameColor = this.color.light.on.light.title;
    //    iconColor = this.color.light.on.light.icon;
    //    percentageColor = this.color.light.on.light.percentage;
    //    sliderColor = this.color.light.on.light.slider;
    //    containerColor = this.color.light.on.light.background;
    //  }
    //} else {
    //  // Spento, tema dark
    //  if (theme === "dark") {
    //    nameColor = this.color.dark.off.light.title;
    //    iconColor = this.color.dark.off.light.icon;
    //    percentageColor = this.color.dark.off.light.percentage;
    //    sliderColor = this.color.dark.off.light.slider;
    //    containerColor = this.color.dark.off.light.background;
    //  } else {
    //    nameColor = this.color.light.off.light.title;
    //    iconColor = this.color.light.off.light.icon;
    //    percentageColor = this.color.light.off.light.percentage;
    //    sliderColor = this.color.light.off.light.slider;
    //    containerColor = this.color.light.off.light.background;
    //  }
    //}
    //
    //this._setStyleProperty("--bsc-name-color", nameColor);
    //this._setStyleProperty("--bsc-icon-color", iconColor);
    //this._setStyleProperty("--bsc-percentage-color", percentageColor);
    //this._setStyleProperty("--bsc-slider-color", sliderColor);
    //this._setStyleProperty("--bsc-background", containerColor);
    //this._setStyleProperty("--bsc-name-margin", nameMargin);
    //this._setStyleProperty("--bsc-icon-margin", iconMargin);
    //this._setStyleProperty("--bsc-percentage-margin", percentageMargin);
    //
    //// Altri stili
    //this._setStyleProperty("--bsc-primary-text-color", this._config.text_color);
    //this._setStyleProperty("--bsc-border-color", this._config.border_color);
    //this._setStyleProperty("--bsc-border-radius", this._config.border_radius);
    //this._setStyleProperty("--bsc-border-style", this._config.border_style);
    //this._setStyleProperty("--bsc-border-width", this._config.border_width);
    //this._setStyleProperty(
    //  "--bsc-height",
    //  this._config.height,
    //  (h) => `${h}px`
    //);

    const iconName = getIcon(state, this._config, this.hass);

    //let iconName =
    //  this._config.control_type == ControlType.LIGHT
    //    ? this._config.icon == undefined ||
    //      this._config.icon === "m3of:lightbulb" ||
    //      this._config.icon === "m3r:lightbulb"
    //      ? isOn
    //        ? "m3of:lightbulb"
    //        : "m3r:lightbulb"
    //      : this._config.icon
    //    : this._config.icon == undefined
    //      ? isOn
    //        ? "m3rf:blinds"
    //        : "m3rf:blinds-closed"
    //      : this._config.icon;
    //
    //// 🟢 Supporto template stile [[[ ... ]]]
    //if (
    //  typeof this._config.icon === "string" &&
    //  this._config.icon.trim().startsWith("[[[") &&
    //  this._config.icon.trim().endsWith("]]]")
    //) {
    //  try {
    //    const code = this._config.icon.trim().slice(3, -3); // rimuove [[[ e ]]]
    //    const fn = new Function("entity", "state", "hass", code);
    //    const result = fn(state, state?.state, this.hass);
    //    if (result && typeof result === "string") {
    //      iconName = result;
    //    }
    //  } catch (e) {
    //    console.warn("Error evaluating icon template:", e);
    //    iconName = "mdi:alert-circle-outline";
    //  }
    //}

    return html`
      <ha-card
        id="container"
        tabindex="0"
        style="position: relative; ${isOffline
          ? "padding: 12px 35px 12px 12px;"
          : "padding: 12px 12px;"}"
        @mousedown=${this._onClick}
      >
        <div id="slider" class="animate ${colorize ? "colorize" : ""}"></div>
        <div id="content">
          <ha-state-icon
            id="icon"
            .icon=${iconName}
            .state=${this._state}
            .hass=${this._hass}
            .stateObj=${this._state}
            data-domain=${this._entity.split(".")[0]}
            data-state=${ifDefined(this._status)}
          ></ha-state-icon>
          <p id="label">
            <span id="name" class="${boldText ? "bold" : ""}"
              >${this._name}</span
            >
            <span
              id="percentage"
              class="${showPercentage ? "" : "hide"} ${boldText ? "bold" : ""}"
            ></span>
          </p>
        </div>
        ${isOffline
          ? html`
              <ha-icon
                id="icon_offline"
                icon="m3rf:warning"
                style="position: absolute; right: 13px; top: 50%; transform: translateY(-50%); color: var(--bsc-icon-color); --mdc-icon-size: 20px;"
                title="Offline"
              ></ha-icon>
            `
          : ""}
      </ha-card>
    `;
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

  private _showWarning(warning: string): TemplateResult {
    return html` <hui-warning>${warning}</hui-warning> `;
  }

  private _showError(error: string): TemplateResult {
    const errorCard = document.createElement("hui-error-card");
    errorCard.setConfig({
      type: "error",
      error,
      // origConfig: this._config,
    });

    return html` ${errorCard} `;
  }

  // https://lit-element.polymer-project.org/guide/styles
  static get styles(): CSSResult {
    return css`
      :host {
        --bsc-background: var(--card-background-color, #aaaaaa);
        --bsc-slider-color: var(--paper-slider-active-color, #f9d2b0);
        --bsc-percent: 0%;
        --bsc-brightness: 50%;
        --bsc-brightness-ui: 50%;
        --bsc-color: var(--paper-item-icon-color);
        --bsc-off-color: var(--paper-item-icon-color);
        --bsc-entity-color: var(--bsc-color);
        --bsc-primary-text-color: var(--primary-text-color);
        --bsc-secondary-text-color: var(--secondary-text-color);
        --bsc-border-color: var(--ha-card-border-color);
        --bsc-border-radius: var(--ha-card-border-radius);
        --bsc-border-style: var(--ha-card-border-style);
        --bsc-border-width: var(--ha-card-border-width);
        --bsc-height: var(--ha-card-height, 97px);
        --bsc-opacity: 1;

        display: flex;
        transition: transform 0.1s ease-out;
        user-select: none;
      }

      :host([half-pressed]) {
        /*transform: scale(0.99);*/
      }

      :host([pressed]) {
        /*transform: scale(0.98);*/
      }

      #container {
        height: var(--bsc-height);
        width: 100%;
        position: relative;
        overflow: hidden;
        /* opacity: var(--bsc-opacity);*/
        background: var(--bsc-background);
        border-color: var(--bsc-border-color, rgba(0 0 0 / 14%));
        border-radius: var(--bsc-border-radius, 4px);
        border-style: var(--bsc-border-style, solid);
        border-width: var(--bsc-border-width, 1px);
        z-index: 1; //fix safari bug with filter transition https://stackoverflow.com/a/27935035
        pointer-events: visible;
        cursor: pointer;
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
        padding: 12px 12px;
        box-shadow:
          0px 0.5px 1px rgba(0, 0, 0, 0.05),
          0px 0.5px 1.5px rgba(0, 0, 0, 0.07);
        -webkit-tap-highlight-color: transparent;
      }

      .hide {
        display: none;
      }

      #container:focus {
        outline: 0;
      }

      #slider {
        height: 100%;
        position: absolute;
        background-color: var(--bsc-slider-color);
        /*opacity: 0.3;*/
        z-index: -1;
        left: 0;
        top: 0;
        right: calc(100% - var(--bsc-percent));
      }

      #slider.colorize {
        background-color: var(--bsc-entity-color);
        filter: brightness(var(--bsc-brightness-ui));
        transition:
          background-color 1s ease,
          filter 1s ease;
      }

      #slider.animate {
        transition:
          right 1s ease,
          background-color 1s ease,
          filter 1s ease;
      }

      #content {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
      }

      #label {
        display: flex;
        flex-direction: column;
        width: -webkit-fill-available;
      }

      #name {
        color: var(--bsc-name-color);
        font-size: 15px;
        font-weight: 550;
        line-height: 1.35;
      }

      #name.bold,
      #percentage.bold {
        font-weight: bold !important;
      }

      #percentage {
        color: var(--bsc-percentage-color);
        font-size: 13px;
        margin-top: 1px;
        font-weight: 500;
      }

      #icon {
        width: 32px;
        height: 32px;
        color: var(--bsc-icon-color);
        align-content: center;
        margin-right: 5px;
        transition: color 0.3s ease-out;
      }

      @media (max-width: 420px) {
        #icon_offline {
          right: 15px;
        }
      }

      .ripple {
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        animation: ripple-animation 600ms ease-out;
        background-color: rgba(255, 255, 255, 0.3);
        pointer-events: none;
      }

      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "google-slider-card": GoogleSliderCard;
  }
}
