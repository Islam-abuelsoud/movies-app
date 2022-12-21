import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl ,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  error = '';
  constructor(private _AuthService:AuthService , private _Router:Router) { }
  loginForm:FormGroup =new FormGroup({
    email:new FormControl(null , [Validators.required, Validators.email]),
    password:new FormControl(null, [Validators.required ,Validators.pattern(/^[a-z][A-z]{2,5}$/)])
  })
  loginInfo(info:FormGroup){
    this._AuthService.login(info.value).subscribe((res)=>{
      if(res.message == 'success'){
        localStorage.setItem('userToken', res.token)
        this._AuthService.setUserToken()
        this._Router.navigate(['/home']);
      }else{
        this.error = 'login is wrong'
      };
    });
    
  }

  ngOnInit(): void {
  }

}
