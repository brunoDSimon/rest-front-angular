/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SumGroupMonthCompaniesComponent } from './sum-group-month-companies.component';

describe('SumGroupMonthCompaniesComponent', () => {
  let component: SumGroupMonthCompaniesComponent;
  let fixture: ComponentFixture<SumGroupMonthCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumGroupMonthCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumGroupMonthCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
