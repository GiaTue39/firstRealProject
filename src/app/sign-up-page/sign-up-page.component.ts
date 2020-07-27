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

  ngOnInit(): void {}

  onSubmit(form) {
    console.log(form.value);
    console.log(form.controls.confirmPass.value);
  }
}
