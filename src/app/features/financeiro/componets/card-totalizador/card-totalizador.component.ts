import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-totalizador',
  templateUrl: './card-totalizador.component.html',
  styleUrls: ['./card-totalizador.component.scss']
})
export class CardTotalizadorComponent implements OnInit {
  private _currentYear = new Date(new Date().setFullYear(new Date().getFullYear())).getFullYear();
  private _listYears: any[] = [];

  constructor() { }

  ngOnInit() {
    this.filterYears();



   
  }
  get currentYear() {
    return this._currentYear;
  }

  get years() {
    return this._listYears;
  }
  public changeFilter(year) {
    this._currentYear = year;
  }
  private filterYears() {
    const date = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
    let filter = { year: date.getFullYear() };
    this._listYears.push(filter);

    for (let i = 0; i < 6; i++) {
      date.setFullYear(date.getFullYear() - 1);
      filter = { year: date.getFullYear() };
      this._listYears.push(filter);
    }
  }
}
