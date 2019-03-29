import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XgridsysComponent } from './x/xgridsys/xgridsys.component';
import { XmylistComponent } from './x/xmylist/xmylist.component';

import { XmdiconlistComponent } from './x/xmdiconlist/xmdiconlist.component';
import { XanimripplingComponent } from './xanim/xanimrippling/xanimrippling.component';
import { GixiconTableComponent } from './gixicons/gixicon-table/gixicon-table.component';
import { GixiconsILoveComponent } from './gixicons/gixicons-ilove/gixicons-ilove.component';
import { XtabsComponent } from './x/xtabs/xtabs.component';


import { MatTableModule } from '@angular/material/table';
import { MatRippleModule } from '@angular/material/core';


import { MatCheckboxModule } from '@angular/material/checkbox';

import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatRadioModule} from '@angular/material/radio'; 



//---------------------------
// import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
// import {ErrorStateMatcher} from '@angular/material/core';

import {MatNativeDateModule, MatCardModule } from '@angular/material';

import {MatInputModule} from '@angular/material/input';

import { FormsModule }   from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu'; 

import { GixendofComponent } from './xutil/gixendof/gixendof.component';
import { XresourcesComponent } from './xutil/xresources/xresources.component';
import { XmenusideComponent } from './xmenu/xmenuside/xmenuside.component';
import { XformnewuserComponent } from './xform/xformnewuser/xformnewuser.component';
import { Dt2agePipe } from './pipe/dt2age.pipe';

//app-xanim-heartbeat
import {XanimHeartbeatComponent} from './xanim/xanim-heartbeat/xanim-heartbeat.component';

//
//########################################
import { HttpClientModule } from '@angular/common/http';
import { XnoteslistComponent } from './xnoteslist/xnoteslist.component';
import { SiconComponent } from './sicons/sicon/sicon.component';
import { XshapesComponent } from './x/xshapes/xshapes.component';
import { XhomeComponent } from './xhome/xhome.component';
import { XpolyComponent } from './x/xpoly/xpoly.component';
import { XshapingIndexComponent } from './x/xshaping-index/xshaping-index.component';


//@stcgoal Responsiveness in Layouting
import { FlexLayoutModule } from '@angular/flex-layout';
import { XflexlayoutComponent } from './x/xflexlayout/xflexlayout.component';
import { XlayoutingsimpleComponent } from './x/xlayoutingsimple/xlayoutingsimple.component';
import { XresourcecardComponent } from './xutil/xresourcecard/xresourcecard.component';
import { XshapingButtonsComponent } from './x/xshaping-buttons/xshaping-buttons.component';



//@stcgoal Listen to screen size changes
import {LayoutModule} from '@angular/cdk/layout';
import { XlayoutchangesComponent } from './x/xlayoutchanges/xlayoutchanges.component';
import { XFloatingActionButtonComponent } from './xbutton/x-floating-action-button/x-floating-action-button.component';

//@urir https://material.angular.io/components/button/api
//@stcgoal Trying to create the nice button
//@stcIssue : Button dont render with Material design
import {MatButtonModule} from '@angular/material/button';
import { GixButtonCornectoComponent, GixButtonTwolcornComponent } from 'projects/gixngbuttons/src/gixng-buttons';
// import { GixButtonCornectoComponent } from './gix/gix-button-cornecto/gix-button-cornecto.component';
// import { GixButtonTwolcornComponent } from './gix/gix-button-twolcorn/gix-button-twolcorn.component';

@NgModule({
  declarations: [
    AppComponent,
    XgridsysComponent,
    XmylistComponent,
    XmdiconlistComponent,
    XanimripplingComponent,
    GixiconTableComponent,
    GixiconsILoveComponent,
    XtabsComponent,
    GixendofComponent,
    XresourcesComponent,
    XmenusideComponent,
    XformnewuserComponent,
    Dt2agePipe,
    XanimHeartbeatComponent,
    XnoteslistComponent,
    SiconComponent,
    XshapesComponent,
    XhomeComponent,
    XpolyComponent,
    XshapingIndexComponent,
    XflexlayoutComponent,
    XlayoutingsimpleComponent,
    XresourcecardComponent,
    XshapingButtonsComponent,
    XlayoutchangesComponent,
    XFloatingActionButtonComponent,
    GixButtonCornectoComponent,
    GixButtonTwolcornComponent
  ],
  imports: [
   LayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule, MatIconModule, MatListModule, MatTableModule, MatRippleModule, MatCheckboxModule, MatFormFieldModule, MatTabsModule, MatSidenavModule,MatMenuModule,MatDatepickerModule,MatRadioModule,
    MatCardModule,
    FormsModule,
    MatNativeDateModule,
    //--------------
    MatInputModule,//,FormControl, FormGroupDirective, NgForm, Validators,    ErrorStateMatcher
    HttpClientModule
    ,FlexLayoutModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
