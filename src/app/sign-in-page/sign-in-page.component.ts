import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { NgForm } from "@angular/forms";
import { Credential } from "../credential";

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {
  hide:any;
  credential: Credential = {
    username: "",
    password: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
  }

  // email = new FormControl('', [Validators.required, Validators.email]);

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';

    

    
  // }

  
}

