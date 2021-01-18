import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-registration',
  templateUrl: './reactive-registration.component.html',
  styleUrls: ['./reactive-registration.component.css']
})
export class ReactiveRegistrationComponent implements OnInit {
  reacForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.reacForm = new FormGroup({
      'fname': new FormControl(null, [Validators.required, Validators.maxLength(15)]),
      'lname': new FormControl(null, [Validators.required, Validators.maxLength(15)]),
      'age': new FormControl(25),
      'gender': new FormControl(null, [Validators.required]),
      'category': new FormControl(null, [Validators.required]),
      'Address': new FormGroup({
        'state': new FormControl(),
        'city': new FormControl(),
        'district': new FormControl(),
        'pincode': new FormControl()
      }),
      'username': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl('hoog')
    })
  }

  get fname() {
    return this.reacForm.get('fname');
  }

  get email() {
    return this.reacForm.get('email');
  }

  onSubmit() {
    console.log(this.reacForm);
  }
}
