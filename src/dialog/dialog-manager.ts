import "./template-dialog"; // registra il custom element
import "./presence-sensor/presence-sensor-dialog"; // registra il custom element
import "./door-sensor/door-sensor-dialog";

export function _openDeviceDialog(element: any, hass: any, _config: any) {
  const dialog = document.createElement("template-dialog") as any;

  dialog.entityId = _config.entity!;
  dialog.hass = hass;
  dialog.open = true;

  const updateHass = () => {
    if (!dialog.isConnected) return;
    dialog.hass = element.hass; // <– sempre prelevato dal componente vivo
    dialog.requestUpdate();
  };

  // ✅ Osserva il nodo DOM radice della card (che esiste sempre)
  const target = element.shadowRoot?.host ?? element;
  const observer = new MutationObserver(updateHass);
  observer.observe(target, { attributes: true });

  dialog.addEventListener("close-dialog", () => {
    observer.disconnect();
    dialog.remove();
  });

  dialog.style.position = "fixed";
  dialog.style.inset = "0";
  dialog.style.zIndex = "9999";
  document.body.appendChild(dialog);
}

export function _openDialog(
  _this: any,
  element: string,
  hass: any,
  _config: any
) {
  const dialog = document.createElement(element) as any;

  dialog.config = _config;
  dialog.hass = hass;
  dialog.open = true;

  const updateHass = () => {
    if (!dialog.isConnected) return;
    dialog.hass = _this.hass; // <– sempre prelevato dal componente vivo
    dialog.requestUpdate();
  };

  // ✅ Osserva il nodo DOM radice della card (che esiste sempre)
  const target = _this.shadowRoot?.host ?? _this;
  const observer = new MutationObserver(updateHass);
  observer.observe(target, { attributes: true });

  dialog.addEventListener("close-dialog", () => {
    observer.disconnect();
    dialog.remove();
  });

  dialog.style.position = "fixed";
  dialog.style.inset = "0";
  dialog.style.zIndex = "9999";
  document.body.appendChild(dialog);
}
