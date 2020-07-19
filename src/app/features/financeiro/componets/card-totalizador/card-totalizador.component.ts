import { Component, OnInit } from '@angular/core';
import { FinanceiroService } from '../../service/financeiro.service';
import { DateFormatPipe } from 'ngx-moment';

@Component({
  selector: 'app-card-totalizador',
  templateUrl: './card-totalizador.component.html',
  styleUrls: ['./card-totalizador.component.scss']
})
export class CardTotalizadorComponent implements OnInit {
  private _listYears: any[] = [];
  private _totalizades: any = [];
  private _currentYear = new Date(new Date().setFullYear(new Date().getFullYear())).getFullYear();
  private _currentMonth = new Date(new Date().setMonth(new Date().getMonth() - 1)).getMonth();
  private _currentMonthDescription = new Date(new Date().setMonth(new Date().getMonth() - 1)).toLocaleString('pt-br', { month: 'long' });
  private _dateMin: any;
  private _dateMax: any;
  private _listMonth: any[] = [];
  constructor(
    private financeiroService: FinanceiroService,
    private dateFormatPipe: DateFormatPipe,
  ) { }

  ngOnInit() {
    this.filterMonhts('pt-br');
    this.changeFilter(this._currentMonth, this._currentYear)   
  }

  get totalizadores(){
    return this._totalizades;
  }
  public getTotalSumPeriod(){
    const dateEntry = this.dateFormatPipe.transform(this._dateMin, 'YYYY-MM-DD');
    const dateFinal = this.dateFormatPipe.transform(this._dateMax, 'YYYY-MM-DD');
    this.financeiroService.totalSumPeriod(dateEntry,dateFinal ).subscribe((res) =>{
      this._totalizades = res.data.totalSumPeriod
      console.log(this._totalizades)
    },(error: Error)=>{
      console.log(error)
    })
  }
  get months() {
    return this._listMonth;
  }
  get currentYear() {
    return this._currentYear;
  }
  get currentMonth() {
    return this._currentMonth;
  }
  get currentMonthDescription() {
    return this._currentMonthDescription;
  }

  get years() {
    return this._listYears;
  }
  public changeFilter(month, year) {
    this._currentYear   = year;
    this._currentMonth  = month;
    this._dateMax = new Date(year, month+1,1);
    this._dateMin = new Date(year, month,1);
    const date = new Date(year, month,1);
    this._currentMonthDescription  = date.toLocaleString('pt-br', { month: 'long' });
    this.getTotalSumPeriod();
  }
  private filterMonhts(locale) {
    const date = new Date();
    for (let i = 0; i < 12; i++) {
      date.setDate(1);
      date.setMonth(date.getMonth() - 1);
      const filter = { month: date.toLocaleString(locale, { month: 'long' }), valor: date.getMonth(), year: date.getFullYear() };
      this._listMonth.push(filter);
    }
    this._listMonth = this._listMonth.sort((a, b) => {
      if (a.valor > b.valor) {
        return 1;
      } else if (a.valor < b.valor) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}
