import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // @ViewChild('template reference') var_name: NgForm;
  @ViewChild('regForm') Form: NgForm;

  constructor( public service: PostService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    var data = form;
    
    console.log(data.value);
    //this.service.post().subscribe(
     // (res : )
    //)
    
    this.Form.reset()
  }

  // onSubmit(form: NgForm) {
  //   this.service.post(this.Form).subscribe(
  //     (res: any) => {
  //       if (res.succeeded==true) {
  //         this.Form.reset();
  //         //console.log(res);
         
  //       } else {
  //         console.log(res);
  //       }
          
  //     },
  //     err => {
  //       console.log(this.Form);
  //       this.Form.reset();
  //       console.log(err);
  //     }
  //   );
  // }

  // resetform() {
  //   this.Form.reset()
  // }
}
