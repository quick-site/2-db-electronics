let showId;

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.get("id")) {
    console.error("ERROR: ID not found");
  } else {
    showId = urlParams.get("id");
  }

  if (!linkParam) {
    // Remove the hash from the URL if the 'link' parameter is not present
    history.replaceState(null, null, window.location.pathname);
  } else {
    // Remove the 'link' parameter from the URL
    urlParams.delete("link");
    const newUrl = `${window.location.pathname}${
      window.location.hash ? window.location.hash : ""
    }`;
    history.replaceState(null, null, newUrl);
  }
};

function resetUrl() {
  const urlParams = new URLSearchParams(window.location.search);

  if (!urlParams.get("id")) {
    history.replaceState(null, null, window.location.pathname);
  } else {
    urlParams.delete("id");
    const newUrl = `${window.location.pathname}${
      window.location.hash ? window.location.hash : ""
    }`;
    history.replaceState(null, null, newUrl);
  }
}
