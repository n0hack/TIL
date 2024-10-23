#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(BrightnessModule, NSObject)
RCT_EXTERN_METHOD(getBrightness: (RCTPromiseResolveBlock)resolve rejector: (RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(setBrightness: (CGFloat)brightness)
@end
