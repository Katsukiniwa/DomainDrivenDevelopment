var Money = /** @class */ (function () {
    function Money(amount, currency) {
        if (currency == null) {
            throw new Error('不正な値です');
        }
        this.amount = amount;
        this.currency = currency;
    }
    Money.prototype.add = function (money) {
        if (money == null) {
            throw new Error('値がnullです');
        }
        if (this.currency !== money.currency) {
            throw new Error("\u901A\u8CA8\u306E\u5358\u4F4D\u304C\u7570\u306A\u308A\u307E\u3059 " + this.currency + " " + money.currency);
        }
        return new Money(this.amount + money.amount, this.currency);
    };
    return Money;
}());
var myMoney = new Money(1000, 'JPY');
var allowance = new Money(3000, 'JPY');
var result = myMoney.add(allowance);
console.log(result);
