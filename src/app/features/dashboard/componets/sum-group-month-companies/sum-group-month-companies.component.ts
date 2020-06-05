import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import Chart from 'chart.js';
import { ReaisPipe } from 'src/app/shared/pipe/reais.pipe';

@Component({
  selector: 'app-sum-group-month-companies',
  templateUrl: './sum-group-month-companies.component.html',
  styleUrls: ['./sum-group-month-companies.component.scss']
})
export class SumGroupMonthCompaniesComponent implements OnInit {
  private myChart: any;
  private _monthsChart: any[] = [];
  private _conteudoChart: any[] = [];
  private response: any[] = [];
  private _format: [];
  private _cores = [
    "#3e95cd",
    "#4c32a8",
    "#DF3A01",
    "#0B4C5F",
    "#8000FF",
  ];
  constructor(
    private dashboardService: DashboardService,
    private reais:ReaisPipe

  ) { }

  ngOnInit() {
    this.getSumGroupMonthCompanies();
  }

  get conteudoChart() {
    return this._conteudoChart;
  }
  
  get monthsChart() {
    return this._monthsChart;
  }
  get format(){
    return this._format;
  }
  public getSumGroupMonthCompanies(){
    this.dashboardService.sumGroupMonthCompanies().subscribe((res) =>{
      this.response = res.data;
      
      this.response.map((item) =>{if(this._monthsChart.indexOf(item.periodo) ==-1){this._monthsChart.push(item.periodo)}});
      this.response.map((res) => {
        if (this._conteudoChart.length) {
          const index = this._conteudoChart.findIndex((t)=>t.periodo == res.periodo)
          if(index != -1){
            this._conteudoChart[index].data.push(res.resultGroup);
          } else {
            this._conteudoChart.push({periodo: res.periodo, name:res.companies.companyName, data: [res.resultGroup],backgroundColor:  this._cores[this._conteudoChart.length]});
          }
        } else {
          this._conteudoChart.push({periodo: res.periodo, name:res.companies.companyName, data: [res.resultGroup],backgroundColor: this._cores[0]});
        }
      }); 
      this.render()
      console.log(this._conteudoChart)
    },(error) =>{
      console.log(error)
    })
  }

  public render(){
    this.myChart =new Chart(document.getElementById("bar-chart-grouped"), {
      type: 'bar',
      data: {
        labels: this.monthsChart,
        datasets: this.conteudoChart
      },
      options: {
        title: {
          display: false,
          text: 'Ganhos agrupado por mes de cada compania'
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
      },
      
   });
  }
}
