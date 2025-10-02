export function applyRippleEffect(el: HTMLElement, event: MouseEvent) {
  if (!el) return;

  const ripple = document.createElement("span");
  ripple.classList.add("ripple");

  const rect = el.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = `${size}px`;

  // Posizione relativa al click
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  // Stili base
  Object.assign(ripple.style, {
    position: "absolute",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.3)",
    transform: "scale(0)",
    animation: "ripple-animation 600ms ease-out",
    pointerEvents: "none",
    zIndex: "1",
  });

  // Assicurati che il contenitore abbia overflow hidden e posizione relativa
  const computedStyle = getComputedStyle(el);
  if (computedStyle.position === "static") {
    el.style.position = "relative";
  }
  if (computedStyle.overflow !== "hidden") {
    el.style.overflow = "hidden";
  }

  el.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
}
