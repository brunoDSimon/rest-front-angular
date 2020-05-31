import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';    
import {map, catchError} from 'rxjs/operators'
import { Service } from 'src/app/shared/service/service';
import { DateFormatPipe } from 'ngx-moment';
@Injectable({
  providedIn: 'root'
})
export class DashboardService extends Service{

constructor(
  private http: HttpClient,
  private dateFormatPipe: DateFormatPipe,
) {super() }



  public sumGroupMonthCompanies():Observable<any>{
    return this.http.get(`http://localhost:3333/bead/sumGroupMonthCompanies`).pipe(
      map((res) =>{
        return res;
      }),catchError((error) =>{
        throw console.error('sumGroupMonthCompanies');
      })
    )
  }

  public sumGroupMonth():Observable<any>{
    return this.http.get(`http://localhost:3333/bead/sumGroupMonth`).pipe(
      map((res)=>{
        return res;
      }),catchError((error) =>{
        throw console.error('sumGroupMonth');
      })
    )
  }

  public sumTotalGroupCompanies():Observable<any>{
    return this.http.get(`http://localhost:3333/bead/sumTotalGroupCompanies`).pipe(
      map((res) =>{
        return res
      }),catchError((error) =>{
        throw console.error('sumTotalGroupCompanies');
      })
    )
  }
}
