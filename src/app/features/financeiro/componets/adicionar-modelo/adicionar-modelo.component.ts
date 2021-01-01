import { DateFormatPipe } from 'ngx-moment';
import { FinanceiroService } from '../../service/financeiro.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersDataService } from 'src/app/shared/service/UsersData.service';
import { CompaniesDataService } from 'src/app/shared/service/CompaniesData.service';
import {EventEmitterService} from 'src/app/shared/service/event-emitter.service'
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
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
    private toastr: ToastrService,
    private dateFormatPipe: DateFormatPipe,
  ) {
    this.formulario();
   }

  ngOnInit() {
    this.getUsers();
    this.getCompanies();
  }

  public formulario(){
    const date = new Date()

    this.formGroup = this.formBuilder.group({
      reference: ['', [Validators.required]],
      patch: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      value: ['', [Validators.required]],
      dateEntry: [this.dateFormatPipe.transform(date, 'YYYY-MM-DD'), [Validators.required]],
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


  public getCompanies(){
    EventEmitterService.get('showLoader').emit();
    this.financeiroService.getCompanies().subscribe((res) =>{
      this._listCompanies = res.companies;
      EventEmitterService.get('hideLoader').emit();
    },(err: Error)=>{
      EventEmitterService.get('hideLoader').emit();
      this.toastr.error(`Não foi possivel encontrar a lista de empresas`)
    });
  }

  public getUsers(){
    EventEmitterService.get('showLoader').emit();
    this.financeiroService.getUser().subscribe((res) =>{
      this._listUsers = res.user;
      EventEmitterService.get('hideLoader').emit();
    },(err: Error)=>{
      EventEmitterService.get('hideLoader').emit();
      this.toastr.error(`Não foi possivel encontrar a lista de usuários`);
    })
  }

  public enviartalao(){
    EventEmitterService.get('showLoader').emit();
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
       setTimeout(() => {
         EventEmitterService.get('hideLoader').emit();
        }, 500);
      setTimeout((openSucess) => {
        this.formGroup.reset();
        this.toastr.success('Cadastro efetuado com sucesso');
      }, 300);

    }, (err) => {
      setTimeout(() => {EventEmitterService.get('hideLoader').emit();}, 500);
      this.toastr.error(`Não foi possivel cadastrar o modelo ${err.message}`);
      this._error = err.message;
    })
  }


}
