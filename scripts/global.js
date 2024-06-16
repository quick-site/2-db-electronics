function switchLanguage(languageKey = "en") {
  const currentLocation = window.location.pathname
    .split("/")
    .slice(2)
    .join("/");

  window.location.href = "/" + languageKey + "/" + currentLocation;
}
