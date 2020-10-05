import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessingChildComponent } from './accessing-child.component';

describe('AccessingChildComponent', () => {
  let component: AccessingChildComponent;
  let fixture: ComponentFixture<AccessingChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessingChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
