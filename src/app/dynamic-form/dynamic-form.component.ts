import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  df: FormGroup;
  Temp= [] ;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.df = this.fb.group({
      fname: ['', Validators.required], 
      dob: ['', Validators.required],
      gender: ['' , Validators.required],
      address: ['' , Validators.required]
    })
  }

  // get skills() : FormArray {
  //   return this.df.get("skills") as FormArray
  // }
 
  // newSkill(): FormGroup {
  //   return this.fb.group({
  //     skill: '',
  //     exp: '',
  //   })
  // }
 
  // addSkills() {
  //   this.skills.push(this.newSkill());
  // }

  onSubmit() {
    var temp = this.df.value; 
    this.Temp.push(temp);
    console.log(temp);
    this.createForm();
  }

}
