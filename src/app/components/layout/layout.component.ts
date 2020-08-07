import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  menu = [
    {
      name: 'Companies',
      url: '/companies',
      icon: 'img/3.png',
    },
    {
      name: 'Employees',
      url: '/employees',
      icon: 'img/1.png'
    }
  ]
  images = [
    
    'img/2.png',
    'img/3.png',
    'img/4.png',
    'img/5.jpg',
    'img/6.png',
    'img/7.png',
    'img/8.png',
  ]

  onLogoutBtnClicked():void{
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

}
