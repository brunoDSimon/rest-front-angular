import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DateStruct } from 'src/app/shared/models/date-struct.model';
import * as moment from 'moment';
import { FinanceiroService } from '../../service/financeiro.service';
import { CompaniesDataService } from 'src/app/shared/service/CompaniesData.service';
import { DateFormatPipe } from 'ngx-moment';
import { CustomValidators } from 'ngx-custom-validators';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-producao-funcionario',
  templateUrl: './producao-funcionario.component.html',
  styleUrls: ['./producao-funcionario.component.scss']
})
export class ProducaoFuncionarioComponent implements OnInit {
  public formGroup: FormGroup;
  private _date: DateStruct = {
    fromDate: moment().toDate(),
    toDate: moment().toDate(),
  };
  private _listUser: any =[];
  private _listCompanies: any =[];
  private _listProducao: any =[];
  private _currentYear = new Date(new Date().setFullYear(new Date().getFullYear())).getFullYear();
  private _listYear: any[] = [];
  private _name: any;
  private _nameCompany: any;
  private _error: any;
  private _valorTotal: any;
  private _totalBolsas: any;
  private _totalDescont: any;

  constructor(
    private financeiroService: FinanceiroService,
    private companiesData: CompaniesDataService,
    private formBuilder: FormBuilder,
    private dateFormatPipe: DateFormatPipe,
    private spinner: NgxSpinnerService
  ) {

   }

  ngOnInit(){
    this.crieFormulario();
    this.verifiqueSessao();
  }
  get init(): any { return this._date; }

  get totalDescont(){
    return this._totalDescont;
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

  public crieFormulario(){
    this.formGroup = this.formBuilder.group({
      userID: new FormControl(this._listUser,Validators.required),
      descont: ['',[ CustomValidators.number, Validators.required]],
      dateFinalNotNul: [false,[]]
    })
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
      this._listUser = res.data.users;
      this.companiesData.setUsers(res.data.users);
      // console.log(this._listUser)
    }, (err) => {
      this._error = err.message;

    })
  }

  public getListCompanies(){
    this.financeiroService.getCompanies().subscribe((res) =>{
      this._listCompanies =res.companies;
      this.companiesData.setCompanies(res.companies);
    }, (err) => {
      this._error = err.message;

    })
  }

  public getProducao(){
    this.spinner.show();
    this._listProducao = [];
    this._valorTotal = null;
    this._totalBolsas = null;
    this._totalDescont = null;

    const dateEntry = this.dateFormatPipe.transform(this._date.fromDate, 'YYYY-MM-DD');
    const dateFinal = this.dateFormatPipe.transform(this._date.toDate, 'YYYY-MM-DD');
    const userID = this.formGroup.get('userID').value.id;
    const descont = this.formGroup.get('descont').value / 100;
    console.log(this.formGroup.get('descont').value)
    const dateFinalNotNul = this.formGroup.get('dateFinalNotNul').value;
    console.log(dateEntry, dateFinal, userID, descont)

    this.financeiroService.getValoresFuncionario(userID,dateEntry,dateFinal,descont,dateFinalNotNul).subscribe((res) =>{
      this._listProducao = res.data.bead;
      this._valorTotal = res.data.sumValueTotal;
      this._totalBolsas = res.data.sumBags;
      this._totalDescont = res.data.descont;
      this.spinner.hide();
    }, (err) => {
      this._error = err.message;
      this.spinner.hide();
    } )
  }

  public pdf(res,dateEntry,dateFinal){
    const linkSource = 'data:application/pdf;base64,' +`${res}`;
    const downloadLink = document.createElement("a");
    const fileName =`${dateEntry}_a_+${dateFinal}.pdf`;
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();

    this.spinner.hide();
  }

  public geratePaymentUser(){
    this.spinner.show();
    const dateEntry = this.dateFormatPipe.transform(this._date.fromDate, 'YYYY-MM-DD');
    const dateFinal = this.dateFormatPipe.transform(this._date.toDate, 'YYYY-MM-DD');
    const userID = this.formGroup.get('userID').value.id;
    const descont = this.formGroup.get('descont').value / 100;
    console.log(dateEntry,dateFinal,userID,descont)
    this.financeiroService.geratePaymentUser(userID,dateEntry, dateFinal,descont).subscribe((res) =>{
     this.pdf(res.data.base64,dateEntry,dateFinal);
    },(error) =>{
      console.log(error);
      this.spinner.hide();
    })
  }

}
