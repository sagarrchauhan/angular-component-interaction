import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-o1',
  templateUrl: './parent-o1.component.html',
  styleUrls: ['./parent-o1.component.scss']
})
export class ParentO1Component implements OnInit {

  parentColor = '#ffffff';

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(color: string) {
    this.parentColor = color;
  }

}
