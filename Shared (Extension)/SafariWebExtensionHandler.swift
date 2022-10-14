//
//  SafariWebExtensionHandler.swift
//  Shared (Extension)
//
//  Created by User on 14.10.22.
//

import os.log
import SafariServices

class SafariWebExtensionHandler: NSObject, NSExtensionRequestHandling {
    func beginRequest(with context: NSExtensionContext) {
        context.completeRequest(
            returningItems: [],
            completionHandler: nil
        )
    }
}
