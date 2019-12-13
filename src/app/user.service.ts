import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

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
}
