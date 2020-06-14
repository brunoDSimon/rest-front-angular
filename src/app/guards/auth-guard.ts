import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../features/login/service/login.service';
import { UsersDataService } from '../shared/service/UsersData.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(
  private loginService: LoginService,
  private userData: UsersDataService,
  private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):Observable<boolean> | boolean{
    if(this.userData.auth.length){
      return true
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
