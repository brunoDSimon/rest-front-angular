import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FinanceiroService } from '../../service/financeiro.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CompaniesDataService } from 'src/app/shared/service/CompaniesData.service';
import { DateFormatPipe } from 'ngx-moment';
import { NgxSpinnerService } from 'ngx-spinner';
import { EventEmitterService } from 'src/app/shared/service/event-emitter.service';

@Component({
  selector: 'app-saida',
  templateUrl: './saida.component.html',
  styleUrls: ['./saida.component.scss']
})
export class SaidaComponent implements OnInit {
  private _list: any = [];
  private _listUser: any = [];
  private _listCompanies: any = [];
  private _error: any;
  private _idTalao: any;

  public formGroup: FormGroup;
  public ngbAlert = {type: null, msg: null}

  constructor(
    private route: ActivatedRoute,
    private financeiroService: FinanceiroService,
    private formBuilder: FormBuilder,
    private dateFormatPipe: DateFormatPipe,
    private companiesData: CompaniesDataService,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit() {
    this.init();
    this.crieFormulario();
  }

  get list(){
    return this._list
  }

  get listCompanies(){
    return this._listCompanies;
  }

  get listUser(){
    return this._listUser
  }

  public crieFormulario(){
    this.formGroup = this.formBuilder.group({
      amount: ['', [Validators.required]],
      companyID: new FormControl('', [Validators.required]),
      userID:new FormControl('', [Validators.required]),
      dateEntry: ['', [Validators.required]],
      dateFinal: ['', [Validators.required]],
      patch: ['', [Validators.required]],
      reference: ['', [Validators.required]],
      value: ['', [Validators.required]]
    });
  }

  public crieFormularioEditar(aux){
    const date = new Date()
    let atual = this.dateFormatPipe.transform(date, 'YYYY-MM-DD');

    let amount = typeof aux.amount != 'undefined' ? aux.amount: '';
    let companyID = typeof aux.companyID != 'undefined' ? this._listCompanies.filter(item => item.id == aux.companyID)[0]: '';
    let userID = typeof aux.userID != 'undefined' ? this._listUser.filter(item => item.id == aux.userID)[0]: '';
    let dateEntry = typeof aux.dateEntry != 'undefined'? aux.dateEntry: '';
    let dateFinal
    if(aux.dateFinal == null){
      dateFinal = atual
    }else{
      dateFinal = aux.dateFinal
    }
    console.log(dateFinal)
    let patch = typeof aux.patch != 'undefined'? aux.patch: '';
    let reference = typeof aux.reference != 'undefined'? aux.reference: '';
    let value = typeof aux.value != 'undefined'? aux.value: '';

    this.formGroup.get('amount').setValue(amount)
    this.formGroup.get('companyID').setValue(companyID)
    this.formGroup.get('userID').setValue(userID)
    this.formGroup.get('dateEntry').setValue(dateEntry)
    this.formGroup.get('dateFinal').setValue(dateFinal)
    this.formGroup.get('patch').setValue(patch)
    this.formGroup.get('reference').setValue(reference)
    this.formGroup.get('value').setValue(value)

  }

  public init(){
    this.route.params.subscribe( parametros => {
      if (parametros['id']) {
        console.log(parametros.id)
        console.log()
        if(typeof parametros.id != 'undefined'){
          this.getListUser();
          this.getListCompanies();
          this.getTalao(parametros.id)
          this._idTalao = parametros.id
        }else{
          console.log('informado nao foi incontrado')
        }
      }
    });
  }


  public getListUser(){
    EventEmitterService.get('showLoader').emit();
    this.financeiroService.getUser().subscribe((res) =>{
      this._listUser = res.user;
      console.log(this._listUser);
      EventEmitterService.get('hideLoader').emit();
    }, (err) => {
      this._error = err.message;
      EventEmitterService.get('hideLoader').emit();
      this.ngbAlert.msg = err
      this.ngbAlert.type = 'danger';
    })
  }

  public getListCompanies(){
    EventEmitterService.get('showLoader').emit();
    this.financeiroService.getCompanies().subscribe((res) =>{
      this._listCompanies =res.companies;
      EventEmitterService.get('hideLoader').emit();
    }, (err) => {
      EventEmitterService.get('hideLoader').emit();
      this.ngbAlert.msg = err
      this.ngbAlert.type = 'danger';
    })
  }

  public getTalao(id){
    EventEmitterService.get('showLoader').emit();
    this.financeiroService.getBeadOne(id).subscribe((res) =>{
      this.crieFormularioEditar(res.bead)
      setTimeout(() => {EventEmitterService.get('hideLoader').emit();}, 500);
    },(error: Error) =>{
      setTimeout(() => {EventEmitterService.get('hideLoader').emit();}, 500);
      this.ngbAlert.msg = error
      this.ngbAlert.type = 'danger';
    })
  }

  public update(){
    EventEmitterService.get('showLoader').emit();
    let body ={
      "reference": this.formGroup.get('reference').value,
      "value": this.formGroup.get('value').value,
      "amount": this.formGroup.get('amount').value,
      "patch": this.formGroup.get('patch').value,
      "dateEntry": this.formGroup.get('dateEntry').value,
      "dateFinal": this.formGroup.get('dateFinal').value,
      "companyID": this.formGroup.get('companyID').value.id,
      "userID": this.formGroup.get('userID').value.id
    }
    console.log(body)
    this.financeiroService.updateTalao(this._idTalao, body).subscribe((res) =>{
      this.ngbAlert.msg = 'Alterado com sucesso!'
      this.ngbAlert.type = 'success';
      setTimeout(() => {EventEmitterService.get('hideLoader').emit();}, 500);
    },(erro: Error) =>{
      this.ngbAlert.msg = erro
      this.ngbAlert.type = 'danger';
      setTimeout(() => {EventEmitterService.get('hideLoader').emit();}, 500);
    })
  }
  public close(){
    this.ngbAlert = {type: null, msg: null}
  }
}
