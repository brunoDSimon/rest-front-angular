import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import Chart from 'chart.js';
import { ReaisPipe } from 'src/app/shared/pipe/reais.pipe';
import { MesAnoPipe } from 'src/app/shared/pipe/mes-ano.pipe';
import { DateFormatPipe } from 'ngx-moment';
@Component({
  selector: 'app-sum-group-month',
  templateUrl: './sum-group-month.component.html',
  styleUrls: ['./sum-group-month.component.scss']
})
export class SumGroupMonthComponent implements OnInit {
  private myChart: any;
  private _month: any = [];
  private _valueTotal: any = [];
  private _response: any = [];
  private _listYears: any[] = [];
  private _currentYear;
  private _dateAtual = new Date()
  constructor(
    private dashboardService: DashboardService,
    private reais:ReaisPipe,
    private mesAno:MesAnoPipe,
    private dateFormatPipe: DateFormatPipe,

  ) { }

  ngOnInit() {
    this.changeFilter();
  }

  get response(){
    return this._response;
  }

  get years() {
    return this._listYears;
  }

  get currentYear() {
    return this._currentYear
  }

  public changeFilter() {
    for (let index = 0; index < 5; index++) {
      this._listYears.push(new Date(new Date().setFullYear(new Date().getFullYear() -index)).getFullYear())
    }
    this.setYear(this._listYears[0])
   }

   public setYear(aux) {
     this._currentYear = aux;
     this.getSumGroupMonth(aux);
   }

  public getSumGroupMonth(periodo){
    this._valueTotal = [];
    this._month      = [];
    this.dashboardService.sumGroupMonth(periodo).subscribe((res) =>{
      this._response = res.data.beadGroupMonth;
      res.data.beadGroupMonth.map((item) =>{this._valueTotal.push(item.resultGroup.toFixed(2))})
      res.data.beadGroupMonth.map((item) =>{this._month.push(item.periodo)})
      console.log(this._response)
      this.render();
    },(err) => {
      console.log(err)
    })
  }

  public render(){
    // console.log(meses)
    this.myChart = new Chart(document.getElementById("bar-chart"), {
      type: 'bar',
      data: {
        labels: this._month,
        datasets: [
          {
            label: 'Soma total de ganhos por mês',
            backgroundColor: ["#0000CD", "#48D1CC","#4B0082","#A020F0","#FF0000", "#FFA500","#FFFF00","#B0E0E6","#4682B4","#00FFFF", "#ADFF2F","#008B8B" ],
            data: this._valueTotal
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Soma total de ganhos por mês'
        },
        tooltips: {
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#999',
          displayColors: false,
          mode: 'point',
          titleFontColor: 'black',
          callbacks: {
            title: () => {
              return '';
            },
            label: (t, c) => {
              const label = c.datasets[t.datasetIndex];
              const valor = this.reais.transform(c.datasets[t.datasetIndex].data[t.index]);
              return `${valor}  `;
            },
            labelTextColor: (tooltipItem, chart) => {
              return 'black';
            }
          }
        },
      }
  });
  }
  private getMesesSigla() {
    const meses = [];
    const periodo = this._month.substring(5,7);
    const lengthPeriodo = this._month.length;
    if (lengthPeriodo) {
      periodo.map((mes) => {
        meses.push(this.mesAno.transform(mes, 'sigla', true).toString());
      });
      return meses;
    }
    return meses;
  }

  public transfor(aux){
    const date =  new Date(aux)
    const month = date.getMonth();
    const year = date.getFullYear()
    const newDate = new Date(year, month+1, 1)
    return  this.dateFormatPipe.transform(newDate, 'YYYY-MM-DD')
  }
}
