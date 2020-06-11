/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardTotalizadorComponent } from './card-totalizador.component';

describe('CardTotalizadorComponent', () => {
  let component: CardTotalizadorComponent;
  let fixture: ComponentFixture<CardTotalizadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTotalizadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTotalizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
