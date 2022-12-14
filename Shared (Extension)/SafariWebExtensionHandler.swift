//
// Copyright (C) 2022 Marvin Häuser. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
//

import SafariServices

internal final class CSSafariWebExtensionHandler: NSObject,
    NSExtensionRequestHandling
{
    func beginRequest(with context: NSExtensionContext) {
        context.completeRequest(
            returningItems: [],
            completionHandler: nil
        )
    }
}
