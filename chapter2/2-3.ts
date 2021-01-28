// 名を表すValueObject
export class FirstName {
  private readonly value: string;
  
  constructor(value: string) {
    if (value == null || value === '') {
      throw new Error('1文字以上である必要があります')
    }
    this.value = value;
  }
}

// 姓を表すValueObject
export class LastName {
  private readonly value: string;
  
  constructor(value: string) {
    if (value == null || value === '') {
      throw new Error('1文字以上である必要があります')
    }
    this.value = value;
  }
}

// 可能な限りValueObjectを利用したFullNameクラス
// しかし、これはやり過ぎ！という意見があっても不思議ではない
// もちろん要件次第ではある
export class FullName {
  private readonly firstName: FirstName;
  private readonly lastName: LastName;

  constructor(firstName: FirstName, lastName: LastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
