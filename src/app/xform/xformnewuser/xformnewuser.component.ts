import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Patientuser } from "../../entities/patientuser";

//@o ######### Import for Form
//@urir https://material.angular.io/components/input/examples




@Component({
  selector: 'xformnewuser',
  templateUrl: './xformnewuser.component.html',
  styleUrls: ['./xformnewuser.component.scss']
})
export class XformnewuserComponent implements OnInit {
  managing = true;

  formTitle = "New/Edit Patient";

  did = "oehuntsoehu897oeu"; //@s Mock Doctor ID
  doctorLabel = "Doctor";
  firstLabel = "First name";
  lastLabel = "Last name";
  emailLabel = "Email";
  submitLabel = "Add Patient";
  newLabel = "Reset";
  editLabel = "Edit Patient";
  submittedLabel = "You submitted the following:";
  dtFormat = 'yyyy-MM-dd';
  birthLabel = "Birth Date: ";
  ageLabel = "Age: "



  genders = ['Homme', 'Femme', 'Autre'];

  model = new Patientuser(this.did, "mh3tn45htn34h5tn43", "Guillaume", "Isabelle", "1976-05-13", this.genders[0], "jgi@guillaume.com");



  @ViewChild("newFormWrapper") newFormWrapper: ElementRef;
  @ViewChild("first") firstField: ElementRef;

  submitted = false;


  onSubmit() {
    this.submitted = true;
    // this.newPatient();

  }
  editPatient() {

  }

  newPatient() {
    this.model = new Patientuser(this.did, '', '', '', '', '', '');
    this.firstField.nativeElement.focus();
  }

  get diagnostic() { return JSON.stringify(this.model); }

  //-------------------------

  //-----------------------

  constructor() { }

  ngOnInit() {
  }

}
