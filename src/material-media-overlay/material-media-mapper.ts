import { html } from "lit";
import {
  getGoogleHomeURL,
  getNetflixURL,
  getPrimeVideoURL,
  getSpotifyURL,
  getTwitchURL,
  getYouTubeURL,
} from "../shared/url.utils";

export function isOpenLinkCompatible(appName: string) {
  return (
    appName == "YouTube" ||
    appName == "Spotify" ||
    appName == "Netflix" ||
    appName == "Prime Video" ||
    appName == "Twitch"
  );
}

/**
 * openPage
 *
 * Opens a given URL in a new browser tab or window. This method is especially
 * useful on iOS devices or inside WebViews (e.g., Home Assistant app), where
 * directly setting `window.location.href` may not reliably open external apps
 * or links.
 *
 * @param url - The URL to open. Can be a web URL (https://...), or a URL scheme
 *              (e.g., `twitch://`) if supported by the platform/browser.
 *
 * How it works:
 * 1. Creates an invisible <a> element with the provided URL.
 * 2. Sets `target="_blank"` to open the link in a new tab/window.
 *    This is crucial on iOS to allow app or external link opening.
 * 3. Sets `rel="noopener noreferrer"` for security and performance reasons.
 * 4. Appends the element to the document, triggers a click programmatically,
 *    then removes the element.
 *
 * Example usage:
 * ```
 * // Opens Twitch in the app if installed, or in browser
 * openPage("https://www.twitch.tv/");
 *
 * // Opens a custom URL scheme (may only work in Safari)
 * openPage("twitch://");
 * ```
 */
function openPage(url: string) {
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank"; // importante per iOS
  a.rel = "noopener noreferrer";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/**
 * Opens the Google Home application or website by redirecting the browser
 * to the appropriate URL based on the current device and platform.
 *
 * Uses `getGoogleHomeURL()` internally to resolve the correct target.
 */
export function openGoogleHome() {
  const url = getGoogleHomeURL();
  openPage(url);
  //window.location.href = url;
}

/**
 * Opens the YouTube application or website by redirecting the browser
 * to the appropriate URL based on the current device and platform.
 *
 * Uses `getYouTubeURL()` internally to resolve the correct target.
 */
export function openYouTube() {
  const url = getYouTubeURL();
  openPage(url);
  //window.location.href = url;
}

/**
 * Opens the Spotify application or website by redirecting the browser
 * to the appropriate URL based on the current device and platform.
 *
 * Uses `getSpotifyURL()` internally to resolve the correct target.
 */
export function openSpotify() {
  const url = getSpotifyURL();
  openPage(url);
  //window.location.href = url;
}

/**
 * Opens the Netflix application or website by redirecting the browser
 * to the appropriate URL based on the current device and platform.
 *
 * Uses `getNetflixURL()` internally to resolve the correct target.
 */
export function openNetflix() {
  const url = getNetflixURL();
  openPage(url);
  //window.location.href = url;
}

/**
 * Opens the Prime Video application or website by redirecting the browser
 * to the appropriate URL based on the current device and platform.
 *
 * Uses `getPrimeVideoURL()` internally to resolve the correct target.
 */
export function openPrimeVideo() {
  const url = getPrimeVideoURL();
  openPage(url);
  //window.location.href = url;
}

/**
 * Opens the Twitch application or website by redirecting the browser
 * to the appropriate URL based on the current device and platform.
 *
 * Uses `getPrimeVideoURL()` internally to resolve the correct target.
 */
export function openTwitch() {
  const url = getTwitchURL();
  openPage(url);
  //window.location.href = url;
}

/**
 * Renders the icon of a supported media application (Spotify, YouTube,
 * Netflix, Prime Video) or a default play icon if the app is not recognized.
 *
 * @param appName - The name of the application (e.g., "Spotify", "YouTube", "Netflix", "Prime Video").
 * @param cover - (Optional) A cover image URL. If provided, it influences the style of the default icon.
 * @returns An HTML template containing the application icon or a fallback `ha-icon`.
 *
 * @example
 * // Render a Spotify icon
 * _renderAppIcon("Spotify");
 *
 * @example
 * // Render a default icon with a cover style
 * _renderAppIcon("UnknownApp", "some-cover.jpg");
 */
export function _renderAppIcon(appName: string, cover?: string) {
  switch (appName) {
    case "Spotify":
      return html`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-material-components/refs/heads/master/src/shared/assets/logo/Spotify.webp"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;z-index: 1;"
      />`;
    case "YouTube":
      return html`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-material-components/refs/heads/master/src/shared/assets/logo/YouTube.png"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;"
      />`;
    case "Netflix":
      return html`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-material-components/refs/heads/master/src/shared/assets/logo/Netflix.webp"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;"
      />`;
    case "Prime Video":
      return html`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-material-components/refs/heads/master/src/shared/assets/logo/Prime.png"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;"
      />`;
    case "Twitch":
      return html`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-material-components/refs/heads/master/src/shared/assets/logo/Twitch.jpg"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;"
      />`;
    default:
      return html`<ha-icon
        icon="m3r:play-circle"
        style="${cover
          ? "color: #e3e3e5;"
          : "color: var(--md-sys-color-on-secondary-container)"}"
      ></ha-icon>`;
  }
}
