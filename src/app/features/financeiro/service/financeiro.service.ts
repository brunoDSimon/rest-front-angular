import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';    
import {map, catchError} from 'rxjs/operators'
import { Service } from 'src/app/shared/service/service';
import { DateFormatPipe } from 'ngx-moment';
@Injectable({
  providedIn: 'root'
})
export class FinanceiroService extends Service{

  constructor(
    private http: HttpClient,
    private dateFormatPipe: DateFormatPipe,

  ) {
    super()
   }

  // CRIA UM TALAO
  public criarTalao(body): Observable<any>{
    return this.http.post('http://localhost:3333/beads', body, {headers: this.headers}).pipe(
      map(res =>{
        return res
      }),catchError((error) =>{
        throw console.error('error ao criar talao');
      })
    )
  }

  // VER A PRODUCAO
  public getTalao( userID: any, dateEntry: any, dateFinal: any,companyID: any):Observable<any>{
    const filter ={
      dateEntry: dateEntry,
      dateFinal: dateFinal,
      userID: userID,
      companyID: companyID
    }
    // if(userID == "undefined" || null){
    //   delete filter.userID;
    // }
    const filtro = new URLSearchParams(filter).toString();
    // return this.http.get(`http://localhost:3333/beads/${userID}/${dateEntry}/${dateFinal}/${companyID}`,{headers: this.headers}).pipe(
      return this.http.get(`http://localhost:3333/beads?`+filtro,{headers: this.headers}).pipe(
      map((res) =>{
        return Object(res);
      },catchError(
        (error: any) => {
          throw this.handleError(error);
        }
      )
      )
    )
  }




  // VER USUARIOS DISPONIVEIS
  public getUser(){
    return this.http.get('http://localhost:3333/user',{headers: this.headers}).pipe(
      map((res) =>{
        return Object(res);
      },catchError(
        (error: any) => {
          throw this.handleError(error);
        }
      )
      )
    )
  }

  // verificar se empresa é existente
  public checkCompanie(cnpj: any){
    return this.http.get('http://localhost:3333/companies/verificarCNPJ/'+cnpj).pipe(
      map((res) =>{
        return Object(res);
      },catchError(
        (error: any) => {
          throw this.handleError(error);
        }
      )
      )
    )
  }
  
  // criar empresa
  public createCompany(body){
    return this.http.post('http://localhost:3333/companies',body,{headers: this.headers}).pipe(
      map((res) =>{
        return res
      },catchError(
        (error: any) => {
          throw this.handleError(error);
        }
      )
      )
    )
  }
  // VER EMPRESAS CADASTRADAS
  public getCompanies():Observable<any>{
    return this.http.get('http://localhost:3333/companies',{headers: this.headers}).pipe(
      map((res) =>{
        return Object(res);
      },catchError(
        (error: any) => {
          throw this.handleError(error);
        }
      )
      )
    )
  }

  public getPdf(dateEntry: any, dateFinal: any,companyID: any):Observable<any>{
    const filter ={
      dateEntry: dateEntry,
      dateFinal: dateFinal,
      companyID: companyID
    }
    const filtro = new URLSearchParams(filter).toString();
    return this.http.get('http://localhost:3333/pdf?'+filtro, {headers: this.headers}).pipe(
      map((res) =>{
        return res;
      },(error)=>{
        throw this.handleError(error);
      })
    )
  }
  public getTrabalho(){
    return this.http.get('http://localhost:3333/trabalho',{headers: this.headers}).pipe(
      map((res) =>{
        return Object(res);
      },catchError(
        (error: any) => {
          throw this.handleError(error);
        }
      )
      )
    )
  }
}
