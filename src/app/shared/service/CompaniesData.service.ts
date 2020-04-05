import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompaniesDataService {
  private _companies: any = []

constructor(
  private http: HttpClient,
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
