function saveSettings(e) {
    e.preventDefault();
    browser.storage.sync.set({
        query_url: document.querySelector("#query_url").value
    });
}

function restoreOptions() {
    function setCurrentChoice(result) {
        document.querySelector("#query_url").value = result.query_url || "";
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    let getting = browser.storage.sync.get("query_url");
    getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveSettings);
