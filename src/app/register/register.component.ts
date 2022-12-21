import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService:AuthService , private _router:Router) { }

  registerForm:FormGroup = new FormGroup({
    first_name:new FormControl(null, [Validators.required ,Validators.minLength(3), Validators.maxLength(8)]),
    last_name:new FormControl(null,[Validators.required ,Validators.minLength(3), Validators.maxLength(10)]),
    age:new FormControl(null,[Validators.required ,Validators.min(16), Validators.max(80)]),
    email:new FormControl(null, [Validators.required , Validators.email] ),
    password:new FormControl(null,[ Validators.required , Validators.pattern(/^[a-z][A-z]{2,5}$/)]),
  })
  error = '';
  registerInfo(info:FormGroup){
    this._AuthService.register(info.value).subscribe((res)=>{
      if(res.message == 'success'){
        this._router.navigate(['/login'])
      }else{
        this.error = 'email is already registerd'
      }
    });
  }

  ngOnInit(): void {
  }

}
