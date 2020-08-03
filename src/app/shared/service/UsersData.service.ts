import { Injectable } from '@angular/core';
import { CookiesStorageService, LocalStorageService, SessionStorageService, SharedStorageService, SessionStorage, LocalStorage } from 'ngx-store-9';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  @LocalStorage()
  private _userInfo:any = [];
  @LocalStorage()
  private _auth: any =  [];
  constructor(
   private router: Router,
  ) { }
  get userInfo(){
    return this._userInfo
  }
  get auth(){
    return this._auth
  }
  public setAuth(_auth){
    this._auth.push(_auth);
  }
  public setUserInfo(_userInfo){
    this._userInfo.push(_userInfo)
  }
  public clearAll(){
    this._auth = []
    this._userInfo = []

    this.router.navigate(['/login']);
  }
}
