import { html, TemplateResult } from "lit";
import { localize } from "../../localize/localize";
import { UPGRADE_URL } from "./utils";

export function getCardVersion(): TemplateResult {
  const style = `.version {
      font-size: 12px !important;
      color: var(--primary-text-color) !important;
      background: rgba(0, 0, 0, 0.1);
      padding: 8px 16px;
      border-radius: 32px;
      display: flex;
      align-items: center;
    }

    .version-number {
      font-size: 10px;
      background: rgb(0, 103, 155);
      padding: 0px 8px;
      border-radius: 12px;
      margin-right: -6px;
      float: right;
      color: white;
      height: 20px;
      align-content: center;
    }`;
  return html`<style>
      ${style}
    </style>
    <h4 class="version">
      ${localize("upgrade.message")}
      <span class="version-number"
        ><a
          href="${UPGRADE_URL}"
          target="_blank"
          style="text-decoration: none;"
          rel="noopener noreferrer"
        >
          ${localize("upgrade.button")}
        </a></span
      >
    </h4>`;
}
