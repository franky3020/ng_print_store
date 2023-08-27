import {User} from "../entity/User";
import jwt_decode from 'jwt-decode';

export class UserInfo {
  
  user: User|null = null;
  
  private static instance: UserInfo;
  static readonly TOKEN_NAME = "Print-Store-JWT";

  private constructor() {
  }

  static getInstance(): UserInfo {
    if (typeof UserInfo.instance === "undefined") {
      UserInfo.instance = new UserInfo();
    }

    // Auto set jwt on each time getting instance
    UserInfo.instance.setUserFromLocalStorageJWT();

    return UserInfo.instance;
  }

  setUserFromLocalStorageJWT() {
    let jwt: string | null = localStorage.getItem(UserInfo.TOKEN_NAME);
    if (jwt) {
      try {
        let jwtRes = jwt_decode(jwt);
        console.log(jwtRes);
        this.setUserFromJWT(jwt);
      } catch(err) {
        // Ignore error
      }
    }
  }

 
  setUserFromJWT(token: string) { // if token can't decode, throw Error

    let decode = jwt_decode(token) as {
      email: string,
      id: number,
      nickname: string
    };

    if (decode) {
    
      this.clearUserData();
      localStorage.setItem(UserInfo.TOKEN_NAME, token);
      this.setUserWhenlogin(decode.id, decode.nickname);
      
    } else {
      throw new Error("error when jwt decode");
    }

  }

  setUserWhenlogin(id: number, nickname: string) {
    this.user = new User(id, nickname);
    this.user.isLogin = true;
  }

  setUserWhenLogout() {
    this.clearUserData();
  }

  clearUserData() {
    this.user = null;
    localStorage.removeItem(UserInfo.TOKEN_NAME);
  }
  
}
