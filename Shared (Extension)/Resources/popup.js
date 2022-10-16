document.addEventListener("DOMContentLoaded", () => {
    browser.storage.sync.get(["query_url"]).then(({ query_url }) => {
        document.querySelector("#query_url").value = query_url || "";
    });
});

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    browser.storage.sync.set({
        query_url: document.querySelector("#query_url").value
    });
});
