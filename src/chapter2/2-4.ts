class Money {
  private readonly amount: number;
  private readonly currency: string;

  constructor(amount: number, currency: string) {
    if (currency == null) {
      throw new Error('不正な値です');
    }
    this.amount = amount;
    this.currency = currency;
  }

  public add(money: Money) {
    if (this.currency !== money.currency) {
      throw new Error(`通貨の単位が異なります ${this.currency} ${money.currency}`);
    }
    return new Money(this.amount + money.amount, this.currency);
  }
}

const myMoney = new Money(1000, 'JPY');
const allowance = new Money(3000, 'JPY');
const result = myMoney.add(allowance);
console.log(result);
