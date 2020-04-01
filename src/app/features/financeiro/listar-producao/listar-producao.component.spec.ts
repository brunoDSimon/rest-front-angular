import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProducaoComponent } from './listar-producao.component';

describe('ListarProducaoComponent', () => {
  let component: ListarProducaoComponent;
  let fixture: ComponentFixture<ListarProducaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarProducaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
