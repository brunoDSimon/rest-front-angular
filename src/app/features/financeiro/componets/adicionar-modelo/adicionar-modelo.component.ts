import { FinanceiroService } from '../../service/financeiro.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersDataService } from 'src/app/shared/service/UsersData.service';
import { CompaniesDataService } from 'src/app/shared/service/CompaniesData.service';
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
    private compaiesDataService: CompaniesDataService
  ) { }

  ngOnInit() {

    if(this.compaiesDataService.companies.length && this.compaiesDataService.users.length){
      this._listCompanies = this.compaiesDataService.companies[0]
      this._listUsers = this.compaiesDataService.users[0]
    }else{
      this.getCompanies();
      this.getUsers();
    }
    this.formulario();
    console.log(this.compaiesDataService.companies);
    console.log(this.compaiesDataService.users);
  }
  public formulario(){
    this.formGroup = this.formBuilder.group({
      reference: ['', Validators.required],
      patch: ['', Validators.required],
      amount: ['', Validators.required],
      value: ['', Validators.required],
      dateEntry: ['', Validators.required],
      companyID: new FormControl(this._companyID, Validators.required),
      userID:    new FormControl(this._listUsers, Validators.required)
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
    this.financeiroService.getCompanies().subscribe((res) =>{
      this._listCompanies = res.data.companies;
      this.compaiesDataService.setCompanies(res.data.companies)[0];
      console.log(this._listCompanies);
    })
  }
  public getUsers(){
    this.financeiroService.getUser().subscribe((res) =>{
      this._listUsers = res.data.users;
      this.compaiesDataService.setUsers(res.data.users)[0];
    },(err: Error)=>{
      console.log(err)
    })
  }
  public enviartalao(){
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
      setTimeout((openSucess) => {
        this.formGroup.get('reference').setValue('')
        this.formGroup.get('value').setValue('')
        this.formGroup.get('amount').setValue('')
        this.formGroup.get('patch').setValue('')
        this.formGroup.get('dateEntry').setValue('')
        this.formGroup.get('companyID').setValue('')
        this.formGroup.get('userID').setValue('')
        this._openSucess = false
      }, 10000);
    }, (err) => {
      this._error = err.message;

    })
  }
}
