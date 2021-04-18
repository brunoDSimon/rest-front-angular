import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DateFormatPipe } from 'ngx-moment';
import { CompaniesDataService } from 'src/app/shared/service/CompaniesData.service';
import { FinanceiroService } from '../../service/financeiro.service';
import * as moment from 'moment';
import { DateStruct } from 'src/app/shared/models/date-struct.model';
import {EventEmitterService} from 'src/app/shared/service/event-emitter.service'
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-generate-pdf-empresa',
  templateUrl: './generate-pdf-empresa.component.html',
  styleUrls: ['./generate-pdf-empresa.component.scss']
})
export class GeneratePdfEmpresaComponent implements OnInit {
  public formGroup: FormGroup
  private _listUser: any =[];
  private _listCompanies: any =[];
  private _error: any;
  private _resultRes: any = [];
  private _typeError: any = null;
  private _date: DateStruct = {
    fromDate: moment().toDate(),
    toDate: moment().toDate(),
    period: 30,
    custom: true,
    label: ''
  };
  constructor(
    private financeiroService: FinanceiroService,
    private companiesData: CompaniesDataService,
    private formBuilder: FormBuilder,
    private dateFormatPipe: DateFormatPipe,
    private spinner: NgxSpinnerService
  ) {
    this._date ={
      fromDate: moment(moment().toDate()).subtract(30, 'days').toDate(),
      toDate: moment(moment().toDate()).subtract(1, 'days').toDate(),
      period: 30,
      custom: true,
      label: '30 dias'
    }
  }

  ngOnInit() {
    this.crieFormulario();
    this.getListCompanies();
  }


  get init(): any { return this._date; }

  get error(){
    return this._error;
  }

  get listUser(){
    return this._listUser
  }

  get typeError() {
    return this._typeError;
  }

  get listCompanies(){
    return this._listCompanies;
  }

  public alterarPeriodo(datas){
    console.log(datas)
    this._date = datas;
  }

  public crieFormulario(){
    this.formGroup = this.formBuilder.group({
      companyID: new FormControl('', Validators.required),
    })
  }

  public getListCompanies(){
    EventEmitterService.get('showLoader').emit();
    this.financeiroService.getCompanies().subscribe((res) =>{
      this._listCompanies = res.companies;
      setTimeout(() => {EventEmitterService.get('hideLoader').emit();}, 500);
    }, (err) => {
      setTimeout(() => {EventEmitterService.get('hideLoader').emit();}, 500);
      this._error = err.message;
      this._typeError = 'danger'
    })
  }

  public clearError() {
    this._error = null;
    this._typeError = null;
  }

  public gerarPdf(){
    this.clearError();
    EventEmitterService.get('showLoader').emit();

    const dateEntry = this.dateFormatPipe.transform(this._date.fromDate, 'YYYY-MM-DD');
    const dateFinal = this.dateFormatPipe.transform(this._date.toDate, 'YYYY-MM-DD');
    const companyID = this.formGroup.get('companyID').value.id;
    console.log(dateEntry, dateFinal, companyID, 'pdf empresa');
    this.financeiroService.getPdf(dateEntry, dateFinal,companyID).subscribe((res) =>{
      const linkSource = 'data:application/pdf;base64,' +`${res.base64}`;
      const downloadLink = document.createElement("a");
      const fileName = `${this.formGroup.get('companyID').value.companyName}.pdf`;
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
      setTimeout(() => {EventEmitterService.get('hideLoader').emit();}, 500);
    },(error) =>{
      this._error = error.message;
      this._typeError = 'danger'
      console.log(error);
      setTimeout(() => {EventEmitterService.get('hideLoader').emit();}, 500);
    })
  }

}
