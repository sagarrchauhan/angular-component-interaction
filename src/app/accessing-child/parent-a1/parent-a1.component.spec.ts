import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentA1Component } from './parent-a1.component';

describe('ParentA1Component', () => {
  let component: ParentA1Component;
  let fixture: ComponentFixture<ParentA1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentA1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
