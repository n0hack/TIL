package com.nativemoduleworkshop

import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager

class ToastModulePackage : ReactPackage {
    override fun createViewManagers(p0: ReactApplicationContext): MutableList<ViewManager<View, ReactShadowNode<*>>> {
        return mutableListOf()
    }

    override fun createNativeModules(reactContext: ReactApplicationContext): MutableList<NativeModule> {
        return listOf(ToastModule(reactContext)).toMutableList();
    }
}