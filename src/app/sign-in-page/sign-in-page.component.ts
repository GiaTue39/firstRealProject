import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  //password = new FormControl('', [Validators.required, Validators.password]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';

    // if (this.password.hasError('required')) {
    //   return 'You must enter a value';
    // }

    // return this.password.hasError('password') ? 'Not a valid password' : '';

    
  }

  onSubmit(form) {
    // Do something awesome
    console.log(form);
    throw Error('something go wrong');
  }
  hide = true;
}

