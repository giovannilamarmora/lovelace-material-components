/**
 * Represents the state of an automated action.
 * @typedef {"idle" | "loading" | "done"} ActionState
 * - "idle": The action is not in progress.
 * - "loading": The action is currently running.
 * - "done": The action has completed.
 */
type ActionState = "idle" | "loading" | "done";

/**
 * WeakMap to track the state of automations per instance.
 *
 * The key is the context (_this) and the value is a Map that maps
 * entityId to its current state (ActionState).
 */
const automationActionState = new WeakMap<any, Map<string, ActionState>>();

/**
 * Returns the current state of an automation for a given instance.
 * If the automation has no state yet, it returns "idle".
 *
 * @param _this - The instance context managing the automation
 * @param entityId - The automation's entity ID
 * @returns The current state of the automation (ActionState)
 */
export const getActionState = (_this: any, entityId: string): ActionState => {
  if (!automationActionState.has(_this)) {
    automationActionState.set(_this, new Map());
  }
  return automationActionState.get(_this)!.get(entityId) ?? "idle";
};

/**
 * Sets the current state of an automation for a given instance
 * and requests a UI update (_this.requestUpdate()).
 *
 * @param _this - The instance context managing the automation
 * @param entityId - The automation's entity ID
 * @param state - The new state to assign to the automation
 */
const setActionState = (_this: any, entityId: string, state: ActionState) => {
  if (!automationActionState.has(_this)) {
    automationActionState.set(_this, new Map());
  }
  automationActionState.get(_this)!.set(entityId, state);
  _this.requestUpdate();
};

/**
 * Helper function that returns a Promise resolved after a specified delay.
 *
 * @param ms - Milliseconds to wait
 * @returns Promise<void> resolved after the specified delay
 */
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Runs an automation in a controlled way, managing states and minimum delays.
 *
 * @param _this - The instance context managing the automation
 * @param hass - Home Assistant object to call services
 * @param entityId - The automation entity ID to trigger
 * @param e - The event that triggered the action (e.g., click)
 * @param minDelay - Minimum time in milliseconds to wait during execution (default: 500ms)
 */
export const runAutomation = async (
  _this: any,
  hass: any,
  entityId: string,
  e: Event,
  minDelay = 500 // tempo minimo in ms
) => {
  e.stopPropagation();

  const state = getActionState(_this, entityId);
  if (state !== "idle") return;

  setActionState(_this, entityId, "loading");

  try {
    await Promise.all([
      hass.callService("automation", "trigger", { entity_id: entityId }),
      sleep(minDelay),
    ]);

    setActionState(_this, entityId, "done");
  } finally {
    setTimeout(() => setActionState(_this, entityId, "idle"), 2000);
  }
};
