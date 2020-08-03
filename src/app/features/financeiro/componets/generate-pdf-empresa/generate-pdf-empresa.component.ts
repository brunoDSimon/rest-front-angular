import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DateFormatPipe } from 'ngx-moment';
import { CompaniesDataService } from 'src/app/shared/service/CompaniesData.service';
import { FinanceiroService } from '../../service/financeiro.service';
import * as moment from 'moment';
import { DateStruct } from 'src/app/shared/models/date-struct.model';

@Component({
  selector: 'app-generate-pdf-empresa',
  templateUrl: './generate-pdf-empresa.component.html',
  styleUrls: ['./generate-pdf-empresa.component.scss']
})
export class GeneratePdfEmpresaComponent implements OnInit {
  public formGroup: FormGroup
  private _listUser: any[];
  private _listCompanies: any[];
  private _error: any;
  private _resultRes: any = [];
  private _date: DateStruct = {
    fromDate: moment().toDate(),
    toDate: moment().toDate(),
  };
  constructor(
    private financeiroService: FinanceiroService,
    private companiesData: CompaniesDataService,
    private formBuilder: FormBuilder,
    private dateFormatPipe: DateFormatPipe,
  ) { }

  ngOnInit() {
    this.crieFormulario();
    this.verifiqueSessao();
  }

  public gerarPdf(){
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
    },(error) =>{
      console.log(error);
    })
  }
  get init(): any { return this._date; }

  get error(){
    return this._error;
  }

  get listUser(){
    return this._listUser
  }
  get listCompanies(){
    return this._listCompanies;
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
    if(!this.companiesData.companies.length){
      this.getListCompanies();
    }else{
      console.log(this.companiesData.companies[0])
      this._listCompanies = this.companiesData.companies[0]
    }
  }

  public getListCompanies(){
    this.financeiroService.getCompanies().subscribe((res) =>{
      console.log();
      this.companiesData.setCompanies(res.data.companies);
      this._listCompanies = res.data.companies;
      // console.log(this._listCompanies)
    }, (err) => {
      this._error = err.message;

    })
  }

}
