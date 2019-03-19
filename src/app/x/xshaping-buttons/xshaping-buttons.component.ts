import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xshaping-buttons',
  templateUrl: './xshaping-buttons.component.html',
  styleUrls: ['./xshaping-buttons.component.scss']
})
export class XshapingButtonsComponent implements OnInit {

  //@urir https://material.angular.io/components/button/examples

  stc = {
    goal: "Mastery Shaping/Buttons",
    path: "src/app/x/xshaping-buttons/xshaping-buttons.component.scss",
    state: "progressing",
    content: "Buttons are nice and have a meaningful shape.  Changing shape according to State",
    resources: [
      {
        icon: "perm_data_setting",
        title: "Button Component",
        subtitle: "Angular Material Buttons Example",
        url: "https://material.angular.io/components/button/examples",
        note: ""
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
