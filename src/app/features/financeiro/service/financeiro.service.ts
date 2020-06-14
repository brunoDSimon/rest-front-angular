import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';    
import {map, catchError} from 'rxjs/operators'
import { Service } from 'src/app/shared/service/service';
import { DateFormatPipe } from 'ngx-moment';
import { environment } from '../../../../environments/environment';

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
    return this.http.post(environment.api_url+'beads', body, {headers: this.headers}).pipe(
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
      return this.http.get(environment.api_url+`beads?`+filtro,{headers: this.headers}).pipe(
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
  public getUser():Observable<any>{
    return this.http.get(environment.api_url+'user',{headers: this.headers}).pipe(
      map((res) =>{
        return res;
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
    return this.http.get(environment.api_url+'companies/verificarCNPJ/'+cnpj).pipe(
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
    return this.http.post(environment.api_url+'companies',body,{headers: this.headers}).pipe(
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
    return this.http.get(environment.api_url+'companies',{headers: this.headers}).pipe(
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
    return this.http.get(environment.api_url+'pdf?'+filtro, {headers: this.headers}).pipe(
      map((res) =>{
        return res;
      },(error)=>{
        throw this.handleError(error);
      })
    )
  }
  public totalSumPeriod(dateEntry: any, dateFinal: any):Observable<any>{
    const filter ={
      dateEntry: dateEntry,
      dateFinal: dateFinal,
    }
    const filtro = new URLSearchParams(filter).toString();
    return this.http.get<Response>(environment.api_url+'bead/totalSumPeriod?'+filtro,{headers: this.headers}).pipe(
      map((response) =>{
        return response;
      },catchError(
        (error: any) => {
          throw this.handleError(error);
        }
      )
      )
    )
  }
}
