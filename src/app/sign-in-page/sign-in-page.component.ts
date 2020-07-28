import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { Credential } from "../credential";

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {
  hide: boolean;
  credential: Credential = {
    username: '',
    password: '',
  };
  message: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      console.log('invalid');
      return;
    }

    console.log(form.controls);

    if(this.credential.username === 'kimtruc' && this.credential.password === '123456') {
      this.message = 'Login successful!';
    }
  }

  

  
}

