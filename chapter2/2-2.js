"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _2_1_1 = require("./2-1");
var greet = 'こんにちは';
console.log(greet); // こんにちは
// 値を変更
greet = 'hello';
console.log(greet); // hello
var fullName = new _2_1_1.FullName('Katsuki', 'Niwa');
// 値の変更を許容してしまっている
fullName.changeLastName('Sato');
console.log(fullName.lastName); // Sato
// ValueObjectを変更する方法
var fullNameObject = new _2_1_1.FullName('Taro', 'Yamada');
// 変数と同じく代入操作でしか変更を表現できない
fullNameObject = new _2_1_1.FullName('Kanta', 'Suzuki');
var fullNameA = new _2_1_1.FullName('Taro', 'Yamada');
var fullNameB = new _2_1_1.FullName('Taro', 'Yamada');
// 別々のインスタンスを比較
console.log(fullNameA.equals(fullNameB));
// 属性を取り出して比較
var compareResult = fullNameA.firstName === fullNameB.firstName && fullNameA.lastName === fullNameB.lastName;
console.log(compareResult);
