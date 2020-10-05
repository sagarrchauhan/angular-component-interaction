import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNgChangesComponent } from './input-ng-changes.component';

describe('InputNgChangesComponent', () => {
  let component: InputNgChangesComponent;
  let fixture: ComponentFixture<InputNgChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNgChangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNgChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
