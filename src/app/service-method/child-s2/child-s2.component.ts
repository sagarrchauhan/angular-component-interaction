import { Component, OnInit } from '@angular/core';
import { ChangeColorService } from '../change-color.service';

@Component({
  selector: 'app-child-s2',
  templateUrl: './child-s2.component.html',
  styleUrls: ['./child-s2.component.scss'],
})
export class ChildS2Component implements OnInit {

  color = '#ffffff';

  constructor(private changeColorService: ChangeColorService) { }

  ngOnInit(): void {
    this.changeColorService.currentColor.subscribe((color) => this.color = color);
  }




}
