//
//  SceneDelegate.swift
//  iOS (App)
//
//  Created by User on 14.10.22.
//

import UIKit

class SceneDelegate: UIResponder, UIWindowSceneDelegate {
    var window: UIWindow?

    func scene(
        _ scene: UIScene,
        willConnectTo _: UISceneSession,
        options _: UIScene.ConnectionOptions
    ) {
        guard let _ = (scene as? UIWindowScene) else {
            return
        }
    }
}
