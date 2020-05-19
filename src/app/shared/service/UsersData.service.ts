import { Injectable } from '@angular/core';
import { SessionStorageService, SessionStorage } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  @SessionStorage()
  private _userInfo:any [] = this.session.retrieve('companies');
  
  @SessionStorage()
  private _auth: any = this.session.retrieve('auth');
constructor(
  private session: SessionStorageService,
) { }
get userInfo(){
  return this._userInfo
}
get auth(){
  return this._auth
}
public setUserInfo(userInfo){
  this.session.store('userInfo', userInfo)
}
public setToken(auth){
  this.session.store('auth', auth)
}
}
