//
//  AppDelegate.swift
//  macOS (App)
//
//  Created by User on 14.10.22.
//

import Cocoa

@main
class AppDelegate: NSObject, NSApplicationDelegate {
    func applicationShouldTerminateAfterLastWindowClosed(_: NSApplication)
        -> Bool
    {
        return true
    }
}
