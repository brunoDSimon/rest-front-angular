import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorage, SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class CompaniesDataService {
  @SessionStorage()
  private _companies: any = []

constructor(
  private http: HttpClient,
  private session: SessionStorageService,
) { }

  get companies(){
    return this._companies;
  }

  public setCompanies(_companies){
    this._companies.push(_companies);
  }

  public clear(){
    delete this._companies;

    this._companies = []
  }
}
