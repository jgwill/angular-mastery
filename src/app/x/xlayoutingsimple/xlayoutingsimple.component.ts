import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xlayoutingsimple',
  templateUrl: './xlayoutingsimple.component.html',
  styleUrls: ['./xlayoutingsimple.component.scss']
})
export class XlayoutingsimpleComponent implements OnInit {


  stc = {
    goal: "Mastery Responsiveness with Angular/Layout/Flex",
    path: "src/app/x/xlayoutingsimple/xlayoutingsimple.component.html",
    state: "completed",
    content: "The layout Stack itself when small device. basic html is : <div fxLayout=\"row\"  fxLayoutAlign=\"center start\"  fxLayout.xs=\"column\" fxFlexFill >",
    resources: [{
      icon: "perm_data_setting",
      title: "Layouting on StackBlitz",
      subtitle: "simple stack FlexLayout",
      url: "https://stackblitz.com/edit/angular-flex-layout-seed-gyo38a?file=app%2Fapp.component.ts",
      note: "I dont get what the media-query-status does, not really important"
    }, {
      icon: "format_align_center",
      title: "Layout Demos - Alignments",
      subtitle: "Flex showing live the different layout align",
      url: "https://tburleson-layouts-demos.firebaseapp.com/#/docs",
      note: "Really great visually insightful live refreshing the type of layout we can have"
    }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
