browser.webNavigation.onBeforeNavigate.addListener((details) => {
    browser.storage.sync.get(["query_url"], ({ query_url }) => {
        if (query_url === "") {
            return
        }

        const url = new URL(details.url);

        var queryKey = "q";
        if (url.hostname.endsWith("search.yahoo.com")) {
            queryKey = "p";
        }

        const query = encodeURIComponent(url.searchParams.get(queryKey));
        browser.tabs.update(details.tabId, { url: query_url + query });
    });
}, {
    url:
    [
        {urlPrefix: "https://www.google.", pathEquals: "/search", queryPrefix: "client=safari&", queryContains: "&q=", querySuffix: "&ie=UTF-8&oe=UTF-8"},
        {urlPrefix: "https://www.google.", pathEquals: "/search", queryPrefix: "q=", queryContains: "&ie=UTF-8&oe=UTF-8&", querySuffix: "&client=safari"},
        {hostSuffix: "search.yahoo.com", pathEquals: "/search", queryPrefix: "ei=utf-8&fr=aaplw&p="},
        {hostSuffix: "search.yahoo.com", pathEquals: "/search", queryPrefix: "p=", querySuffix: "&fr=iphone&.tsrc=apple"},
        {urlPrefix: "https://www.bing.com/search?q=", querySuffix: "&form=APMCS1&PC=APMC"},
        {urlPrefix: "https://www.bing.com/search?q=", querySuffix: "&form=APIPH1&PC=APPL"},
        {urlPrefix: "https://duckduckgo.com/?q=", querySuffix: "&t=osx"},
        {urlPrefix: "https://duckduckgo.com/?q=", querySuffix: "&t=iphone"},
        {urlPrefix: "https://www.ecosia.org/search?q=", querySuffix: "&tts=st_asaf_macos"},
        {urlPrefix: "https://www.ecosia.org/search?q=", querySuffix: "&tts=st_asaf_iphone"}
    ],
    types: ["main_frame"]
});
