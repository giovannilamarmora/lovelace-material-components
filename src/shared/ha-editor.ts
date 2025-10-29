/**
 * Handles changes in a navigation component and updates the configuration accordingly.
 *
 * @param ev - The custom event triggered by the navigation change.
 * @param _this - Reference to the current context containing the `_config` object.
 *
 * This function updates the `_config` object only if the new value is different from
 * the current value for the given `configValue` attribute. After updating, it dispatches
 * a "config-changed" event with the updated configuration.
 */
export function _navigationChanged(ev: CustomEvent, _this: any): void {
  const target = ev.target as any;
  const configValue = target.getAttribute("configValue");
  const value = ev.detail.value;

  if (!configValue || _this._config[configValue] === value) return;

  _this._config = {
    ..._this._config,
    [configValue]: value,
  };

  _this.dispatchEvent(
    new CustomEvent("config-changed", {
      detail: { config: _this._config },
    })
  );
}

/**
 * Handles changes in the entity selection and updates the configuration.
 *
 * @param ev - The custom event triggered by the entity change.
 * @param _this - Reference to the current context containing the `_config` object.
 *
 * Updates `_config.entity` only if the new value differs from the current entity.
 * Dispatches a "config-changed" event with the updated configuration.
 */
export function _entityChanged(ev: CustomEvent, _this: any): void {
  const value = ev.detail.value;
  if (_this._config?.entity === value) return;
  _this._config = {
    ..._this._config,
    entity: value,
  };
  _this.dispatchEvent(
    new CustomEvent("config-changed", {
      detail: { config: _this._config },
    })
  );
}

/**
 * Handles changes in a value input (e.g., checkbox, input field) and updates the configuration.
 *
 * @param ev - The event triggered by the value change. Can be a native `Event` or a `CustomEvent`.
 * @param _this - Reference to the current context containing the `_config` object.
 *
 * Determines the new value from the event (either `ev.detail.value`, `checked`, or `value`).
 * Updates the `_config` object only if the new value differs from the existing one.
 * Dispatches a "config-changed" event with the updated configuration.
 */
export function _valueChanged(ev: Event, _this: any): void {
  const target = ev.target as HTMLElement & {
    getAttribute(name: string): string | null;
  };
  const configValue = target.getAttribute("configValue");
  const value =
    (ev as CustomEvent).detail?.value ??
    (target as any).value ??
    (target as any).checked;

  if (!configValue || _this._config[configValue] === value) return;

  _this._config = { ..._this._config, [configValue]: value };

  _this.dispatchEvent(
    new CustomEvent("config-changed", { detail: { config: _this._config } })
  );
}
