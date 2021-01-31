import { User } from './4-4';

export class UserService {
  // 重複を確認するメソッド
  public Exists(user: User): boolean {
    /**
     * 例. RDB(MySQL)に問い合わせて同じユーザ名のユーザがいないかチェック
     * @returns { boolean } result 重複結果
     */
    
    // 実装が出来ないので仮置き
    return false
  }
}
