class User {
  private name: string;

  constructor(name: string) {
    if (name.length < 3) {
      throw new Error('ユーザ名は3文字以上です')
    }
    this.name = name;
  }

  public changeName(name: string) {
    if (name.length < 3) {
      throw new Error('ユーザ名は3文字以上です')
    }
    this.name = name;
  }
}
