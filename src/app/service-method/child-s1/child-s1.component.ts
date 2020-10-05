import { Component, OnInit } from '@angular/core';
import { ChangeColorService } from '../change-color.service';
import randomcolor from 'randomcolor'

@Component({
  selector: 'app-child-s1',
  templateUrl: './child-s1.component.html',
  styleUrls: ['./child-s1.component.scss'],
})
export class ChildS1Component implements OnInit {

  constructor(private changeColorService: ChangeColorService) { }

  ngOnInit(): void {
  }

  changeColor() {
    const newColor = randomcolor();
    this.changeColorService.changeColor(newColor);
  }

}
