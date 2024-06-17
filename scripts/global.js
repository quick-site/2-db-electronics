//* - - language
function switchLanguage(languageKey = "en") {
  const currentLocation = window.location.pathname
    .split("/")
    .slice(2)
    .join("/");

  window.location.href = "/" + languageKey + "/" + currentLocation;
}

function getLanguage() {
  return window.location.href.split("/")[3];
}

//* - - data
async function getJson(fileName) {
  try {
    let response = await fetch("../data/" + fileName);
    let jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching or parsing JSON:", error);
    return null;
  }
}
