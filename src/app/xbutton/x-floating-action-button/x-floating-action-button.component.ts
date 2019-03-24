import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xbutton-floating-action-button',
  templateUrl: './x-floating-action-button.component.html',
  styleUrls: ['./x-floating-action-button.component.scss']
})
export class XFloatingActionButtonComponent implements OnInit {

  stc = {
      goal: "Buttons I love",
      path: "src/app/gix/gix-button-cornecto/gix-button-cornecto.component.html",
      state: "completed",
      content: "A Component was created gix-button-cornecto",
      resources: [
        {
              icon:"url",
              title:"Angular material Button",
              subtitle:"NG MDC",
              url:"https://material.angular.io/components/button/examples",
              note:""
            }
      ]
    };
  constructor() { }

  ngOnInit() {
  }

}
