import { localize } from "../localize/localize";

/**
 * The current version of the custom card.
 *
 * Used for displaying version information or debugging purposes.
 * Example usage: displayed when `control_type: app_version` is set.
 */
export const CARD_VERSION = "2.1.7";

/**
 * Returns the provided value if it is not `undefined` or `null`,
 * otherwise returns the specified default value.
 *
 * This utility avoids repetitive nullish checks and provides
 * a concise way to ensure a value is always returned.
 *
 * @param value - The value to test (can be undefined or null).
 * @param defValue - The default value to return if `value` is invalid.
 * @returns The original value if defined, otherwise the default.
 *
 * @example
 * ```ts
 * getOrDefault(undefined, "N/A"); // "N/A"
 * getOrDefault("Online", "N/A");  // "Online"
 * ```
 */
export function getOrDefault<T>(value: T | undefined | null, defValue: T): T {
  return value !== undefined && value !== null ? value : defValue;
}

/**
 * Formats a given date string into a smart, localized representation.
 *
 * The function automatically determines if the provided date refers to:
 * - **Today** → displays "Oggi alle HH:mm"
 * - **Yesterday** → displays "Ieri alle HH:mm"
 * - **Other dates** → falls back to {@link formatDate}
 *
 * If the input is not a valid date, the original string is returned.
 *
 * @param dateString - The date string to format (ISO or valid date format).
 * @returns A human-friendly date string localized in Italian.
 *
 * @example
 * ```ts
 * formatSmartDate("2025-10-10T14:30:00Z");
 * // "Oggi alle 16:30" (depending on timezone)
 * ```
 */
export function formatSmartDate(dateString: string): string {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return dateString;
  }

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const targetDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  if (targetDate.getTime() === today.getTime()) {
    return `${localize("common.today_at")} ${date.toLocaleTimeString("it-IT", {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  }

  if (targetDate.getTime() === yesterday.getTime()) {
    return `${localize("common.yesterday_at")} ${date.toLocaleTimeString(
      "it-IT",
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    )}`;
  }

  return formatDate(dateString);
}

/**
 * Formats a date string into a localized, readable string
 * following the pattern "DD MMM YYYY, HH:mm" (Italian locale).
 *
 * The month is automatically capitalized (e.g. "10 Ott 2025, 14:30").
 * If the date is invalid, the original string is returned.
 *
 * @param dateString - The date string to format.
 * @returns The formatted date string or the original value if invalid.
 *
 * @example
 * ```ts
 * formatDate("2025-10-10T14:30:00Z");
 * // "10 Ott 2025, 16:30"
 * ```
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) return dateString;

  const formatted = new Intl.DateTimeFormat("it-IT", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);

  return formatted.replace(
    /([a-zàèéìòù]+)/,
    (m) => m.charAt(0).toUpperCase() + m.slice(1)
  );
}

/**
 * Checks whether a value is considered "empty".
 *
 * The function supports multiple types and returns `true` for:
 * - `null` or `undefined`
 * - Empty strings (`""` or `"   "`)
 * - Numbers equal to `0` or `NaN`
 * - Empty arrays (`[]`)
 * - Empty objects (`{}`)
 *
 * @param value - The value to check.
 * @returns `true` if the value is empty or invalid; otherwise `false`.
 *
 * @example
 * ```ts
 * isNullOrEmpty("");          // true
 * isNullOrEmpty([]);          // true
 * isNullOrEmpty({});          // true
 * isNullOrEmpty("hello");     // false
 * isNullOrEmpty(0);           // true
 * ```
 */
export function isNullOrEmpty(value: any): boolean {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === "string") {
    return value.trim().length === 0;
  }

  if (typeof value === "number") {
    return value === 0 || Number.isNaN(value);
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }

  return false;
}
