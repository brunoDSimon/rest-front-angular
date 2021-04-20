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
export class DashboardService extends Service{

constructor(
  private http: HttpClient,
  private dateFormatPipe: DateFormatPipe,
) {super() }



  public sumGroupMonthCompanies(periodo):Observable<any>{
    return this.http.get(environment.api_url+`bead/sumGroupMonthCompanies?periodo=${periodo}`).pipe(
      map((res) =>{
        return res;
      }),catchError((error) =>{
        throw console.error('sumGroupMonthCompanies');
      })
    )
  }

  public sumGroupMonth(periodo):Observable<any>{
    return this.http.get(environment.api_url+`bead/sumGroupMonth?periodo=${periodo}`).pipe(
      map((res)=>{
        return res;
      }),catchError((error) =>{
        throw console.error('sumGroupMonth');
      })
    )
  }

  public sumTotalGroupCompanies(periodo):Observable<any>{
    return this.http.get(environment.api_url+`bead/sumTotalGroupCompanies?periodo=${periodo}`).pipe(
      map((res) =>{
        return res
      }),catchError((error) =>{
        throw console.error('sumTotalGroupCompanies');
      })
    )
  }
}
