import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildI4Component } from './child-i4.component';

describe('ChildI4Component', () => {
  let component: ChildI4Component;
  let fixture: ComponentFixture<ChildI4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildI4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildI4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
