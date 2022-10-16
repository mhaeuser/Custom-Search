![](Resources/LogoCaption.png)

-----

Safari Web Extension to declare a custom search engine.

Search queries made from the Safari address bar are appended to the custom search engine URL.

**Note:** The extension does not affect Safari search engine suggestions. In case of privacy concerns, it is advised to set the default search engine to DuckDuckGo and to disable search engine suggestions.

|![Extension Settings](Resources/ExtensionSettings.png)|
|:--:| 
| *Custom Search Extension Settings* |

# Technical details
* Safari default search engine queries are matched on a best-effort basis
* Declarative Net Requests are utilized to block queries to the default search engines
* WebNavigation is used to redirect search queries to the custom search engine
  