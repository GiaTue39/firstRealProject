import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

import { Credential } from "../credential";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {
  hide: boolean;
  credential: Credential = {
    username: 'admin@demo.com',
    password: 'demo!123',
  };
  message: string = '';

  constructor(
    public router: Router,
    private http: HttpClient
    ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    // if (form.invalid) {
    //   console.log('invalid');
    //   return;
    // }

    // console.log(form.controls);

    this.http.post('http://localhost:3000/auth/login', this.credential).subscribe(
      (data:any) => {
        console.log(data);
        // console.log(data.accessToken);
        const getToken = data.accessToken;
        localStorage.setItem("token", getToken);
        localStorage.setItem('role', data.role);
        this.router.navigate(['companies']);
      },
      (error) => {
        console.log(error);
      }
    )

    // if(this.credential.username === 'kimtruc' && this.credential.password === '123456') {
    //   localStorage.setItem("user",this.credential.username);
    //   this.message = 'Login successful!';
    // }
  }
  
}

