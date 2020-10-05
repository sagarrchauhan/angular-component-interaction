import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-index',
  templateUrl: './content-index.component.html',
  styleUrls: ['./content-index.component.scss']
})
export class ContentIndexComponent implements OnInit {

  topics = [
    {
      text: "Parent to child with Input Binding",
      route: "/input-binding"
    },
    {
      text: "Child to parent with Output Binding and Eventemitter",
      route: "/output-binding"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
