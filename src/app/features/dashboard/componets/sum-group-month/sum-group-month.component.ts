import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import Chart from 'chart.js';
import { ReaisPipe } from 'src/app/shared/pipe/reais.pipe';
@Component({
  selector: 'app-sum-group-month',
  templateUrl: './sum-group-month.component.html',
  styleUrls: ['./sum-group-month.component.scss']
})
export class SumGroupMonthComponent implements OnInit {
  private myChart: any;
  private _month: any = [];
  private _valueTotal: any = [];
  constructor(
    private dashboardService: DashboardService,
    private reais:ReaisPipe
  ) { }

  ngOnInit() {
    this.getSumGroupMonth();
  }

  public getSumGroupMonth(){
    this.dashboardService.sumGroupMonth().subscribe((res) =>{
      res.data.beadGroupMonth.map((item) =>{this._valueTotal.push(item.resultGroup.toFixed(2))})
      res.data.beadGroupMonth.map((item) =>{this._month.push(item.month)})
      // console.log(this._valueTotal)
      this.render();
    },(err) => {
      console.log(err)
    })
  }

  public render(){
    this.myChart = new Chart(document.getElementById("bar-chart"), {
      type: 'bar',
      data: {
        labels: this._month,
        datasets: [
          {
            label: 'Soma total de ganhos por mes',
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: this._valueTotal
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Soma total de ganhos por mes'
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
              // const label = c.datasets[t.datasetIndex].label[t.index];
              const valor = this.reais.transform(c.datasets[t.datasetIndex].data[t.index]);
              return `  ${valor}  `;
            },
            labelTextColor: (tooltipItem, chart) => {
              return 'black';
            }
          }
        },
      }
  });
  }
  private getNomeMes(mes) {
    let nome = '';
    switch (mes) {
      case '02':
        nome = 'Fevereiro';
        break;
      case '03':
        nome = 'Março';
        break;
      case '04':
        nome = 'Abril';
        break;
      case '05':
        nome = 'Maio';
        break;
      case '06':
        nome = 'Junho';
        break;
      case '07':
        nome = 'Julho';
        break;
      case '08':
        nome = 'Agosto';
        break;
      case '09':
        nome = 'Setembro';
        break;
      case '10':
        nome = 'Outubro';
        break;
      case '11':
        nome = 'Novembro';
        break;
      case '12':
        nome = 'Dezembro';
        break;
      default:
        nome = 'Janeiro';
    }
    return nome;
  }
}
