import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTaskComponent } from './modifier-task.component';

describe('ModifierTaskComponent', () => {
  let component: ModifierTaskComponent;
  let fixture: ComponentFixture<ModifierTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
