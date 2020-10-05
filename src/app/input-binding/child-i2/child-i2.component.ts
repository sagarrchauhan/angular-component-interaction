import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-i2',
  templateUrl: './child-i2.component.html',
  styleUrls: ['./child-i2.component.scss']
})
export class ChildI2Component implements OnInit {

  _data = '';

  @Input()
  set data(data: string) {
    this._data = `${data} - This is manipulated data`;
  }
  get data(): string {
    return this._data ? this._data: 'no data coming from parent yet';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
