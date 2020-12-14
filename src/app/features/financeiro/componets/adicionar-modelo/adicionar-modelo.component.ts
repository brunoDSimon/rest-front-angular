import { FinanceiroService } from '../../service/financeiro.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersDataService } from 'src/app/shared/service/UsersData.service';
import { CompaniesDataService } from 'src/app/shared/service/CompaniesData.service';
import {EventEmitterService} from 'src/app/shared/service/event-emitter.service'
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-adicionar-modelo',
  templateUrl: './adicionar-modelo.component.html',
  styleUrls: ['./adicionar-modelo.component.scss']
})
export class AdicionarModeloComponent implements OnInit {



  private _listCompanies: any = [];
  private _listUsers: any = [];
  private _companyID: any;
  private _openSucess: boolean = false;
  private _error: any;
  public formGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private financeiroService: FinanceiroService,
    private compaiesDataService: CompaniesDataService,
    private spinner: NgxSpinnerService
  ) {
    this.formulario();
   }

  ngOnInit() {
    this.verificarSessao();
  }
  public formulario(){
    this.formGroup = this.formBuilder.group({
      reference: ['', [Validators.required]],
      patch: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      value: ['', [Validators.required]],
      dateEntry: ['', [Validators.required]],
      companyID: new FormControl('', [Validators.required]),
      userID:    new FormControl('', [Validators.required])
    })
  }

  get listCompanies(){
    return this._listCompanies;
  }

  get listUsers(){
    return this._listUsers;
  }

  get companyID(){
    return this._companyID;
  }

  get openSucess(){
    return this._openSucess;
  }

  public verificarSessao(){
    EventEmitterService.get('showLoader').emit();
    if(this.compaiesDataService.companies.length){
      this._listCompanies = this.compaiesDataService.companies[0]
    }else{
      this.getCompanies();
    }
    if(this.compaiesDataService.users.length){
      this._listUsers = this.compaiesDataService.users[0]
    }else{
      this.getUsers();
    }
    EventEmitterService.get('hideLoader').emit();
  }

  public getCompanies(){
    this.financeiroService.getCompanies().subscribe((res) =>{
      this._listCompanies = res.companies;
      this.compaiesDataService.setCompanies(res.companies);
    })
  }
  public getUsers(){
    this.financeiroService.getUser().subscribe((res) =>{
      this._listUsers = res.data.users;
      this.compaiesDataService.setUsers(res.data.users);
    },(err: Error)=>{
      console.log(err)
    })
  }
  public enviartalao(){
    this.spinner.show();
    let body: any= {
      "reference":     this.formGroup.get('reference').value,
      "value":         this.formGroup.get('value').value,
      "amount":        this.formGroup.get('amount').value,
      "patch":         this.formGroup.get('patch').value,
      "dateEntry":     this.formGroup.get('dateEntry').value,
      "companyID":     this.formGroup.get('companyID').value.id,
      "userID":        this.formGroup.get('userID').value.id
    }
    this.financeiroService.criarTalao(body).subscribe((res) =>{
      console.log(res)
       this._openSucess = true
       this.spinner.hide();
      setTimeout((openSucess) => {
        this.formGroup.reset();
        this._openSucess = false
      }, 3000);

    }, (err) => {
      this.spinner.hide();
      this._error = err.message;

    })
  }


}
