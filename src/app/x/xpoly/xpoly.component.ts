import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xpoly',
  templateUrl: './xpoly.component.html',
  styleUrls: ['./xpoly.component.scss']
})
export class XpolyComponent implements OnInit {


  stc = {
    goal: "Mastery Shaping/Polygon",
    path: "src/app/x/xpoly/xpoly.component.html",
    state: "completed",
    content: "Why do we create shapes?",
    resources: [
      {
        icon: "format_shapes",
        title: "Shaping Material",
        subtitle: "About Material Design/Shape",
        url: "https://material.io/design/shape/about-shape.html#shaping-material",
        note: "Shapes can be used to reflect a specific purpose or meaning. Text or icons can help reinforce that meaning when the shape of a surface alone could be ambiguous."
      }
    ]
  };


  txt = "Fugiat in mollit exercitation id nisi sit cupidatat nostrud deserunt elit esse. Tempor ex duis cillum sit veniam nostrud excepteur cillum sunt id. Aliqua quis aute laborum eiusmod laborum. Eu id nulla non Lorem. Consectetur mollit anim commodo excepteur in cupidatat voluptate in ullamco irure mollit. Lorem dolore anim id cupidatat incididunt duis. Deserunt occaecat deserunt est labore laboris officia duis ad fugiat nisi consectetur dolore qui.  Anim anim reprehenderit aliquip dolor excepteur ea aliqua consequat esse enim aute. Reprehenderit aliqua reprehenderit non ad reprehenderit consequat labore laborum sit Lorem. Sint proident sint nostrud officia minim..";

  constructor() { }

  ngOnInit() {
  }

}
