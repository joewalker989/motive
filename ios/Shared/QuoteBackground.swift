import SwiftUI
import UIKit

struct QuoteBackground: View {
    let scene: String
    var body: some View {
        GeometryReader { geometry in
            ZStack {
                Color(red: 0.08, green: 0.16, blue: 0.12)
                if let url = Bundle.main.url(forResource: PhotoScene.resourceNames[scene] ?? scene, withExtension: "jpg", subdirectory: "backgrounds"), let image = UIImage(contentsOfFile: url.path) {
                    Image(uiImage: image).resizable().scaledToFill().frame(width: geometry.size.width, height: geometry.size.height).clipped()
                }
                LinearGradient(colors: [.black.opacity(0.32), .black.opacity(0.68)], startPoint: .top, endPoint: .bottom)
            }
        }.accessibilityHidden(true)
    }
}
