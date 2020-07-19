import { Component, OnInit } from '@angular/core';
import { UsersDataService } from 'src/app/shared/service/UsersData.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private _open:boolean = false;
  private _logado:boolean = false;
  constructor(
    private userData: UsersDataService,
    private router: Router

  ) { }

  ngOnInit() {
    if(this.userData.auth.length){ 
      this._logado = true;
    }else{
      this._logado = false;
    }
  }
  get logado(){
    return this._logado
  }
  get open(){
    return this._open
  }
  public abri(){
    return this._open =! this._open
  }
  public sair(){
    this.userData.clearAll();
    this.router.navigate(['/login']);
  }
}
