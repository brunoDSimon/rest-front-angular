import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarModeloComponent } from './adicionar-modelo.component';

describe('AdicionarModeloComponent', () => {
  let component: AdicionarModeloComponent;
  let fixture: ComponentFixture<AdicionarModeloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarModeloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
