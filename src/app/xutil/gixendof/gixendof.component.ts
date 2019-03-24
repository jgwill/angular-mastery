import { Component, OnInit, Input } from '@angular/core';

import {Resource} from "../../resource";

import {environment} from "../../../environments/environment";


export class StateClass {
  outstring: string;
  cssclass: string;
}

@Component({
  selector: 'gixendof',
  templateUrl: './gixendof.component.html',
  styleUrls: ['./gixendof.component.scss']
})
export class GixendofComponent implements OnInit {

  urlrepobase= environment.repoUrlBase;
  
  //"https://github.com/jgwill/x-host-as-github-page-190309/blob/master/";
  
  @Input() goal: string;
  @Input() path: string;
  @Input() state?: string;
  @Input() content?: string;
  @Input() resources?: Resource[];

  constructor() { 
   
  }

  ngOnInit() { 
     console.log(this.state);
     //@issue NOT PARSING Well, Abandonning the project
   // this.o = this.getStateText(this.state,this.classPrefix); //@s When loaded, we know how to format the presentation according to the state
   

  }

  o: StateClass;
  classPrefix: string = "state-";

  getStateText(state:string,p:string): StateClass {
    var r: StateClass;
    switch (state) {
      case "inprogress":
      case "progressing":
        r.outstring = "Progressing";
        r.cssclass = p + "progressing";

        break;
      case "inreview":

      case "reviewing":
        r.outstring = "Reviewing";
        r.cssclass = p + "reviewing";

        break;
      case "completed":
        r.outstring = "Completed";
        r.cssclass = p + "completed";

break;
      default:
        r= null;
        break;
    }
    //console.log(r);
    return r;
  }

}
