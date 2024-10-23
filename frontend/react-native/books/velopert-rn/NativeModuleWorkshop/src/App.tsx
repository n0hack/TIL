import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import ToastModule from './ToastModule';
import AlertModule, { BrightnessModule } from './Alert';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Button
        title="Press me"
        onPress={() => {
          // AlertModule?.alert('');
          console.log(BrightnessModule?.getBrightness());
          BrightnessModule?.setBrightness(0.5);
          console.log(BrightnessModule?.NUMBER_VALUE);
          console.log(BrightnessModule?.STRING_VALUE);
          // ToastModule.show('Hello, world!', ToastModule.SHORT);
        }}
      />
    </SafeAreaView>
  );
}

export default App;
