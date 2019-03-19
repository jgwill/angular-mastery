import { Component, OnInit } from '@angular/core';

//@a Importing 
var activeColor = 'red';
var activeIntermediateColor = 'orange';
var inactiveColor = 'green';
var badColor = 'cyan';
var badInnerColor = 'blue';

import { trigger, transition, state, animate, style, keyframes } from '@angular/animations';
//#################################

@Component({
  selector: 'app-xanim-heartbeat',
  templateUrl: './xanim-heartbeat.component.html',
  styleUrls: ['./xanim-heartbeat.component.scss'],
 
  animations: [
    trigger('slideStatus', [
      state('inactive', style({ color: activeColor })),
      state('active', style({ color: inactiveColor })),
      state('bad', style({ color: badColor })),

      transition('* => active', [
        animate('1s', keyframes([
          style({ color: activeColor, offset: 0}),
          style({ color: activeIntermediateColor, offset: 0.8}),
          style({ color: activeColor, offset: 1.0})
        ])),
      ]),//--End transition
      transition('* => inactive', [
        animate('1s', keyframes([
          style({ color: inactiveColor, offset: 0}),
          style({ color: activeIntermediateColor, offset: 0.2}),
          style({ color: activeColor, offset: 1.0})
        ]))
      
      ]), //--End transition
      transition('* => bad', [
        animate('1s', keyframes([
          style({ color: badInnerColor, offset: 0}),
          style({ color: badInnerColor, offset: 0.8}),
          style({ color: badColor, offset: 1.0})
        ])),
      ]),//--End transition
    ])
  ]
})
export class XanimHeartbeatComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
    this.toggle();
    
  }

  
  status: 'active' | 'inactive' | 'bad' = 'inactive';

  toggle() {
    if (this.status === 'active') {
      this.status = 'inactive';
    } else {
      this.status = 'active';
    }
  }
  bad() {
      this.status = 'bad';
    
  }

}
