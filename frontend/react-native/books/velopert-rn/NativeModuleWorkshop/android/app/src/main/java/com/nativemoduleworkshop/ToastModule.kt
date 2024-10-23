package com.nativemoduleworkshop

import android.widget.Toast
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod


class ToastModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName() = "ToastModule";

    override fun getConstants(): MutableMap<String, Any> {
        val constants: MutableMap<String, Any> =
            mutableMapOf("SHORT" to Toast.LENGTH_SHORT, "LONG" to Toast.LENGTH_LONG);
        return constants;
    }

    @ReactMethod
    fun show(message: String, duration: Int) {
        val toast = Toast.makeText(reactApplicationContext, message, duration);
        toast.show();
    }


}