import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { LANGUAGES } from '../constants/languages';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  hide: boolean = false;
  allLanguages = LANGUAGES;
  shortLanguage: string;
  currenFlag: string;
  selectedLanguage: { shortLanguage: string, flag: string };

  menu = [
    {
      name: 'companies',
      url: '/companies',
      icon: 'business',
    },
    {
      name: 'employee',
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
    this.shortLanguage = this.translocoService.getActiveLang();
    // this.selectedLanguage = this.allLanguages.find(language => language.shortLanguage = this.shortLanguage);
    // this.currenFlag = this.selectedLanguage.flag;
  }

  translateVA() {
    const activeLanguage = this.translocoService.getActiveLang();
    this.shortLanguage = 'vi';
    const selectedLanguage = this.allLanguages.find(language => language.shortLanguage = this.shortLanguage);
    if (activeLanguage === 'en') {
      return this.translocoService.setActiveLang('vi');
    }
    return this.translocoService.setActiveLang('vi');
  }

  translateAV() {
    const activeLanguage = this.translocoService.getActiveLang();
    this.shortLanguage = 'en';
    if (activeLanguage === 'vi') {
      return this.translocoService.setActiveLang('en');
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

  // changeLanguage(shortLanguage: string) {
  //   this.selectedLanguage = this.allLanguages.find(language => language.shortLanguage = shortLanguage)
  //   this.shortLanguage = shortLanguage;
  //   this.currenFlag = this.selectedLanguage.flag;
  //   return this.translocoService.setActiveLang(shortLanguage);
  // }

}
