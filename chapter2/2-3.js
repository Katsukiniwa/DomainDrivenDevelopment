"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullName = exports.LastName = exports.FirstName = void 0;
// 名を表すValueObject
var FirstName = /** @class */ (function () {
    function FirstName(value) {
        if (value == null || value === '') {
            throw new Error('1文字以上である必要があります');
        }
        this.value = value;
    }
    return FirstName;
}());
exports.FirstName = FirstName;
// 姓を表すValueObject
var LastName = /** @class */ (function () {
    function LastName(value) {
        if (value == null || value === '') {
            throw new Error('1文字以上である必要があります');
        }
        this.value = value;
    }
    return LastName;
}());
exports.LastName = LastName;
// 可能な限りValueObjectを利用したFullNameクラス
// しかし、これはやり過ぎ！という意見があっても不思議ではない
// もちろん要件次第ではある
var FullName = /** @class */ (function () {
    function FullName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return FullName;
}());
exports.FullName = FullName;
