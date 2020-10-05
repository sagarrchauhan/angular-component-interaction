import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentS1Component } from './parent-s1.component';

describe('ParentS1Component', () => {
  let component: ParentS1Component;
  let fixture: ComponentFixture<ParentS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
