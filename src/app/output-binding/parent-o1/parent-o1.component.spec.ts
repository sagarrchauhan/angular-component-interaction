import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentO1Component } from './parent-o1.component';

describe('ParentO1Component', () => {
  let component: ParentO1Component;
  let fixture: ComponentFixture<ParentO1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentO1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentO1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
