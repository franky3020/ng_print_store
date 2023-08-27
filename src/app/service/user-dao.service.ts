import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../entity/User";
import {environment} from "../../environment";
import {GetUserNameRes} from "../api-req-res/getUserNameRes";

@Injectable({
  providedIn: 'root'
})
export class UserDaoService {

  constructor(private http: HttpClient) { }
  
  getUser(id: number): Promise<User> {

    return new Promise((resolve) => {
      const baseUrl = environment.api_test_url;
      this.http.get<GetUserNameRes>(baseUrl + '/api/user/' + id.toString()).subscribe((res) => {
        const name = res.userName;
        const user = new User(id, name);
        return resolve(user);
      })
    })
  }
}
