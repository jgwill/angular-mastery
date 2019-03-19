import { Component, OnInit } from '@angular/core';

import {Section} from '../../section';



@Component({
  selector: 'app-xtabs',
  templateUrl: './xtabs.component.html',
  styleUrls: ['./xtabs.component.scss']
})
export class XtabsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }






  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
      icon: "insert_photo"
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
      icon: "folder"
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
      icon: "device_hub"
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
      icon: "360"
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
      icon: "gamepad"
    }
  ];

}
