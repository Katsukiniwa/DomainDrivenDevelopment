const fullName = '仁和 活貴';
console.log(fullName); // 仁和 活貴

const tokens = fullName.split(' ');
console.log(tokens);
// 姓が表示される
console.log(tokens[0]); // 仁和

// しかし外国人の場合は・・・？
const foreignFullName = 'john smith';
const foreginTokens = foreignFullName.split(' ');
// 名が表示されてしまう
console.log(foreginTokens[0]); // john

// そこでオブジェクト指向を用いる
class FullName {
  public _firstName: string;
  public _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }
}

const fullNameObject = new FullName('山田', '太郎');
console.log(fullNameObject.lastName) // 太郎
