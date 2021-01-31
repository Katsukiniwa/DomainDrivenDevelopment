"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(id, name) {
        if (name.length < 3) {
            throw new Error('ユーザ名は3文字以上です');
        }
        this.id = id;
        this.name = name;
    }
    User.prototype.changeUserName = function (name) {
        if (name.length < 3) {
            throw new Error('ユーザ名は3文字以上です');
        }
        this.name = name;
    };
    User.prototype.equals = function (other) {
        return this.id === other.id; // 比較はid(識別子)同士で行われる
    };
    return User;
}());
