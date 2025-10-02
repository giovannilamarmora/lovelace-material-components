import { html } from "lit";
import {
  getGoogleHomeURL,
  getNetflixURL,
  getPrimeVideoURL,
  getSpotifyURL,
  getYouTubeURL,
} from "../shared/url.utils";

/**
 * Opens the Google Home application or website by redirecting the browser
 * to the appropriate URL based on the current device and platform.
 *
 * Uses `getGoogleHomeURL()` internally to resolve the correct target.
 */
export function openGoogleHome() {
  const url = getGoogleHomeURL();
  window.location.href = url;
}

/**
 * Opens the YouTube application or website by redirecting the browser
 * to the appropriate URL based on the current device and platform.
 *
 * Uses `getYouTubeURL()` internally to resolve the correct target.
 */
export function openYouTube() {
  const url = getYouTubeURL();
  window.location.href = url;
}

/**
 * Opens the Spotify application or website by redirecting the browser
 * to the appropriate URL based on the current device and platform.
 *
 * Uses `getSpotifyURL()` internally to resolve the correct target.
 */
export function openSpotify() {
  const url = getSpotifyURL();
  window.location.href = url;
}

/**
 * Opens the Netflix application or website by redirecting the browser
 * to the appropriate URL based on the current device and platform.
 *
 * Uses `getNetflixURL()` internally to resolve the correct target.
 */
export function openNetflix() {
  const url = getNetflixURL();
  window.location.href = url;
}

/**
 * Opens the Prime Video application or website by redirecting the browser
 * to the appropriate URL based on the current device and platform.
 *
 * Uses `getPrimeVideoURL()` internally to resolve the correct target.
 */
export function openPrimeVideo() {
  const url = getPrimeVideoURL();
  window.location.href = url;
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
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-google-components/refs/heads/master/src/shared/assets/logo/Spotify.webp"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;z-index: 1;"
      />`;
    case "YouTube":
      return html`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-google-components/refs/heads/master/src/shared/assets/logo/YouTube.png"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;"
      />`;
    case "Netflix":
      return html`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-google-components/refs/heads/master/src/shared/assets/logo/Netflix.webp"
        width="24"
        height="24"
        style="border-radius: 50px; object-fit: cover;"
      />`;
    case "Prime Video":
      return html`<img
        src="https://raw.githubusercontent.com/giovannilamarmora/lovelace-google-components/refs/heads/master/src/shared/assets/logo/Prime.png"
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
