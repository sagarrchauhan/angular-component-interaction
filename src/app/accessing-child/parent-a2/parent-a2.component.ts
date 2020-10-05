import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildA1Component } from '../child-a1/child-a1.component';

@Component({
  selector: 'app-parent-a2',
  templateUrl: './parent-a2.component.html',
  styleUrls: ['./parent-a2.component.scss']
})
export class ParentA2Component implements OnInit {

  @ViewChild(ChildA1Component)
  private childComponent : ChildA1Component;

  constructor() { }

  ngOnInit(): void {
  }

  someComplexOperation() {
    console.log('Some complex operation going on ');
    this.childComponent.dataProperty = 12;
    console.log('Some other operation happens');
    this.childComponent.dataMethod();
  }

}
