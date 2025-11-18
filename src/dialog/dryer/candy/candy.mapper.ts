import { html } from "lit";
import { localize } from "../../../localize/localize";
import { isNullOrEmpty } from "../../../shared/utils";
import { Program } from "./candy.value";

export function getProgram(attributes: any): string | null {
  if (isNullOrEmpty(attributes) || isNullOrEmpty(attributes.program))
    return null;

  const programNumber = attributes.program; // es. 1

  // costruisco la chiave dell'enum: PROGRAM_1, PROGRAM_2, ...
  const enumKey = `PROGRAM_${programNumber}` as keyof typeof Program;

  // ritorno il valore se esiste
  const key = Program[enumKey] ?? null;

  return localize("dryer." + key) ?? null;
}

export function checkDryerHtml(attributes: any, theme: string) {
  if (isNullOrEmpty(attributes)) return "";

  const door_open = isNullOrEmpty(attributes.door_closed)
    ? false
    : !attributes.door_closed; // true se porta aperta
  const water_full = attributes.water_tank_full ?? false;
  const filter_dirty = attributes.need_clean_filter ?? false;

  // Array di messaggi da renderizzare
  const items: { text: string }[] = [];

  if (door_open) {
    items.push({ text: localize("dryer.door_open") });
  }

  if (water_full) {
    items.push({ text: localize("dryer.water_tank_full") });
  }

  if (filter_dirty) {
    items.push({ text: localize("dryer.need_clean_filter") });
  }

  // Se nessuno degli stati è attivo, non mostri nulla
  if (items.length === 0) return "";

  // Genera il blocco HTML per ogni stato attivo
  return html`
    ${items.map(
      (item) => html`
        <div class="menu-card link ${theme} state">
          <ha-icon icon="m3rf:error" style="color: #F44336"></ha-icon>
          <span class="menu-text" style="color: #F44336">${item.text}</span>
          <!--<span class="menu-text flex-end">test</span>-->
        </div>
      `
    )}
  `;
}
