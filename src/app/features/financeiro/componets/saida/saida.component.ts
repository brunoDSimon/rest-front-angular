import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FinanceiroService } from '../../service/financeiro.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CompaniesDataService } from 'src/app/shared/service/CompaniesData.service';
import { DateFormatPipe } from 'ngx-moment';

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
  constructor(
    private route: ActivatedRoute,
    private financeiroService: FinanceiroService,
    private formBuilder: FormBuilder,
    private dateFormatPipe: DateFormatPipe,
    private companiesData: CompaniesDataService,

    ) { }

  ngOnInit() {
    this.init();
    this.crieFormulario();
    this.verifiqueSessao();
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
      amount: ['', Validators.required],
      companyID: new FormControl('', Validators.required),
      userID:new FormControl('', Validators.required),
      dateEntry: ['', Validators.required],
      dateFinal: ['', Validators.required],
      patch: ['', Validators.required],
      reference: ['', Validators.required],
      value: ['', Validators.required]
    });
  }

  public crieFormularioEditar(aux){
    const date = Date()
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
          this.getTalao(parametros.id)
          this._idTalao = parametros.id
        }else{
          console.log('informado nao foi incontrado')
        }
      }
    });
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
      this._listCompanies =res.data.companies;
      this.companiesData.setCompanies(res.data.companies);
      // console.log(this._listCompanies)
    }, (err) => {
      this._error = err.message;

    })
  }

  public getTalao(id){
    this.financeiroService.getBeadOne(id).subscribe((res) =>{
      console.log(res.bead)
      this.crieFormularioEditar(res.bead)
    },(error: Error) =>{
      console.log(error)
    })
  }

  public update(){
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
      console.log(res);
    },(erro: Error) =>{
      console.log(erro)
    })
  }
}
