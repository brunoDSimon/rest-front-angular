import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import Chart from 'chart.js';

@Component({
  selector: 'app-sum-group-month-companies',
  templateUrl: './sum-group-month-companies.component.html',
  styleUrls: ['./sum-group-month-companies.component.scss']
})
export class SumGroupMonthCompaniesComponent implements OnInit {
  private myChart: any;
  private _monthsChart: any[] = [];
  private _conteudoChart: any[] = [];
  private response: any = [];
  private _cores = [
    "#3e95cd",
    "#3e94cd",
    "#3e93cd",
    "#3e92cd",
    "#3e91cd",
  ];
  constructor(
    private dashboardService: DashboardService
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

  public getSumGroupMonthCompanies(){
    this.dashboardService.sumGroupMonthCompanies().subscribe((res) =>{
      this.response = res.data;
      
      this.response.map((item) =>{if(this._monthsChart.indexOf(item.month) ==-1){this._monthsChart.push(item.month)}});
            
      this.response.map((res) => {
        if (this._conteudoChart.length) {
          const index = this._conteudoChart.findIndex((t)=>t.label == res.companies.companyName)
          if(index != -1){
            this._conteudoChart[index].data.push(res.resultGroup);
          } else {
            this._conteudoChart.push({label: res.companies.companyName, data: [res.resultGroup],backgroundColor:  this.cores[this._conteudoChart.length]});
          }
        } else {
          this._conteudoChart.push({label: res.companies.companyName, data: [res.resultGroup],backgroundColor: this.cores[0]});
        }
      }); 
      this.render()

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
          text: 'Population growth (millions)'
        }
      }
   });
  }
}
