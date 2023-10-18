// 복잡한 하위 시스템에 대한 단순화된 인터페이스를 제공하는 패턴
// 컴퓨터를 켤 때, 내부의 동작은 알 필요 없이, 전원 버튼만 누르면 켜지는 것처럼
namespace Facade {
  class Computer {
    public getElectricShock() {
      console.log('Ouch!');
    }

    public makeSound() {
      console.log('Beep beep!');
    }

    public showLoadingScreen() {
      console.log('Loading..');
    }

    public bam() {
      console.log('Ready to be used!');
    }

    public closeEverything() {
      console.log('Bup bup bup buzzzz!');
    }

    public sooth() {
      console.log('Zzzzz');
    }

    public pullCurrent() {
      console.log('Haaah!');
    }
  }

  class ComputerFacade {
    protected computer: Computer;

    constructor(computer: Computer) {
      this.computer = computer;
    }

    public turnOn() {
      this.computer.getElectricShock();
      this.computer.makeSound();
      this.computer.showLoadingScreen();
      this.computer.bam();
    }

    public turnOff() {
      this.computer.closeEverything();
      this.computer.pullCurrent();
      this.computer.sooth();
    }
  }

  const computer = new ComputerFacade(new Computer());
  computer.turnOn();
}
