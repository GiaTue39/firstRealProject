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

  isMenuOpen = true;
  menuSize = 'lg';

  onLogoutBtnClicked(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

  openNav() {
    this.isMenuOpen = true;
    this.menuSize = 'lg';


    this.hide = true;
    // document.getElementById("close-menu-left").style.width = "250px";
    // document.getElementById("fit-menu").style.display = "block";
    // document.getElementById("close-menu-left").style.display = "block";
  }

  closeNav() {
    this.hide = false;
    // document.getElementById("close-menu-left").style.width = "100px";

    this.isMenuOpen = true;
    this.menuSize = 'sm';
    // document.getElementById("fit-menu").style.width="100%";
    // document.getElementById("fit-menu").style.display = "none";
    // document.getElementById("btnclose").style.display = "none";
  }

  closeNav2() {
    this.hide = false;
    this.isMenuOpen = false;
    // document.getElementById("close-menu-left").style.width = "0px"; còn xuất hiện icon
    // document.getElementById("close-menu-left").style.backgroundColor="red";
    // document.getElementById("fit-menu").style.width="100%";
    // document.getElementById("close-menu-left").style.display = "none";
    // document.getElementById("btnclose").style.display = "none";
  }

}
