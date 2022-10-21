"use strict";

document.addEventListener("DOMContentLoaded", () => {
  try {
    browser.storage.sync.get(["qurl"]).then(({ qurl }) => {
      try {
        document.getElementById("qurl").value = (qurl ?? "");
      } catch (e) {
        console.error("%O", e);
      }
    });
  } catch (e) {
    console.error("%O", e);
  }
});

document.getElementById("qurl_form").addEventListener("submit", (e) => {
  e.preventDefault();

  try {
    browser.storage.sync.set({
      qurl: document.getElementById("qurl").value
    });
  } catch (e) {
    console.error("%O", e);
  }
});
