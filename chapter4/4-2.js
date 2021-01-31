"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var UserService = /** @class */ (function () {
    function UserService() {
    }
    // 重複を確認するメソッド
    UserService.prototype.Exists = function (user) {
        /**
         * 例. RDB(MySQL)に問い合わせて同じユーザ名のユーザがいないかチェック
         * @returns { boolean } result 重複結果
         */
        // 実装が出来ないので仮置き
        return false;
    };
    return UserService;
}());
exports.UserService = UserService;
