import 'react-native';

declare module 'react-native' {
  interface NativeModulesStatic {
    ToastModule: {
      show: (message: string, duration: number) => void;
      SHORT: number;
      LONG: number;
    };
  }
}
