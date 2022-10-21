"use strict";

document.addEventListener("DOMContentLoaded", () => {
  try {
    browser.storage.sync.get(["query_url"]).then(({ query_url }) => {
      try {
        document.getElementById("query_url").value = (query_url ?? "");
      } catch (e) {
        console.error("%O", e);
      }
    });
  } catch (e) {
    console.error("%O", e);
  }
});

document.getElementById("query_url_form").addEventListener("submit", (e) => {
  e.preventDefault();

  try {
    browser.storage.sync.set({
      query_url: document.getElementById("query_url").value
    });
  } catch (e) {
    console.error("%O", e);
  }
});
