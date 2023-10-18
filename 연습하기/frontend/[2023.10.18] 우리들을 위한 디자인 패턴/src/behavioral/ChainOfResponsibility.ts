namespace ChainOfResponsibility {
  abstract class Account {
    protected successor?: Account;
    protected balance: number = 0;

    public setNext(account: Account): void {
      this.successor = account;
    }

    public pay(amountToPay: number): void {
      if (this.canPay(amountToPay)) {
        console.log(`Paid ${amountToPay} using ${this.constructor.name}`);
      } else if (this.successor) {
        console.log(`Cannot pay using ${this.constructor.name}. Proceeding ..`);
        this.successor.pay(amountToPay);
      } else {
        throw new Error('None of the accounts have enough balance');
      }
    }

    public canPay(amount: number): boolean {
      return this.balance >= amount;
    }
  }

  class Bank extends Account {
    constructor(balance: number) {
      super();
      this.balance = balance;
    }
  }

  class Paypal extends Account {
    constructor(balance: number) {
      super();
      this.balance = balance;
    }
  }

  class Bitcoin extends Account {
    constructor(balance: number) {
      super();
      this.balance = balance;
    }
  }

  const bank = new Bank(100);
  const paypal = new Paypal(200);
  const bitcoin = new Bitcoin(300);

  bank.setNext(paypal);
  paypal.setNext(bitcoin);

  bank.pay(259);
}
