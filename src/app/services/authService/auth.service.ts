import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from 'src/app/models/LoginModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';
import { TokenModel } from 'src/app/models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 apiUrl:string="https://localhost:44305/api/"
  constructor(private httpClient:HttpClient) { }

  //Observable olamasa da olur default olarak dönüyor
  login(user:LoginModel):Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"auth/login",user)
  }
  isAuthenticated(){
    if (localStorage.getItem("token")) {
      return true
    }
    else{
      return false
    }
  }

}
