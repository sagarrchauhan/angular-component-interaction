import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildI3Component } from './child-i3.component';

describe('ChildI3Component', () => {
  let component: ChildI3Component;
  let fixture: ComponentFixture<ChildI3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildI3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildI3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
