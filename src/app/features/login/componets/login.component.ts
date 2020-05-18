import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';
import { LoginService } from '../service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private _error: any


  public formGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      email: ['', CustomValidators.email],
      password: ['', Validators.required]
    })
  }

  public login(){
    const body ={
      "email":    this.formGroup.get('email').value,
      "password": this.formGroup.get('password').value
    }
    this.loginService.auth(body).subscribe((res) =>{
      console.log(res)
    },(error) =>{
      console.error(error)
    })
  }
}