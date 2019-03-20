import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xlayoutchanges',
  templateUrl: './xlayoutchanges.component.html',
  styleUrls: ['./xlayoutchanges.component.sass']
})
export class XlayoutchangesComponent implements OnInit {

	breakpointObserver:BreakpointObserver;
	//@urir https://material.angular.io/cdk/layout/overview
	const isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');

  constructor() { }

  ngOnInit() {
  }

}
