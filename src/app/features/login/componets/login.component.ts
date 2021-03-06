import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';
import { LoginService } from '../service/login.service';
import { UsersDataService } from 'src/app/shared/service/UsersData.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private _error: any
  private _logado: boolean;
  private _openError: boolean;
  public formGroup: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private userData: UsersDataService,
    private router: Router,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    console.log(this.userData.auth.length)
    if(this.userData.userInfo[0] != undefined){
      this.router.navigate(['/financeiro']);
      this._logado = true;
    }else{
      this.formGroup = this.formBuilder.group({
        email: ['', CustomValidators.email],
        password: ['', Validators.required]
      })
    }

  }
  get openError(){
    return this._openError
  }
  get logado(){
    return this._logado;
  }
  get error(){
    return this._error;
  }
  public login(){
    this.spinner.show();
    const body ={
      "email":    this.formGroup.get('email').value,
      "password": this.formGroup.get('password').value
    }
    this.loginService.auth(body).subscribe((res) =>{
      setTimeout(() => {this.spinner.hide();}, 5000);
      this.userData.setUserInfo(res.user);
      this.userData.setAuth(res.token);
      this._logado = true
      this.router.navigate(['/financeiro']);
      this._openError = false
      // this.spinner.hide();
    },(error) =>{
      this._openError = true
      this._error = error.error.status.messege
      setTimeout(() => {this.spinner.hide();}, 5000);
    })
  }
}
