import { Component, OnInit } from '@angular/core';
import { FinanceiroService } from '../../service/financeiro.service';
import { CompaniesDataService } from 'src/app/shared/service/CompaniesData.service';
@Component({
  selector: 'app-listar-producao',
  templateUrl: './listar-producao.component.html',
  styleUrls: ['./listar-producao.component.scss']
})
export class ListarProducaoComponent implements OnInit {
  private _listUser: any[];
  private _listCompanies: any[];
  private _listProducaoo: any[];
  private _currentYear = new Date(new Date().setFullYear(new Date().getFullYear())).getFullYear();
  private _listYear: any[] = [];
  private _name: any;
  private _nameCompany: any;
  constructor(
    private financeiroService: FinanceiroService,
    private companiesData: CompaniesDataService
  ) { }

  ngOnInit(){
    if(this.companiesData.companies.length){
      this.getProducao();
      this.getListUser();
      this.filterYear();
      this._listCompanies = this.companiesData.companies[0]
    }else{
      this.filterYear();
      this.getListUser();
      this.getListCompanies();
      this.getProducao();
    }
  }
  get year(){
    return this._listYear;
  }
  get currentYear(){
    return this._currentYear
  }
  get listUser(){
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
  get listProducao(){
    return this._listProducaoo;
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
      this._listUser = res.data;
      // console.log(this._listUser)
    })
  }
  public getListCompanies(){
    this.financeiroService.getCompanies().subscribe((res) =>{
      this.companiesData.setCompanies(res.data);
      this._listCompanies =res.data;
      console.log(this._listCompanies)
    })
  }

  public getProducao(){
    this.financeiroService.getTalao().subscribe((res) =>{
      this._listProducaoo = res.data
    })
  }
}