import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'sicon',
  templateUrl: './sicon.component.html',
  styleUrls: ['./sicon.component.scss']
})

/**
 * Simple Free Icons
 * https://simpleicons.org/
 */
export class SiconComponent implements OnInit {


  @Input('name') name : string;

  constructor() {
  }
  
  
  ngOnInit() {
    

  }

}
