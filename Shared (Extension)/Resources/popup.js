document.addEventListener("DOMContentLoaded", () => {
    try {
        browser.storage.sync.get(["query_url"]).then(({ query_url }) => {
            try {
                document.querySelector("#query_url").value = (query_url ?? "");
            } catch (e) {
                console.error("%O", e);
            }
        });
    } catch (e) {
        console.error("%O", e);
    }
});

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    try {
        browser.storage.sync.set({
            query_url: document.querySelector("#query_url").value
        });
    } catch (e) {
        console.error("%O", e);
    }
});
