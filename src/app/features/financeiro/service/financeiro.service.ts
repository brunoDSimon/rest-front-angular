import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';    
import {map, catchError} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class FinanceiroService {

  constructor(
    private http: HttpClient,
  ) { }

  // CRIA UM TALAO
  public criarTalao(body): Observable<any>{
    return this.http.post('http://localhost:3333/beads', body, {headers: new HttpHeaders({'Content-Type': 'application/json'})}).pipe(
      map(res =>{
        return res
      }),catchError((error) =>{
        throw console.error('error ao criar talao');
      })
    )
  }

  // VER A PRODUCAO
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

  // verificar se empresa é existente
  public checkCompanie(cnpj: any){
    return this.http.get('http://localhost:3333/companies/verificarCNPJ/'+cnpj).pipe(
      map((res) =>{
        return Object(res);
      })
    )
  }
  
  // criar empresa
  public createCompany(body){
    return this.http.post('http://localhost:3333/companies',body,{headers: new HttpHeaders({'Content-Type': 'application/json'})}).pipe(
      map((res) =>{
        return res
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
