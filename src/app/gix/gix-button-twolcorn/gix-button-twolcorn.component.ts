import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'gix-button-twolcorn',
  templateUrl: './gix-button-twolcorn.component.html',
  styleUrls: ['./gix-button-twolcorn.component.scss']
})
export class GixButtonTwolcornComponent implements OnInit {

  @ViewChild("gixTwoCornButton", { read: ElementRef }) gixTwoCornButton: ElementRef;
  @ViewChild("gitTwoCornButtonLabel", { read: ElementRef }) gitTwoCornButtonLabel: ElementRef;

  @Input() txt?: string;

  //@STCGoal It Increases its Width according to the Text Input ; STATE: germinating

  @Input() icon?: string;

  //@Input() color?:string;


  constructor() {
    //default value for buttons/icon
    if (!this.txt)
      this.txt = "";
    if (!this.icon) this.icon = "add";
    //if (!this.color)this.color = "primary";
  }

  ngOnInit() {

    let textFactor = 17; //factor to create the lenght

    if (this.txt) {
      let newLenght = this.txt.length * textFactor;

      this.gixTwoCornButton.nativeElement.style.width = newLenght+ "px";
    }

  }

}
