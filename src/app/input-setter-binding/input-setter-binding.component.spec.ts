import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSetterBindingComponent } from './input-setter-binding.component';

describe('InputSetterBindingComponent', () => {
  let component: InputSetterBindingComponent;
  let fixture: ComponentFixture<InputSetterBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSetterBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSetterBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
