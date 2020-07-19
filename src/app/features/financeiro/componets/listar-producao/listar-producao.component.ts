import { Component, OnInit } from '@angular/core';
import { FinanceiroService } from '../../service/financeiro.service';
import { CompaniesDataService } from 'src/app/shared/service/CompaniesData.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DateStruct } from 'src/app/shared/models/date-struct.model';
import * as moment from 'moment';
import { DateFormatPipe } from 'ngx-moment';
import { CustomValidators } from 'ngx-custom-validators';
@Component({
  selector: 'app-listar-producao',
  templateUrl: './listar-producao.component.html',
  styleUrls: ['./listar-producao.component.scss']
})
export class ListarProducaoComponent implements OnInit {
  public formGroup: FormGroup;
  public formDescont: FormGroup;
  private _date: DateStruct = {
    fromDate: moment().toDate(),
    toDate: moment().toDate(),
  };
  private _listUser: any[];
  private _listCompanies: any[];
  private _listProducaoo: any[];
  private _currentYear = new Date(new Date().setFullYear(new Date().getFullYear())).getFullYear();
  private _listYear: any[] = [];
  private _name: any;
  private _nameCompany: any;
  private _error: any;
  private _valorTotal: number;
  private _totalBolsas: number;
  private _openCompany: boolean = true;
  private _openFuncionario: boolean = false;

  constructor(
    private financeiroService: FinanceiroService,
    private companiesData: CompaniesDataService,
    private formBuilder: FormBuilder,
    private dateFormatPipe: DateFormatPipe,

  ) {
    this._date = {
      fromDate: moment(moment().toDate()).subtract(30, 'days').toDate(),
      toDate: moment(moment().toDate()).subtract(1, 'days').toDate(),
  };
   }

  ngOnInit(){
    this.formGroup = this.formBuilder.group({
      companyID: new FormControl(['', Validators.required]),
      userID: new FormControl(['']),
    })
    this.formDescont = this.formBuilder.group({
      descont: new FormControl(['', CustomValidators.number, Validators.required])
    })
      // console.log(this.companiesData.companies);
      this.filterYear();
      this.getListUser();
      this.getListCompanies();
      // this.getProducao();
  }
  get init(): any { return this._date; }

  get openCompany(){
    return this._openCompany;
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
    }, (err) => {
      this._error = err.message;

    })
  }
  public getListCompanies(){
    this.financeiroService.getCompanies().subscribe((res) =>{
      this.companiesData.setCompanies(res.data);
      this._listCompanies =res.data;
      // console.log(this._listCompanies)
    }, (err) => {
      this._error = err.message;

    })
  }

  public getProducao(){
    this._listProducaoo = [];
    this._valorTotal = null;
    this._totalBolsas = null;
    const dateEntry = this.dateFormatPipe.transform(this._date.fromDate, 'YYYY-MM-DD');
    const dateFinal = this.dateFormatPipe.transform(this._date.toDate, 'YYYY-MM-DD');
    const userID = this.formGroup.get('userID').value;
    const companyID = this.formGroup.get('companyID').value;
    // console.log(dateEntry, dateFinal, userID, companyID)
    this.financeiroService.getTalao(userID,dateEntry,dateFinal,companyID).subscribe((res) =>{
      this._listProducaoo = res.data.bead;
      this._valorTotal = res.data.sumValueTotal;
      this._totalBolsas = res.data.sumBags;
    }, (err) => {
      this._error = err.message;

    } )
  }

  public pdf(res,dateEntry,dateFinal){
    const linkSource = 'data:application/pdf;base64,' +`${res}`;
    const downloadLink = document.createElement("a");
    const fileName =`${dateEntry}_a_+${dateFinal}.pdf`;
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }

  public gerarPdf(){
    const dateEntry = this.dateFormatPipe.transform(this._date.fromDate, 'YYYY-MM-DD');
    const dateFinal = this.dateFormatPipe.transform(this._date.toDate, 'YYYY-MM-DD');
    const companyID = this.formGroup.get('companyID').value;
    console.log('entrou')
    this.financeiroService.getPdf(dateEntry, dateFinal,companyID).subscribe((res) =>{
     this.pdf(res.base64,dateEntry,dateFinal);
    },(error) =>{
      console.log(error);
    })
  }
  public geratePaymentUser(){
    const dateEntry = this.dateFormatPipe.transform(this._date.fromDate, 'YYYY-MM-DD');
    const dateFinal = this.dateFormatPipe.transform(this._date.toDate, 'YYYY-MM-DD');
    const userID = this.formGroup.get('userID').value;
    const descont = this.formDescont.get('descont').value;

    console.log('entrou')
    this.financeiroService.geratePaymentUser(userID,dateEntry, dateFinal,descont).subscribe((res) =>{
     this.pdf(res.data.base64,dateEntry,dateFinal);
    },(error) =>{
      console.log(error);
    })
  }
}
