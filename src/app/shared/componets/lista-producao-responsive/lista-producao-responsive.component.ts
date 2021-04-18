import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-producao-responsive',
  templateUrl: './lista-producao-responsive.component.html',
  styleUrls: ['./lista-producao-responsive.component.scss']
})
export class ListaProducaoResponsiveComponent implements OnInit {
  @Input() dados: any = [];
  constructor() { }

  ngOnInit() {
  }

}
