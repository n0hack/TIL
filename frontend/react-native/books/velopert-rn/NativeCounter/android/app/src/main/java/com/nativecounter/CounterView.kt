package com.nativecounter

import android.view.LayoutInflater
import android.view.View
import android.widget.FrameLayout
import com.facebook.react.bridge.ReactContext
import com.facebook.react.uimanager.events.RCTModernEventEmitter
import com.nativecounter.databinding.CounterViewBinding

class CounterView(val context: ReactContext) : FrameLayout(context) {
    private val binding: CounterViewBinding

    init {
        val inflater = LayoutInflater.from(context)
        binding = CounterViewBinding.inflate(inflater, this, true)
        this.setupEvents()
    }

    fun setLeftButtonText(text: String){
        binding.button.text = text
    }

    fun setRightButtonText(text: String){
        binding.button2.text = text
    }

    fun setValue(value: Int){
        binding.textView.text = value.toString()
    }

    fun setupEvents(){
        val eventEmitter = context.getJSModule(RCTModernEventEmitter::class.java)
        binding.button.setOnClickListener {
            eventEmitter.receiveEvent(id, "pressLeftButton", null)
        }
        binding.button2.setOnClickListener {
            eventEmitter.receiveEvent(id, "pressLeftButton", null)
        }
    }
}