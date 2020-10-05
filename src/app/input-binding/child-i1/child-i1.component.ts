import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-i1',
  templateUrl: './child-i1.component.html',
  styleUrls: ['./child-i1.component.scss']
})
export class ChildI1Component implements OnInit {

  @Input() someData: string;

  constructor() { }

  ngOnInit(): void {
  }

}
