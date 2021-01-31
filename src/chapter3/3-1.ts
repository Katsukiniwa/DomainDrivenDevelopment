import { UserId } from './3-2';

class User {
  private readonly id: UserId; // 識別子
  private name: string;

  constructor(id: UserId, name: string) {
    if (name.length < 3) {
      throw new Error('ユーザ名は3文字以上です')
    }
    this.id = id;
    this.name = name;
  }

  public changeUserName(name: string) {
    if (name.length < 3) {
      throw new Error('ユーザ名は3文字以上です')
    }
    this.name = name;
  }

  public equals(other: User) {
    return this.id === other.id; // 比較はid(識別子)同士で行われる
  }
}
