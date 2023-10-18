// 프록시는 원본 객체의 인터페이스 역할을 하는 래퍼 객체이며,
// 단순 데이터 전송만 담당할 때도 있고, 때로는 데이터 전송을 할 때 추가 기능을 제공할 수도 있음
namespace ProxyPattern {
  interface Door {
    open(...args: any): void;
    close(): void;
  }

  class LabDoor implements Door {
    public open(): void {
      console.log('Opening lab door');
    }

    public close(): void {
      console.log('Closing the lab door');
    }
  }

  class SecuredDoor implements Door {
    protected door: Door;

    constructor(door: Door) {
      this.door = door;
    }

    open(password: string): void {
      if (this.authenticate(password)) {
        this.door.open();
      } else {
        console.log("Big no! It ain't possible.");
      }
    }

    authenticate(password: string): boolean {
      return password === '$ecr@t';
    }

    close(): void {
      this.door.close();
    }
  }

  const door = new SecuredDoor(new LabDoor());
  door.open('invalid'); // Big no! It ain't possible.

  door.open('$ecr@t'); // Opening lab door
  door.close(); // Closing lab door
}
