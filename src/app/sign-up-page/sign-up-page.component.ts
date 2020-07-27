import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css'],
})
export class SignUpPageComponent implements OnInit {
  user = {
    email: '',
    name: '',
    password: '',
    confirmPass: '',
  };

  constructor() {}

  message = '';

  ngOnInit(): void {}

  onSubmit(form) {
    console.log(form.value);
    console.log(form.controls.confirmPass.value);
    // if (form.controls.confirmPass.value != form.controls.contactPass.value) {
    //   return (this.message = 'Password is incorrect');
    // }
  }
}
