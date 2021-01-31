"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var _4_2_1 = require("./4-2");
var mysql = require('mysql2');
// create the connection to database
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
});
var User = /** @class */ (function () {
    function User(name) {
        this.userId = new UserId(Math.random().toString(32).substring(2));
        this.name = name;
    }
    User.prototype.changeUserName = function (name) {
        this.name = name;
    };
    User.prototype.equals = function (other) {
        return this.userId === other.userId;
    };
    return User;
}());
exports.User = User;
var UserId = /** @class */ (function () {
    function UserId(value) {
        this.value = value;
    }
    return UserId;
}());
var UserName = /** @class */ (function () {
    function UserName(value) {
        if (value.length < 3) {
            throw new Error('ユーザ名は3文字以上です');
        }
        this.value = value;
    }
    return UserName;
}());
// ユーザ作成処理のクラス
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.prototype.createUser = function (userName) {
        var user = new User(new UserName(userName));
        var userService = new _4_2_1.UserService();
        if (userService.Exists(user)) {
            throw new Error(userName + "\u306F\u65E2\u306B\u767B\u9332\u6E08\u307F\u3067\u3059");
        }
        connection.query("insert into users (id, name) values (" + user.userId + ", " + userName + ")", function (err, results, fields) {
            console.log(results);
            console.log(fields);
        });
    };
    return Program;
}());
