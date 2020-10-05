import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentI2Component } from './parent-i2.component';

describe('ParentI2Component', () => {
  let component: ParentI2Component;
  let fixture: ComponentFixture<ParentI2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentI2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentI2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
