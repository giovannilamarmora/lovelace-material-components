export function getGoogleHomeURL(): string {
  const ua = navigator.userAgent || "";

  if (/Android/i.test(ua)) {
    // Su Android prova ad aprire l'app nativa
    return "app://com.google.android.apps.chromecast.app";
  } else if (/iPhone|iPad|iPod/i.test(ua)) {
    // Su iOS usa lo schema URL dell'app
    return "googlehome://";
  } else {
    // Browser desktop o altri dispositivi
    return "https://home.google.com/";
  }
}

export function getYouTubeURL(): string {
  const ua = navigator.userAgent || "";

  if (/Android/i.test(ua)) {
    // Su Android prova ad aprire l'app nativa
    return "app://com.google.android.youtube";
  } else if (/iPhone|iPad|iPod/i.test(ua)) {
    // Su iOS usa lo schema URL dell'app
    return "youtube://";
  } else {
    // Browser desktop o altri dispositivi
    return "https://www.youtube.com/";
  }
}

export function getSpotifyURL(): string {
  const ua = navigator.userAgent || "";

  if (/Android/i.test(ua)) {
    // Intent per aprire Spotify app su Android
    return "app://com.spotify.music";
  } else if (/iPhone|iPad|iPod/i.test(ua)) {
    // URL schema per Spotify su iOS
    return "spotify://";
  } else {
    // Fallback per desktop / browser
    return "https://open.spotify.com/";
  }
}

export function getNetflixURL(): string {
  const ua = navigator.userAgent || "";

  if (/Android/i.test(ua)) {
    // Intent per aprire l'app Netflix su Android
    return "app://com.netflix.mediaclient";
  } else if (/iPhone|iPad|iPod/i.test(ua)) {
    // URL schema per Netflix su iOS
    return "nflx://";
  } else {
    // Fallback per desktop / browser
    return "https://www.netflix.com/";
  }
}

export function getPrimeVideoURL(): string {
  const ua = navigator.userAgent || "";

  if (/Android/i.test(ua)) {
    // Intent to open the Prime Video app on Android
    return "app://com.amazon.avod.thirdpartyclient";
  } else if (/iPhone|iPad|iPod/i.test(ua)) {
    // URL scheme for Prime Video on iOS
    return "primevideo://";
  } else {
    // Fallback for desktop / browser
    return "https://www.primevideo.com/";
  }
}
