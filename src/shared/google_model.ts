/**
 * Enum representing the most common **Google smart devices** supported by Home Assistant.
 *
 * This enum helps identify the type of Google device based on its name,
 * allowing for device-specific behavior or display customization in UI components.
 *
 * It can be used to differentiate between smart speakers, displays, and streaming devices.
 */
export enum GoogleDevice {
  /** Google Nest Mini smart speaker (2nd generation or later) */
  NEST_MINI = "Google Nest Mini",

  /** Original Google Home smart speaker */
  GOOGLE_HOME = "Google Home",

  /** Google Nest Hub smart display with screen */
  NEST_HUB = "Google Nest Hub",

  /** Google TV or Chromecast with Google TV streaming device */
  GOOGLE_TV_STREAMER = "Google TV Streamer",

  /** A logical group of Google Cast devices (speaker group or multi-room audio setup) */
  GOOGLE_CAST_GROUP = "Google Cast Group",
}
