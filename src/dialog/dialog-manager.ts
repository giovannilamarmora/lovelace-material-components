import "./sensor/sensor-dialog";
import "./dryer/dryer-dialog";

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
