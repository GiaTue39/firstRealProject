import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  hide: boolean = false;

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

  constructor(
    private router: Router,
    private translocoService: TranslocoService,
  ) { }

  ngOnInit(): void {
  }

  dichNe() {
    const activeLanguage = this.translocoService.getActiveLang();
    
    if (activeLanguage === 'en') {
      return this.translocoService.setActiveLang('vi');
    }

    return this.translocoService.setActiveLang('en');
  }


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
    this.isMenuOpen = false;
    this.menuSize = 'sm';
  }

  closeNav2() {
    this.hide = false;
    this.isMenuOpen = false;
  }

  // title = 'MultiLanguages';
  // currentLanguage: string;
  // languages = ['English', 'Vietnamese', 'Japanese'];
  // languageControl = new FormControl();

  // changeLanguage() {
  //   const selectedLanguages = this.languageControl.value;
  //   switch(selectedLanguages) {
  //     case 'English': {
  //       this.translocoService.setActiveLang('en');
  //       break;
  //     }

  //     case 'Vietnamese': {
  //       this.translocoService.setActiveLang('vi');
  //       break;
  //     }

  //     case 'Japanese': {
  //       this.translocoService.setActiveLang('ja');
  //       break;
  //     }
  //   }
  // }

}
