import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DateStruct } from 'src/app/shared/models/date-struct.model';
import * as moment from 'moment';
import { FinanceiroService } from '../../service/financeiro.service';
import { CompaniesDataService } from 'src/app/shared/service/CompaniesData.service';
import { DateFormatPipe } from 'ngx-moment';
import { CustomValidators } from 'ngx-custom-validators';
import { NgxSpinnerService } from 'ngx-spinner';
import { EventEmitterService } from 'src/app/shared/service/event-emitter.service';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService,

  ) {
    this.crieFormulario();
   }

  ngOnInit(){
    this.getListUser();
    this.getListCompanies();
  }

  get init(): any {
    return this._date;
  }

  get totalDescont(){
    return this._totalDescont;
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
      userID: new FormControl(this._listUser,Validators.required),
      descont: ['',[ CustomValidators.number, Validators.required]],
      dateFinalNotNul: [false,[]]
    })
  }


  public getListUser(){
    EventEmitterService.get('showLoader').emit();
    this.financeiroService.getUser().subscribe((res) =>{
      this._listUser = res.user;
      EventEmitterService.get('hideLoader').emit();
    }, (err) => {
      this.toastr.error(`Falha interna`);
      EventEmitterService.get('hideLoader').emit();
    })
  }

  public getListCompanies(){
    EventEmitterService.get('showLoader').emit();
    this.financeiroService.getCompanies().subscribe((res) =>{
      this._listCompanies = res.companies;
      EventEmitterService.get('hideLoader').emit();
    }, (err: Error) => {
      this.toastr.error(`Falha interna`);
      EventEmitterService.get('hideLoader').emit();
    })
  }

  public getProducao(){
    EventEmitterService.get('showLoader').emit();
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
      EventEmitterService.get('hideLoader').emit();
    }, (err) => {
      this._error = err.message;
      EventEmitterService.get('hideLoader').emit();
      this.toastr.error(`Falha interna`);
    } )
  }

  public pdf(res,dateEntry,dateFinal){
    const linkSource = 'data:application/pdf;base64,' +`${res}`;
    const downloadLink = document.createElement("a");
    const fileName =`${dateEntry}_a_+${dateFinal}.pdf`;
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
    EventEmitterService.get('hideLoader').emit();
  }

  public geratePaymentUser(){
    EventEmitterService.get('showLoader').emit();
    const dateEntry = this.dateFormatPipe.transform(this._date.fromDate, 'YYYY-MM-DD');
    const dateFinal = this.dateFormatPipe.transform(this._date.toDate, 'YYYY-MM-DD');
    const userID = this.formGroup.get('userID').value.id;
    const descont = this.formGroup.get('descont').value / 100;
    console.log(dateEntry,dateFinal,userID,descont)
    this.financeiroService.geratePaymentUser(userID,dateEntry, dateFinal,descont).subscribe((res) =>{
     this.pdf(res.data.base64,dateEntry,dateFinal);
    },(error) =>{
      console.log(error);
      EventEmitterService.get('hideLoader').emit();
      this.toastr.error(`Não foi possivel gerar o pdf ${error}`);
    })
  }

}
