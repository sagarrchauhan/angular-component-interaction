import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildO1Component } from './child-o1.component';

describe('ChildO1Component', () => {
  let component: ChildO1Component;
  let fixture: ComponentFixture<ChildO1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildO1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildO1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
