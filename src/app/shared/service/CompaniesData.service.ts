import { Injectable } from '@angular/core';
import { SessionStorageService, SessionStorage } from 'ngx-store-9';

@Injectable({
  providedIn: 'root'
})
export class CompaniesDataService {
  @SessionStorage()
  private _companies:any =[];
constructor(
  private session: SessionStorageService,
) { }

  get companies(){
    return this._companies;
  }
  
  public setCompanies(_companies){
    this._companies.push(_companies)
  }
  public clear(){
    delete this._companies;
  }
}
