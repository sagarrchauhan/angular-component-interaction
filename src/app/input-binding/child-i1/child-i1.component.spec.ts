import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildI1Component } from './child-i1.component';

describe('ChildI1Component', () => {
  let component: ChildI1Component;
  let fixture: ComponentFixture<ChildI1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildI1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildI1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
