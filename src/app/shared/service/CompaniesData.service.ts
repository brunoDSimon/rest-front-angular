import { Injectable } from '@angular/core';
import { SessionStorageService, SessionStorage } from 'ngx-store-9';

@Injectable({
  providedIn: 'root'
})
export class CompaniesDataService {
  // @SessionStorage()
  private _companies:any =[];
  // @SessionStorage()
  private _users:any =[];
constructor(
  private session: SessionStorageService,
) { }

  get companies(){
    return this._companies;
  }

  get users(){
    return this._users;
  }

  public setCompanies(_companies){
    this._companies.push(_companies)
  }

  public setUsers(_users){
    this._users.push(_users)
  }

  public clear(){
    delete this._companies;
    delete this._users;

    this._companies = [];
    this._users     = [];
  }
}
