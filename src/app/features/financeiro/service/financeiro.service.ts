import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';    
import {map, catchError} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class FinanceiroService {

  constructor(
    private http: HttpClient,

  ) { }


  public criarTalao(body): Observable<any>{
    return this.http.post('http://localhost:3333/beads', body, {headers: new HttpHeaders({'Content-Type': 'application/json'})}).pipe(
      map(res =>{
        return res
      }),catchError((error) =>{
        throw console.error('error ao criar talao');
      })
    )
  }
  public getTalao():Observable<any>{
    return this.http.get('http://localhost:3333/beads/1/2020-03-24/2020-03-25',{headers: new HttpHeaders({'Content-Type': 'application/json'})}).pipe(
      map((res) =>{
        return Object(res);
      })
    )
  }




  // VER USUARIOS DISPONIVEIS
  public getUser(){
    return this.http.get('http://localhost:3333/user',{headers: new HttpHeaders({'Content-Type': 'application/json'})}).pipe(
      map((res) =>{
        return Object(res);
      }),catchError((error) =>{
        throw console.error('error ao listar usuario');
      })
    )
  }


  // VER EMPRESAS CADASTRADAS
  public getCompanies(){
    return this.http.get('http://localhost:3333/companies',{headers: new HttpHeaders({'Content-Type': 'application/json'})}).pipe(
      map((res) =>{
        return Object(res);
      }),catchError((error) =>{
        throw console.error('error ao listar companies');
      })
    )
  }
}