import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildS1Component } from './child-s1.component';

describe('ChildS1Component', () => {
  let component: ChildS1Component;
  let fixture: ComponentFixture<ChildS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
