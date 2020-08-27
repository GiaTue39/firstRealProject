import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Credential } from '../credential';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css'],
})
export class SignInPageComponent implements OnInit {
  hide: boolean;
  credential: Credential = {
    username: 'admin@demo.com',
    password: 'demo!123',
  };
  message: string = '';

  constructor(public router: Router, private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    this.http
      .post(environment.baseAPIUrl + 'auth/authenticate', this.credential)
      .subscribe(
        (data: any) => {
          console.log(data);
          const getToken = data.tokenString;
          localStorage.setItem('token', getToken);
          this.router.navigate(['companies']);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
