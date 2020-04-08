import { Injectable } from '@angular/core';
import { SessionStorage, SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class CompaniesDataService {
  @SessionStorage()
  private _companies: any =[] ;
  private _teste: any =[];
constructor(
  private session: SessionStorageService,
) { }

  get companies(){
    return this._teste;
  }

  public setCompanies(_companies){
    this._teste = _companies;
  }
  
  public clear(){
    delete this._companies;

    this._companies = []
  }
}
