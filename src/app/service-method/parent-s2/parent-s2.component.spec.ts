import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentS2Component } from './parent-s2.component';

describe('ParentS2Component', () => {
  let component: ParentS2Component;
  let fixture: ComponentFixture<ParentS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
