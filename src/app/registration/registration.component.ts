import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // @ViewChild('template reference') var_name: NgForm;
  @ViewChild('regForm') Form: NgForm;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    var data = this.Form
    debugger
    console.log(data);
    if
    this.Form.reset()
  }

  resetform() {
    this.Form.reset()
  }
}
