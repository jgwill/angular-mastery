import { Component, OnInit } from '@angular/core';
import { Resource } from '../../resource';
import {MockResources} from '../../mockresources';

@Component({
  selector: 'xmenuside',
  templateUrl: './xmenuside.component.html',
  styleUrls: ['./xmenuside.component.scss']
})
export class XmenusideComponent implements OnInit {

  resources : Resource[] = MockResources;
  
  constructor() { }

  ngOnInit() {
  }

}
