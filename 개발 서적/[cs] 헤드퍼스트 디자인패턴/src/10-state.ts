interface State {
  insertQuarter(): void;
  ejectQuarter(): void;
  turnCrank(): void;
  dispense(): void;
}

class SoldOutState implements State {
  private gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter() {
    console.log('매진되었습니다.');
  }

  ejectQuarter() {
    console.log('매진되었습니다.');
  }

  turnCrank() {
    console.log('매진되었습니다.');
  }

  dispense() {
    console.log('매진되었습니다.');
  }
}

class HasQuarterState implements State {
  private gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter() {
    console.log('동전은 한 개만 넣어주세요.');
  }

  ejectQuarter() {
    console.log('동전이 반환됩니다.');
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }

  turnCrank() {
    console.log('손잡이를 돌리셨습니다.');
    this.gumballMachine.setState(this.gumballMachine.getSoldState());
  }

  dispense() {
    console.log('알맹이가 나갈 수 없습니다.');
  }
}

class NoQuarterState implements State {
  private gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter() {
    console.log('동전을 넣으셨습니다.');
    this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
  }

  ejectQuarter() {
    console.log('동전을 넣어주세요.');
  }

  turnCrank() {
    console.log('동전을 넣어주세요.');
  }

  dispense() {
    console.log('동전을 넣어주세요.');
  }
}

class SoldState implements State {
  private gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter() {
    console.log('알맹이를 내보내고 있습니다.');
  }

  ejectQuarter() {
    console.log('이미 알맹이를 뽑으셨습니다.');
  }

  turnCrank() {
    console.log('손잡이는 한 번만 돌려주세요.');
  }

  dispense() {
    this.gumballMachine.releaseBall();
    if (this.gumballMachine.getCount() > 0) {
      this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    } else {
      console.log('더 이상 알맹이가 없습니다.');
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    }
  }
}

class GumballMachine {
  private soldOutState: State;
  private noQuarterState: State;
  private hasQuarterState: State;
  private soldState: State;

  private state: State;
  private count = 0;

  constructor(numberGumballs: number) {
    this.soldOutState = new SoldOutState(this);
    this.noQuarterState = new NoQuarterState(this);
    this.hasQuarterState = new HasQuarterState(this);
    this.soldState = new SoldState(this);

    this.count = numberGumballs;
    if (numberGumballs > 0) {
      this.state = this.noQuarterState;
    } else {
      this.state = this.soldOutState;
    }
  }

  insertQuarter() {
    this.state.insertQuarter();
  }

  ejectQuarter() {
    this.state.ejectQuarter();
  }

  turnCrank() {
    this.state.turnCrank();
    this.state.dispense();
  }

  setState(state: State) {
    this.state = state;
  }

  releaseBall() {
    console.log('알맹이를 내보내고 있습니다.');
    if (this.count !== 0) {
      this.count--;
    }
  }

  getCount() {
    return this.count;
  }

  getSoldOutState() {
    return this.soldOutState;
  }

  getNoQuarterState() {
    return this.noQuarterState;
  }

  getHasQuarterState() {
    return this.hasQuarterState;
  }

  getSoldState() {
    return this.soldState;
  }
}
