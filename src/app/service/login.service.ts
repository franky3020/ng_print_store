import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment";
import {JWTRes} from "../api-req-res/jwtRes";
import {LoginReq} from "../api-req-res/LoginReq";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // TODO: 需實做錯誤處理
  getJWT(email: string, password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const baseUrl = environment.api_test_url;
      const loginReq = new LoginReq(email, password);
      this.http.post<JWTRes>(baseUrl + '/api/user/login', loginReq).subscribe((res) => {
        return resolve(res.token);
      }, (error) => {
        return reject('error');
      });
    });
  }
}
