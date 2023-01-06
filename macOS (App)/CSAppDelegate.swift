//
// Copyright (C) 2022 Marvin Häuser. All rights reserved.
// SPDX-License-Identifier: BSD-3-Clause
//

import Cocoa

@main
internal final class CSAppDelegate: NSObject, NSApplicationDelegate {
    func applicationShouldTerminateAfterLastWindowClosed(_: NSApplication)
        -> Bool
    {
        return true
    }
    
    /* Populate the Help menu with relevant links */
    @IBAction func openRepositoryFromHelp(_ sender: NSMenuItem) {
        let urlString = "https://github.com/mhaeuser/Custom-Search"
        if let url = URL(string: urlString) {
            NSWorkspace.shared.open(url)
        }
    }
    
    
    @IBAction func openLicenseFromHelp(_ sender: NSMenuItem) {
        let urlString = "https://github.com/mhaeuser/Custom-Search/blob/main/LICENSE.txt"
        if let url = URL(string: urlString) {
            NSWorkspace.shared.open(url)
        }
    }
}
