import { Component, OnInit } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';


@Component({
  selector: 'app-xlayoutchanges',
  templateUrl: './xlayoutchanges.component.html',
  styleUrls: ['./xlayoutchanges.component.sass']
})
export class XlayoutchangesComponent implements OnInit {

	//@q Does that tells us where we are when we are starting ?
	breakpointObserver:BreakpointObserver;
	//@urir https://material.angular.io/cdk/layout/overview


	//




	updateMyLayoutForOrientationChange()
	{
		//@a Do something to update layout, but what ?

	}
  constructor() { }

  ngOnInit() {
  //
    let isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');

        let layoutChanges = this.breakpointObserver.observe([
                '(orientation: portrait)',
                '(orientation: landscape)',
        ]);

  //@feature Subscription to the orientation changes from the observer
  layoutChanges.subscribe(result => {
                this.updateMyLayoutForOrientationChange();
        });

  }

}
