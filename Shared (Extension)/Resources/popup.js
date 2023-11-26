"use strict";

function generateRules(regexSubstitution) {
  if (regexSubstitution === "") {
    return [];
  }

  return rulesRegex.map((ruleRegex, index) => (
    {
      "id": index + 1,
      "priority": 1,
      "action": {
        "type": "redirect",
        "redirect": {
          "regexSubstitution": regexSubstitution + ruleRegex[1]
        }
      },
      "condition": {
        "regexFilter": ruleRegex[0],
        "resourceTypes": ["main_frame"]
      }
    })
  );
}


function updateRules(regexSubstitution) {
  browser.declarativeNetRequest.getDynamicRules(oldRules => {
    const oldRuleIds = oldRules.map(rule => rule.id);
    const newRules   = generateRules(regexSubstitution);
    browser.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: oldRuleIds,
      addRules: newRules
    });
  });
}

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
    updateRules(document.getElementById("qurl").value);
  } catch (e) {
    console.error("%O", e);
  }
});
