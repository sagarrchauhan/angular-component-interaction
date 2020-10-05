import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentA2Component } from './parent-a2.component';

describe('ParentA2Component', () => {
  let component: ParentA2Component;
  let fixture: ComponentFixture<ParentA2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentA2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentA2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
