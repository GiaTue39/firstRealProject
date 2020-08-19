import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  hide: boolean = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  menu = [
    {
      name: 'Companies',
      url: '/companies',
      icon: 'business',
    },
    {
      name: 'Employees',
      url: '/employees',
      icon: 'person'
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
  ];

  isMenuOpen = false;
  menuSize = 'lg';

  onLogoutBtnClicked(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

  openNav() {
    this.isMenuOpen = true;
    this.menuSize = 'lg';
    this.hide = true;
  }

  closeNav() {
    this.hide = false;
    this.isMenuOpen = true;
    this.menuSize = 'sm';
  }

  closeNav2() {
    this.hide = false;
    this.isMenuOpen = false;
  }

}
