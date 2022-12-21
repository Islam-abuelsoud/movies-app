import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable ,BehaviorSubject } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _HttpClient:HttpClient ,private _Router:Router) { 
    if(localStorage.getItem('userToken') != null){
      this.setUserToken();
    }
  }
  userData= new BehaviorSubject(null);
  setUserToken()
  {
    let encode = JSON.stringify(localStorage.getItem('userToken'))
    let decode:any = jwtDecode(encode);
    this.userData.next(decode) ;
  }

  register(user_data:object):Observable<any>
  {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',user_data);
  }
  login(login_data:object):Observable<any>
  {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin ',login_data);
  }
  logout(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
     this._Router.navigate(['/login']); 
  };
}
