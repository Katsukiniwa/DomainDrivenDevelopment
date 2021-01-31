"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var UserId = /** @class */ (function () {
    function UserId(value) {
        this.value = value;
    }
    return UserId;
}());
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
    // 重複を確認するメソッド
    // インスタンス自身に重複しているかどうかを問うのは不自然
    User.prototype.Exists = function (user) {
        return this.name === user.name;
    };
    return User;
}());
exports.User = User;
