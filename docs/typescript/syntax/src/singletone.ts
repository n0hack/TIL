class AppState {
  counter = 0;
  private static instanceRef: AppState;
  private constructor() {}
  static getInstance(): AppState {
    if (AppState.instanceRef === undefined) {
      AppState.instanceRef = new AppState();
    }
    AppState.instanceRef.counter++;
    return AppState.instanceRef;
  }
}

const appState1 = AppState.getInstance();
console.log(appState1.counter);
const appState2 = AppState.getInstance();
console.log(appState2.counter);
