import Foundation

@objc(BrightnessModule)
class BrightnessModule: NSObject {
  @objc
  func getBrightness(_ resolve: RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock){
    resolve(UIScreen.main.brightness)
  }
  
  @objc
  func setBrightness(_ brightness: CGFloat) {
    print("Setting brightness to \(brightness)")
    DispatchQueue.main.async {
      UIScreen.main.brightness = brightness
    }
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc
  func constantsToExport() -> [AnyHashable: Any]! {
    return [
      "STRING_VALUE": "Hello World",
      "NUMBER_VALUE": 15
    ]
  }
}
