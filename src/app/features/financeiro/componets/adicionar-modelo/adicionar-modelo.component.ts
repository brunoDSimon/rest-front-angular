import { FinanceiroService } from '../../service/financeiro.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
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
  public formGroup: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private financeiroService: FinanceiroService
  ) { }

  ngOnInit(): void {
    this.getCompanies();
    this.getUsers();
    this.formGroup = this.formBuilder.group({
      reference: ['', Validators.required],
      patch: ['', Validators.required],
      amount: ['', Validators.required],
      value: ['', Validators.required],
      dateEntry: ['', Validators.required],
      companyID: new FormControl(['', Validators.required]),
      userID:    new FormControl(['', Validators.required])
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
  public changeCompany(id){
    console.log(id)
    console.log(this._companyID)
    this._companyID = id
  }
  public getCompanies(){
    this.financeiroService.getCompanies().subscribe((res) =>{
      this._listCompanies = res.data;
      console.log(this._listCompanies);
    })
  }
  public getUsers(){
    this.financeiroService.getUser().subscribe((res) =>{
      this._listUsers = res.data
    })
  }
  // Declaração da variável (Precisa ter o Mesmo nome da ngModel.).
  //id: number
  onAddcompanyID(){ // Função que foi chamada
    this._companyID = +this._companyID;
    console.log("estou no cidade compo... " + this._companyID); // Imprimiu o valor no Console log.
    console.log(this._companyID) // outra forma de imprimir.
  }
  public enviartalao(){
    let body: any= {
      "reference":     this.formGroup.get('reference').value,
      "value":         this.formGroup.get('value').value, 
      "amount":        this.formGroup.get('amount').value, 
      "patch":         this.formGroup.get('patch').value,
      "dateEntry":     this.formGroup.get('dateEntry').value,
      "companyID":     this.formGroup.get('companyID').value,
      "userID":        this.formGroup.get('userID').value
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
