var fullName = '仁和 活貴';
console.log(fullName); // 仁和 活貴
var tokens = fullName.split(' ');
console.log(tokens);
// 姓が表示される
console.log(tokens[0]); // 仁和
// しかし外国人の場合は・・・？
var foreignFullName = 'john smith';
var foreginTokens = foreignFullName.split(' ');
// 名が表示されてしまう
console.log(foreginTokens[0]); // john
// そこでオブジェクト指向を用いる
var FullName = /** @class */ (function () {
    function FullName(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(FullName.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FullName.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    return FullName;
}());
var fullNameInstance = new FullName('山田', '太郎');
console.log(fullNameInstance.lastName);
