import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-producao',
  templateUrl: './listar-producao.component.html',
  styleUrls: ['./listar-producao.component.scss']
})
export class ListarProducaoComponent implements OnInit {

  private _currentYear = new Date(new Date().setFullYear(new Date().getFullYear())).getFullYear();
  private _listYear: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.filterYear();
  }
  get year(){
    return this._listYear;
  }
  get currentYear(){
    return this._currentYear
  }

  private filterYear(){
    const date = new Date(new Date().setFullYear(new Date().getFullYear()));
    let filter = {year: date.getFullYear()};
    this._listYear.push(filter);

    for(let i = 0; i < 4; i++){
      date.setFullYear(date.getFullYear() -1);
      filter = {year: date.getFullYear()};
      this._listYear.push(filter);
    }
  }
  public changeFilterYear(year){
    console.log(year);

    const date = new Date;
    date.setFullYear(year);
    this._currentYear = year
  }

}
