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
