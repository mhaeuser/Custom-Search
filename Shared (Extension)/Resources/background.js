"use strict";

browser.webNavigation.onBeforeNavigate.addListener((details) => {
  try {
    browser.storage.sync.get(["query_url"]).then(({ query_url }) => {
      try {
        if ((query_url ?? "") !== "") {
          const url = new URL(details.url);
          const queryKey = url.hostname.endsWith("yahoo.com") ? "p" : "q";
          const query = encodeURIComponent(url.searchParams.get(queryKey));
          browser.tabs.update(details.tabId, { url: query_url + query });
        }
      } catch (e) {
        console.error("%O", e);
      }
    });
  } catch (e) {
    console.error("%O", e);
  }
}, {
  url:
  [
    {urlPrefix: "https://www.google.", pathEquals: "/search", queryPrefix: "client=safari&", queryContains: "&q=", querySuffix: "&ie=UTF-8&oe=UTF-8"},
    {urlPrefix: "https://www.google.", pathEquals: "/search", queryPrefix: "q=", queryContains: "&ie=UTF-8&oe=UTF-8&", querySuffix: "&client=safari"},
    {hostEquals: "search.yahoo.com", pathEquals: "/search", queryPrefix: "ei=utf-8&fr=aaplw&p="},
    {hostEquals: "search.yahoo.com", pathEquals: "/search", queryPrefix: "p=", querySuffix: "&fr=iphone&.tsrc=apple"},
    {hostSuffix: ".search.yahoo.com", pathEquals: "/search", queryPrefix: "ei=utf-8&fr=aaplw&p="},
    {hostSuffix: ".search.yahoo.com", pathEquals: "/search", queryPrefix: "p=", querySuffix: "&fr=iphone&.tsrc=apple"},
    {urlPrefix: "https://www.bing.com/search?q=", querySuffix: "&form=APMCS1&PC=APMC"},
    {urlPrefix: "https://www.bing.com/search?q=", querySuffix: "&form=APIPH1&PC=APPL"},
    {urlPrefix: "https://duckduckgo.com/?q=", querySuffix: "&t=osx"},
    {urlPrefix: "https://duckduckgo.com/?q=", querySuffix: "&t=iphone"},
    {urlPrefix: "https://www.ecosia.org/search?q=", querySuffix: "&tts=st_asaf_macos"},
    {urlPrefix: "https://www.ecosia.org/search?q=", querySuffix: "&tts=st_asaf_iphone"}
  ],
  types: ["main_frame"]
});
