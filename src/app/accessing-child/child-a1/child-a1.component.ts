import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-a1',
  templateUrl: './child-a1.component.html',
  styleUrls: ['./child-a1.component.scss']
})
export class ChildA1Component implements OnInit {

  dataProperty = 5;

  dataMethodProperty = 10;

  constructor() { }

  ngOnInit(): void {
  }

  dataMethod() {
    this.dataMethodProperty++;
  }

}
