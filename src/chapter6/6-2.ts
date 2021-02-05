class User {
  public id: UserId;
  public name: UserName;
  public mailAddress: MailAddress;

  constructor(name: UserName, mailAddress: MailAddress) {
    if (name.value.length < 3) {
      throw new Error('ユーザ名は3文字以上です')
    }
    if (name.value.length > 20) {
      throw new Error('ユーザ名は20文字以下です')
    }
    this.id = new UserId(Math.random().toString(32).substring(2));
    this.name = name;
    this.mailAddress = mailAddress;
  }

  public user(id: UserId, userName: UserName) {
    this.id = id;
    this.name = userName;
  }

  public changeUserName(name: UserName) {
    this.name = name;
  }

  public changeMailAddressName(mailAddress: MailAddress) {
    this.mailAddress = mailAddress;
  }

  public equals(other: User) {
    return this.id === other.id;
  }

  public Exists(user: User) {
    return this.name === user.name;
  }
}

class UserId {
  public value: string;

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

class MailAddress {
  public value: string;

  constructor(value: string) {
    this.value = value;
  }
}

class UserService {
  private readonly userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public exists(user: User) {
    const duplicateUser = this.userRepository.find(user.name);
    return duplicateUser != null;
  }
}

interface IUserRepository {
  find(id: UserId): User;
  findByName(name: UserName): User;
  save(user: User): void;
  delete(user: User): void;
}

class UserApplicationService {
  private readonly userRepository: IUserRepository;
  private readonly userService: UserService;

  constructor(userRepository: IUserRepository, userService: UserService) {
    this.userRepository = userRepository;
    this.userService = userService;
  }

  public register(name: string, mailAddress: string) {
    const user = new User(new UserName(name), new MailAddress(mailAddress));
    if (this.userService.exists(user)) {
      throw new Error('ユーザは既に存在しています')
    }
    this.userRepository.save(user);
  }

  public get(userId: string) {
    const targetId = new UserId(userId);
    const user = this.userRepository.find(targetId);
    const userData = new UserData(user);
    return userData;
  }

  public update(command: UserUpdateCommand) {
    const targetId = new UserId(command.id);
    const user = this.userRepository.find(targetId);
    
    const name = command.name;
    if (name != null) {
      const newUserName = new UserName(name);
      user.changeUserName(newUserName);
      if (this.userService.exists(user)){
        return new Error('ユーザは既に存在しています')
      }
    }
    
    const mailAddress = command.mailAddress;
    if (mailAddress != null) {
      const newMailAddress = new MailAddress(mailAddress);
      user.changeMailAddressName(newMailAddress);
    }
    
    this.userRepository.save(user);
  }
}

class UserData {
  public id: string;
  public name: string;
  // public mailAddress: string; 追加された属性

  /**
   * コンストラクタの引数にUserを指定することで今後Userにプロパティが増えても修正箇所を増やさなくて済む
   */
  constructor(source: User) {
    this.id = source.id.value;
    this.name = source.name.value;
    // this.mailAddress = source.mailAddress.value; 属性への代入処理
  }
}

// コマンドオブジェクトクラス
class UserUpdateCommand {
  private _id: string;
  private _name: string | null;
  private _mailAddress: string | null;

  // コンストラクタで名前やメールアドレスが任意であることを主張(nullを許容する)
  constructor(id: string, name: string | null = null, mailAddress: string | null = null) {
    this._id = id;
    this._name = name;
    this._mailAddress = mailAddress;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get mailAddress() {
    return this._mailAddress;
  }
}
