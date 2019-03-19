import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xanimrippling',
  templateUrl: './xanimrippling.component.html',
  styleUrls: ['./xanimrippling.component.scss']
})
export class XanimripplingComponent implements OnInit {

  constructor() { 
    this.radius = 175;
    this.centered= false;
  }

  ngOnInit() {
  }

  
  
  
  centered = false;
  disabled = false;
  unbounded = false;
  
  radius: number;
  color: string;
  
}