namespace AbstractFactory {
  // 구체적인 클래스를 지정하지 않고, 개별적이지만 관련된 팩토리들을 그룹화하는 패턴
  interface Door {
    getDescription(): void;
  }

  class WoodenDoor implements Door {
    getDescription(): void {
      console.log('I am a wooden door');
    }
  }

  class IronDoor implements Door {
    getDescription(): void {
      console.log('I am an iron door');
    }
  }

  // 문에 대한 설치 전문가
  interface DoorFittingExpert {
    getDescription(): void;
  }

  class Carpenter implements DoorFittingExpert {
    getDescription(): void {
      console.log('I can only fit wooden doors');
    }
  }

  class Welder implements DoorFittingExpert {
    getDescription(): void {
      console.log('I can only fit iron doors');
    }
  }

  // 추상 팩토리
  // 상호 의존성 또는 복잡한 생성 로직이 있는 경우 사용
  interface DoorFactory {
    makeDoor(): Door;
    makeFittingExpert(): DoorFittingExpert;
  }

  // 나무 문과 목수를 얻을 수 있는 나무 문 팩토리
  class WoodenDoorFactory implements DoorFactory {
    makeDoor(): Door {
      return new WoodenDoor();
    }

    makeFittingExpert(): DoorFittingExpert {
      return new Carpenter();
    }
  }

  const woodenFactory: DoorFactory = new WoodenDoorFactory();
  const door: Door = woodenFactory.makeDoor();
  const expert: DoorFittingExpert = woodenFactory.makeFittingExpert();
}
