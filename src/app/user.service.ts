import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://reqres.in/api/users";
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.url);
  }

  getUsersByPage(pageNumber){
    console.log("in get users by page " + pageNumber)
    return this.http.get(this.url+"?page="+pageNumber);
  }

  getUsersById(userId) {
    console.log("this is in user id" + this.url+"/"+userId)
    return this.http.get(this.url+"/"+ userId);
  }
}
