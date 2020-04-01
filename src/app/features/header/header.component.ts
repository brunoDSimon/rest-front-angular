import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private _open:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  get open(){
    return this._open
  }
  public abri(){
    return this._open =! this._open
  }
}
