import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';    
import {map, catchError} from 'rxjs/operators'
import { Service } from 'src/app/shared/service/service';
import { DateFormatPipe } from 'ngx-moment';
@Injectable({
  providedIn: 'root'
})
export class LoginService extends Service{

constructor(  
  private http: HttpClient,
  private dateFormatPipe: DateFormatPipe,
) {super() }


  public auth(body): Observable<any>{
    return this.http.post(`http://localhost:3333/auth`,body, {headers: this.headers}).pipe(
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
}
