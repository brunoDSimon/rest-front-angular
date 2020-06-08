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
  private _periodos:any = [];
  private _valor: any[]= []
  private _cores = [
    "#3e95cd",
    "#4c32a8",
    "#DF3A01",
    "#0B4C5F",
    "#8000FF",
  ];
  private dados:any =[
    {
      "status": {
        "value": "0",
        "messege": "requisição efetuada com sucesso"
      },
      "data": [
        {
          "resultGroup": 3.72,
          "periodo": "2020-01",
          "companies": {
            "companyName": "Sagga"
          }
        },
        {
          "resultGroup": 3446.0399999999963,
          "periodo": "2020-03",
          "companies": {
            "companyName": "Arrezo"
          }
        },
        {
          "resultGroup": 40.92,
          "periodo": "2020-03",
          "companies": {
            "companyName": "MCM"
          }
        },
        {
          "resultGroup": 13843.73,
          "periodo": "2020-04",
          "companies": {
            "companyName": "Arrezo"
          }
        },
        {
          "resultGroup": 76.67999999999998,
          "periodo": "2020-04",
          "companies": {
            "companyName": "Sagga"
          }
        },
        {
          "resultGroup": 148.26,
          "periodo": "2020-05",
          "companies": {
            "companyName": "Sagga"
          }
        },
        {
          "resultGroup": 3.72,
          "periodo": "2020-06",
          "companies": {
            "companyName": "Sagga"
          }
        },
        {
          "resultGroup": 3.72,
          "periodo": "2020-07",
          "companies": {
            "companyName": "Sagga"
          }
        },
        {
          "resultGroup": 11.16,
          "periodo": "2020-08",
          "companies": {
            "companyName": "Sagga"
          }
        },
        {
          "resultGroup": 100.43999999999998,
          "periodo": "2020-08",
          "companies": {
            "companyName": "MCM"
          }
        },
        {
          "resultGroup": 29.759999999999994,
          "periodo": "2020-12",
          "companies": {
            "companyName": "MCM"
          }
        }
      ]
    }
  ]
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
 get periodo(){
   return this._periodos
 }
 get valor(){
   return this._valor
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
            this._conteudoChart[index].label.push(res.companies.companyName);
          } else {
            this._conteudoChart.push({periodo:res.periodo, label: [res.companies.companyName], data: [res.resultGroup]})
          }
        } else {
          this._conteudoChart.push({periodo:res.periodo,label: [res.companies.companyName], data: [res.resultGroup]});
        }
      }); 
      console.log(this._conteudoChart)
      this._conteudoChart.map((aux) =>{this._valor.push(aux.data) })
      console.log(this._valor)
      this.render()
    },(error) =>{
      console.log(error)
    })
  }

  public render(){
    this.myChart =new Chart(document.getElementById("bar-chart-grouped"), {
        type: 'bar',
        // data: {
        //   labels: this.monthsChart,
        //   datasets: this.conteudoChart
        // },
        data: {
          labels: this._monthsChart,
          datasets: [
            {
              label: 'Soma total de ganhos por mes',
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: this.valor
            }
          ]
        },
      options: {
        title: {
          display: false,
          text: 'Ganhos agrupado por mes de cada compania'
        },
        // tooltips: {
        //   backgroundColor: '#fff',
        //   borderWidth: 1,
        //   borderColor: '#999',
        //   displayColors: false,
        //   mode: 'point',
        //   titleFontColor: 'black',
        //   callbacks: {
        //     title: () => {
        //       return '';
        //     },
        //     label: (t, c) => {
        //       // const label = c.datasets[t.datasetIndex].label[t.index];
        //       const valor = this.reais.transform(c.datasets[t.datasetIndex].data[t.index]);
        //       return `  ${valor}  `;
        //     },
        //     labelTextColor: (tooltipItem, chart) => {
        //       return 'black';
        //     }
        //   }
        // },
      },
      
   });
  }
}
