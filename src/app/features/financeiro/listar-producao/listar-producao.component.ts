import { Component, OnInit } from '@angular/core';
import { FinanceiroService } from '../financeiro.service';
@Component({
  selector: 'app-listar-producao',
  templateUrl: './listar-producao.component.html',
  styleUrls: ['./listar-producao.component.scss']
})
export class ListarProducaoComponent implements OnInit {
  private _listUser: any[];
  private _listCompanies: any[];
  private _currentYear = new Date(new Date().setFullYear(new Date().getFullYear())).getFullYear();
  private _listYear: any[] = [];
  private _name: any;
  private _nameCompany: any;
  constructor(
    private financeiroService: FinanceiroService,

  ) { }

  ngOnInit(): void {
    this.filterYear();
    // this.getListUser();
    this.getListCompanies();
  }
  get year(){
    return this._listYear;
  }
  get currentYear(){
    return this._currentYear
  }
  get listUser(){
    console.log(this._listUser)
    return this._listUser
  }
  get name(){
    return this._name;
  }
  get nameCompany(){
    return this._nameCompany
  }
  get listCompanies(){
    return this._listCompanies;
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
    // console.log(year);

    const date = new Date;
    date.setFullYear(year);
    this._currentYear = year
  }

  public changeFilterName(name){
    // console.log(name);
    this._name = name;
  }
  public changeFilterCompanyName(companyName){
    this._nameCompany = companyName
  }
  public getListUser(){
    this.financeiroService.getUser().subscribe((res) =>{
      this._listUser.push(res);
      // console.log(this._listUser)
    })
  }
  public getListCompanies(){
    this.financeiroService.getCompanies().subscribe((obj) =>{
      this._listCompanies =obj.data;
      console.log(this._listCompanies, 'ob')
    })
  }
}
