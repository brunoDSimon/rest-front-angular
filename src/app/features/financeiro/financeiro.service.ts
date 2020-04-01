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
}
