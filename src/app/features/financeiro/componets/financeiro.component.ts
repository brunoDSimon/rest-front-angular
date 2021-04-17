import { Component, OnInit } from '@angular/core';
import { UsersDataService } from 'src/app/shared/service/UsersData.service';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.scss']
})
export class FinanceiroComponent implements OnInit {

  constructor(
    private userData:UsersDataService
  ) { }

  ngOnInit(): void {
  }
  public doRefresh(event) {
    setTimeout(() => {
      console.log('Async operation has ended');
      window.location.reload();
      event.target.complete();
    }, 2000);
  }
}
