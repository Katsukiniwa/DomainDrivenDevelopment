import { couldStartTrivia } from 'typescript';
import { FullName } from './2-1';

let greet = 'こんにちは';
console.log(greet); // こんにちは

// 値を変更
greet = 'hello';
console.log(greet); // hello

const fullName = new FullName('Katsuki', 'Niwa');
// 値の変更を許容してしまっている
fullName.changeLastName('Sato');
console.log(fullName.lastName); // Sato

// ValueObjectを変更する方法
let fullNameObject = new FullName('Taro', 'Yamada');
// 変数と同じく代入操作でしか変更を表現できない
fullNameObject = new FullName('Kanta', 'Suzuki');

const fullNameA = new FullName('Taro', 'Yamada');
const fullNameB = new FullName('Taro', 'Yamada');
// 別々のインスタンスを比較
// インスタンスを構成する属性が等価なのでtrue
console.log(fullNameA.equals(fullNameB)) // true

// 属性を取り出して比較
const compareResult = fullNameA.firstName === fullNameB.firstName && fullNameA.lastName === fullNameB.lastName;
console.log(compareResult); // true
