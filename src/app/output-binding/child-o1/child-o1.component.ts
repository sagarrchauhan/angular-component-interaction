import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import randomcolor from 'randomcolor';

@Component({
  selector: 'app-child-o1',
  templateUrl: './child-o1.component.html',
  styleUrls: ['./child-o1.component.scss']
})
export class ChildO1Component implements OnInit {

  @Output() color = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeColor() {
    this.color.emit(randomcolor());
  }

}
