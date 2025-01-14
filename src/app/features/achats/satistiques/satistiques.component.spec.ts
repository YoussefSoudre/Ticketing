/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SatistiquesComponent } from './satistiques.component';

describe('SatistiquesComponent', () => {
  let component: SatistiquesComponent;
  let fixture: ComponentFixture<SatistiquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatistiquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatistiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
