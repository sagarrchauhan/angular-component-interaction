import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentI4Component } from './parent-i4.component';

describe('ParentI4Component', () => {
  let component: ParentI4Component;
  let fixture: ComponentFixture<ParentI4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentI4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentI4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
