type Maybe<T> = T | null;

interface Command {
  execute(): void;
}

class Light {
  on() {
    console.log('Light on');
  }
  off() {
    console.log('Light off');
  }
}

class LightOnCommand implements Command {
  constructor(public light: Light) {}

  execute(): void {
    this.light.on();
  }
}

class GarageDoor {
  up() {
    console.log('GarageDoor up');
  }
  down() {
    console.log('GarageDoor down');
  }
}

class GarageDoorOpenCommand {
  constructor(public garageDoor: GarageDoor) {}

  execute(): void {
    this.garageDoor.up();
  }
}

class SimpleRemoteControl {
  slot: Maybe<Command> = null;

  setCommand(command: Command) {
    this.slot = command;
  }

  buttonWasPressed() {
    this.slot?.execute();
  }
}

const remote = new SimpleRemoteControl(); // Invoker
const light = new Light(); // Receiver
const lightOn = new LightOnCommand(light); // Command

remote.setCommand(lightOn);
remote.buttonWasPressed();

const garageDoor = new GarageDoor();
const garageDoorOpen = new GarageDoorOpenCommand(garageDoor);

remote.setCommand(garageDoorOpen);
remote.buttonWasPressed();
