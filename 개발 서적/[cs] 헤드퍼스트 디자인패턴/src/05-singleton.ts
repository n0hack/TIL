class Singleton {
  static singleton: Singleton = new Singleton();

  static getInstance() {
    return this.singleton;
  }

  hi() {
    console.log('hi');
  }
}

Singleton.getInstance().hi();
