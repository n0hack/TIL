// 클라이언트에게 인스턴스화 로직을 노출하지 않고, 인스턴스를 생성할 수 있는 함수 또는 메서드를 제공하는 패턴
interface Door {
  getWidth(): number;
  getHeight(): number;
}

class WoodenDoor implements Door {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }
}

class DoorFactory {
  static makeDoor(width: number, height: number) {
    return new WoodenDoor(width, height);
  }
}

const door: Door = DoorFactory.makeDoor(100, 200);
const door2: Door = DoorFactory.makeDoor(50, 100);
