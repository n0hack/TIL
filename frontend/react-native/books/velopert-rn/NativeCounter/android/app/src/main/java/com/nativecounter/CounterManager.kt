package com.nativecounter

import com.facebook.react.common.MapBuilder
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp

class CounterManager : SimpleViewManager<CounterView>() {
    override fun getName(): String {
        return REACT_CLASS
    }

    override fun createViewInstance(reactContext: ThemedReactContext): CounterView {
        return CounterView(reactContext)
    }

    @ReactProp(name = "leftButtonText")
    fun setLeftButtonText(view: CounterView, text: String) {
        view.setLeftButtonText(text)
    }

    @ReactProp(name = "rightButtonText")
    fun setRightButtonText(view: CounterView, text: String) {
        view.setRightButtonText(text)
    }

    @ReactProp(name = "value")
    fun setValue(view: CounterView, value: Int) {
        view.setValue(value)
    }

    companion object {
        const val REACT_CLASS = "Counter"
    }

    override fun getExportedCustomBubblingEventTypeConstants(): MutableMap<String, Any>? {
        val builder = MapBuilder.builder<String, Any>()
        return builder.put(
            "pressLeftButton",
            MapBuilder.of("phasedRegistrationNames", MapBuilder.of("bubbled", "onPressLeftButton"))
        ).put(
            "pressRightButton",
            MapBuilder.of("phasedRegistrationNames", MapBuilder.of("bubbled", "onPressRightButton"))
        ).build()
    }
}