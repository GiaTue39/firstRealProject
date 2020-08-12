import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  hide : boolean = false;
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
  ]

  onLogoutBtnClicked():void{
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

  openNav() {
    this.hide=true;
    
    document.querySelector("mySidenav").classList.add('');
    
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("hide").style.display = "block";
  }

  closeNav() {
    this.hide=false;
    document.getElementById("mySidenav").style.width = "100px";
    document.getElementById("hide").style.display = "none";
    document.getElementById("btnclose").style.display = "none";
  } 

  closeNav2() {
    this.hide=false;
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("hide").style.display = "none";
    document.getElementById("btnclose").style.display = "none";
  } 

}
