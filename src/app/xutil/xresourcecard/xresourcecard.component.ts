import { Component, OnInit, Input } from '@angular/core';
import { Resource } from 'src/app/resource';

@Component({
  selector: 'xresourcecard',
  templateUrl: './xresourcecard.component.html',
  styleUrls: ['./xresourcecard.component.scss']
})
export class XresourcecardComponent implements OnInit {

  /* Input Resource */
  @Input() resource: Resource;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Make the url Title or title
   */
  getUrlLink():string
  {
      if (this.resource.urltitle) return this.resource.urltitle;
      return this.resource.title;
  }

}
