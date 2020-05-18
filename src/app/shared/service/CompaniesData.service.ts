import { Injectable } from '@angular/core';
import { SessionStorage, SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class CompaniesDataService {
  @SessionStorage()
  private _companies: [] = this.session.retrieve('companies');
constructor(
  private session: SessionStorageService,
) { }

  // public companies(){
   
  // }
  get companies(){
    return this._companies
  }
  public setCompanies(companies){
    this.session.store('companies', companies)
  }
  
  // public clear(){
  //   delete this._companies;

  //   this._companies = []
  // }
}
