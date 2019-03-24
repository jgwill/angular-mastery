


//@issue , not loading the MOCKs <xresources></xresources>-->





import { Component, OnInit } from '@angular/core';

import { Resource } from '../../resource';
//import {MockResources} from '../../mockresources';

@Component({
  selector: 'xresources',
  templateUrl: './xresources.component.html',
  styleUrls: ['./xresources.component.scss']
})
export class XresourcesComponent implements OnInit {

  //resources: Resource[] = MockResources;

  constructor() {


  }


  displayedColumns: string[] = ['icon', 'title', 'note'];
  resources: Resource[] = [
    {
      icon: "list",
      title: "Material ANgular List",
      url: "https://material.angular.io/components/list/overview",
      note: "<mat-list> is a container component that wraps and formats a series of line items. As the base list component, it provides Material Design styling, but no behavior of its own."

    }, {
      icon: "feedback",
      title: "Feedback Ripple",
      url: "https://material.angular.io/components/ripple/overview",
      note: "Advise user that the action was received"
    },
    {
      icon: "3d_rotation",
      title: "Material Design Icons",
      url: "https://material.io/tools/icons/?icon=history&style=baseline",
      note: "possible icon you can use with <mat-icon mat-list-icon>folder</mat-icon>"
    },
    {
      icon: "format_color_fill",
      title: "Material Design Theme",
      url: "https://material.angular.io/?theme=indigo-pink",
      note: "theme=indigo-pink"
    },
    {
      icon: "format_color_fill",
      title: "Material Design Theme",
      url: "https://material.angular.io/?theme=purple-green",
      note: "theme=purple-green"
    },
    {
      icon: "format_color_fill",
      title: "Material Design Theme",
      url: "https://material.angular.io/?theme=pink-bluegrey",
      note: "theme=pink-bluegrey"
    },
    {
      icon: "format_color_fill",
      title: "Material Design Theme",
      url: "https://material.angular.io/?theme=deeppurple-amber",
      note: "theme=deeppurple-amber"
    },
    {
      icon: "format_color_fill",
      title: "Defining a custom theme",
      url: "https://material.angular.io/guide/theming#defining-a-custom-theme",
      note: "When you want more customization than a pre-built theme offers, you can create your own theme file."
    },
    {
      title: "GITHUB Repo",
      url: "https://github.com/jgwill/ngmastery/"
      ,
      note: "repo"
    }
  ];


  ngOnInit() {
  }
}
