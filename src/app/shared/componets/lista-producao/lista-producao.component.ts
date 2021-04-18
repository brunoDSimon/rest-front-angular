import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-producao',
  templateUrl: './lista-producao.component.html',
  styleUrls: ['./lista-producao.component.scss']
})
export class ListaProducaoComponent implements OnInit {
  @Input() dados: any = [];

  constructor() { }

  ngOnInit() {
  }

}
