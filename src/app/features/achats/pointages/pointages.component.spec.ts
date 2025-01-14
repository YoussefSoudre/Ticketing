/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PointagesComponent } from './pointages.component';

describe('PointagesComponent', () => {
  let component: PointagesComponent;
  let fixture: ComponentFixture<PointagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
