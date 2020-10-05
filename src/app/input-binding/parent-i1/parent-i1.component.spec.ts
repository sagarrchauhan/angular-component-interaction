import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentI1Component } from './parent-i1.component';

describe('ParentI1Component', () => {
  let component: ParentI1Component;
  let fixture: ComponentFixture<ParentI1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentI1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentI1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
