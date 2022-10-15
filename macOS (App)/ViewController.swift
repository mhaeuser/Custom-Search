//
// Copyright (C) 2022 Marvin Häuser. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
//

import Cocoa
import SafariServices
import WebKit

let extensionBundleIdentifier = "me.mhaeuser.CustomSearch.Extension"

private class ViewController: NSViewController {
    @IBOutlet var stateLabel: NSTextField!
    @IBOutlet var openSettingsButton: NSButton!

    override func viewWillAppear() {
        super.viewWillAppear()

        var useSettingsInsteadOfPreferences = false
        if #available(macOS 13, *) {
            useSettingsInsteadOfPreferences = true
        }

        if useSettingsInsteadOfPreferences {
            self.stateLabel
                .stringValue =
                "You can turn on Custom Search’s extension in the Extensions section of Safari Settings."
            self.openSettingsButton
                .stringValue = "Quit and Open Safari Settings…"
        } else {
            self.stateLabel
                .stringValue =
                "You can turn on Custom Search’s extension in Safari Extensions preferences."
            self.openSettingsButton
                .stringValue = "Quit and Open Safari Extensions Preferences…"
        }

        SFSafariExtensionManager.getStateOfSafariExtension(
            withIdentifier: extensionBundleIdentifier
        ) { state, error in
            guard let state, error == nil else {
                // Insert code to inform the user that something went
                // wrong.
                return
            }

            DispatchQueue.main.async {
                if state.isEnabled {
                    if useSettingsInsteadOfPreferences {
                        self.stateLabel
                            .stringValue =
                            "Custom Search’s extension is currently on. You can turn it off in the Extensions section of Safari Settings."
                    } else {
                        self.stateLabel
                            .stringValue =
                            "Custom Search’s extension is currently on. You can turn it off in Safari Extensions preferences."
                    }
                } else {
                    if useSettingsInsteadOfPreferences {
                        self.stateLabel
                            .stringValue =
                            "Custom Search’s extension is currently off. You can turn it on in the Extensions section of Safari Settings."
                    } else {
                        self.stateLabel
                            .stringValue =
                            "Custom Search’s extension is currently off. You can turn it on in Safari Extensions preferences."
                    }
                }
            }
        }
    }

    @IBAction func openSettingsAction(_: Any) {
        SFSafariApplication.showPreferencesForExtension(
            withIdentifier: extensionBundleIdentifier
        ) { error in
            guard error == nil else {
                // Insert code to inform the user that something went
                // wrong.
                return
            }

            DispatchQueue.main.async {
                NSApp.terminate(nil)
            }
        }
    }
}
