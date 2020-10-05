import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildI2Component } from './child-i2.component';

describe('ChildI2Component', () => {
  let component: ChildI2Component;
  let fixture: ComponentFixture<ChildI2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildI2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildI2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
