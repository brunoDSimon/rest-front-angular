import { Component, OnInit,Input } from '@angular/core';
import { FinanceiroService } from '../../service/financeiro.service';
import { CompaniesDataService } from 'src/app/shared/service/CompaniesData.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormatPipe } from 'ngx-moment';
import * as moment from 'moment';
import { DateStruct } from 'src/app/shared/models/date-struct.model';
import { isNull } from 'util';

@Component({
  selector: 'app-producao-empresa',
  templateUrl: './producao-empresa.component.html',
  styleUrls: ['./producao-empresa.component.scss']
})
export class ProducaoEmpresaComponent implements OnInit {
  public formGroup: FormGroup;
  private _date: DateStruct = {
    fromDate: moment().toDate(),
    toDate: moment().toDate(),
  };
  private _listUser: any = [];
  private _listCompanies: any = [];
  private _listProducao: any = [];
  private _currentYear = new Date(new Date().setFullYear(new Date().getFullYear())).getFullYear();
  private _listYear: any[] = [];
  private _name: any;
  private _nameCompany: any;
  private _error: any;
  private _valorTotal: number;
  private _totalBolsas: number;
  private _openCompany: boolean = true;
  private _openFuncionario: boolean = false;
  private _url: any;

  public ngbAlert = {type: null, msg: null}
  constructor(
    private financeiroService: FinanceiroService,
    private companiesData: CompaniesDataService,
    private formBuilder: FormBuilder,
    private dateFormatPipe: DateFormatPipe,

  ) {}

  ngOnInit() {
    this.crieFormulario();
    this.verifiqueSessao();
  }
  get init(): any { return this._date; }

  get openCompany(){
    return this._openCompany;
  }
  get openFuncionario(){
    return this._openFuncionario
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
    return this._listProducao;
  }
  get totalBolsas(){
    return this._totalBolsas
  }
  get valorTotal(){
    return this._valorTotal;
  }
  get error(){
    return this._error;
  }
  public alterarPeriodo(datas){
    this._date = datas
  }
  public crieFormulario(){
    this.formGroup = this.formBuilder.group({
      companyID: new FormControl(this._listCompanies, Validators.required),
    })
  }
  public verifiqueSessao(){
    if(this.companiesData.companies.length){
      this._listCompanies = this.companiesData.companies[0];
    }else{
      this.getListCompanies();
    }

    if(this.companiesData.users.length){
      this._listUser = this.companiesData.users[0];
    }else{
      this.getListUser();
    }
  }
  // private filterYear(){
  //   const date = new Date(new Date().setFullYear(new Date().getFullYear()));
  //   let filter = {year: date.getFullYear()};
  //   this._listYear.push(filter);

  //   for(let i = 0; i < 4; i++){
  //     date.setFullYear(date.getFullYear() -1);
  //     filter = {year: date.getFullYear()};
  //     this._listYear.push(filter);
  //   }
  // }
  // public changeFilterYear(year){
  //   const date = new Date;
  //   date.setFullYear(year);
  //   this._currentYear = year
  // }

  public changeFilterName(name){
    this._name = name;
  }
  public changeFilterCompanyName(companyName){
    this._nameCompany = companyName
  }
  public getListUser(){
    this.financeiroService.getUser().subscribe((res) =>{
      this._listUser = res.data.users;
      this.companiesData.setUsers(res.data.users);
    }, (err) => {
      this._error = err.message;

    })
  }
  public getListCompanies(){
    this.financeiroService.getCompanies().subscribe((res) =>{
      this._listCompanies =res.companies;
      this.companiesData.setCompanies(res.companies);
      // console.log(this._listCompanies)
    }, (err) => {
      this._error = err.message;

    })
  }

  public getProducao(){
    this._listProducao = [];
    this._valorTotal = null;
    this._totalBolsas = null;
    const dateEntry = this.dateFormatPipe.transform(this._date.fromDate, 'YYYY-MM-DD');
    const dateFinal = this.dateFormatPipe.transform(this._date.toDate, 'YYYY-MM-DD');
    const userID = '';
    const companyID = this.formGroup.get('companyID').value.id;
    // console.log(dateEntry, dateFinal, userID, companyID)
    this.financeiroService.getTalao(userID,dateEntry,dateFinal,companyID).subscribe((res) =>{
      this._listProducao = res.data.bead;
      this._valorTotal = res.data.sumValueTotal;
      this._totalBolsas = res.data.sumBags;
    }, (err) => {
      this._error = err.message;

    } )
  }


  public gerarPdf(){
    const dateEntry = this.dateFormatPipe.transform(this._date.fromDate, 'YYYY-MM-DD');
    const dateFinal = this.dateFormatPipe.transform(this._date.toDate, 'YYYY-MM-DD');
    const companyID = this.formGroup.get('companyID').value.id;
    console.log(this.formGroup.get('companyID'))
    this.financeiroService.getPdf(dateEntry, dateFinal,companyID).subscribe((res) =>{
     const linkSource = 'data:application/pdf;base64,' +`${res.base64}`;
     const downloadLink = document.createElement("a");
     const fileName = 'relatorio_de_pagamento.pdf';
     downloadLink.href = linkSource;
     downloadLink.download = fileName;
     downloadLink.click();
    },(error) =>{
      this.ngbAlert.msg = error
      this.ngbAlert.type = 'danger';
    })
  }
  public close(){
    this.ngbAlert = {type: null, msg: null}
  }
  public url(aux){
    let url = `https://frontend-empresa.herokuapp.com/saida/${aux}`
    return url
  }
}


