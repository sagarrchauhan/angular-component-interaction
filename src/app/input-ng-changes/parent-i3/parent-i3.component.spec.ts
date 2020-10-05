import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentI3Component } from './parent-i3.component';

describe('ParentI3Component', () => {
  let component: ParentI3Component;
  let fixture: ComponentFixture<ParentI3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentI3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentI3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
