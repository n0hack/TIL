interface Observable {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObservers(): void;
}

interface Observer {
  update(temp: number, humidity: number, pressure: number): void;
}

interface DisplayElement {
  display(): void;
}

class WeatherData implements Observable {
  private observers: Observer[] = [];
  private temperature: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;

  registerObserver(o: Observer) {
    this.observers.push(o);
  }

  removeObserver(o: Observer) {
    const index = this.observers.findIndex((observer) => observer === o);
    this.observers.splice(index, 1);
  }

  notifyObservers() {
    this.observers.forEach((observer) => observer.update(this.temperature, this.humidity, this.pressure));
  }

  // 기상청으로부터 갱신된 측정값을 받아옴
  measurementsChanged() {
    this.notifyObservers();
  }

  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;

    this.measurementsChanged();
  }
}

class CurrentConditionsDisplay implements Observer, DisplayElement {
  private temperature: number = 0;
  private humidity: number = 0;
  private weatherData: Observable;

  constructor(weatherData: Observable) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  display() {
    console.log(`현재 상태: ${this.temperature}F degrees and ${this.humidity}% humidity`);
  }
}

const weatherData = new WeatherData();
const currentDisplay = new CurrentConditionsDisplay(weatherData);
const currentDisplay2 = new CurrentConditionsDisplay(weatherData);
weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.removeObserver(currentDisplay2);
weatherData.setMeasurements(78, 90, 29.2);
