import { UserService } from './4-2';
const mysql = require('mysql2');

// テキトーな値を放り込んでます
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});

export class User {
  public userId: UserId;
  public name: UserName;

  constructor(name: UserName) {
    this.userId = new UserId(Math.random().toString(32).substring(2));
    this.name = name;
  }

  public changeUserName(name: UserName) {
    this.name = name;
  }

  public equals(other: User) {
    return this.userId === other.userId;
  }
}

class UserId {
  private value: string;

  constructor(value: string) {
    this.value = value;
  }
}

class UserName {
  public value: string;
  
  constructor(value: string) {
    if (value.length < 3) {
      throw new Error('ユーザ名は3文字以上です')
    }
    this.value = value;
  }
}

// ユーザ作成処理のクラス
class Program {
  public createUser(userName: string) {
    const user = new User(new UserName(userName));
    
    const userService = new UserService();
    
    if (userService.Exists(user)) {
      throw new Error(`${userName}は既に登録済みです`)
    }
    
    connection.query(
      `insert into users (id, name) values (${user.userId}, ${userName})`,
      (err: any, results: any, fields: any) => {
        console.log(results);
        console.log(fields);
      }
    );
  }
}
