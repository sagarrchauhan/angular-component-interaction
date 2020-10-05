import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-index',
  templateUrl: './content-index.component.html',
  styleUrls: ['./content-index.component.scss']
})
export class ContentIndexComponent implements OnInit {

  topics = [
    {
      text: "Data flow Parent to Child ",
      route: "/input-binding"
    },
    {
      text: "Data flow Child to Parent",
      route: "/output-binding"
    },
    {
      text: "Accessing child properties and behaviour in parent",
      route: "/accessing-child"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
