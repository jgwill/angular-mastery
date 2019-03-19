import { Component, OnInit } from '@angular/core';
import {XnotesService} from '../xnotes.service';

import {Xnote} from '../xnote';

@Component({
  selector: 'app-xnoteslist',
  templateUrl: './xnoteslist.component.html',
  styleUrls: ['./xnoteslist.component.scss']
})

export class XnoteslistComponent implements OnInit {

  data : Xnote[];

  constructor(public rest : XnotesService) { }

  ngOnInit() {
    console.log("--------ngOnInit-------detail component ---");
    this.rest.getNotes()
    .subscribe((data: Xnote[]) => {

      
      console.log(data);
      this.data = data;
      
      

    })
  }

}
