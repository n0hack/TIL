package com.nativecounter

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
import java.util.Collections

class CounterPackage : ReactPackage {
    override fun createNativeModules(p0: ReactApplicationContext): MutableList<NativeModule> {
        return Collections.emptyList()
    }

    override fun createViewManagers(p0: ReactApplicationContext): MutableList<ViewManager<*, *>> {
        val viewManagers = ArrayList<ViewManager<*, *>>()
        viewManagers.add(CounterManager())
        return viewManagers
    }
}