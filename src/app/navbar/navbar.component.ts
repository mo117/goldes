import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  IsArbic: boolean;
  IsEnglish: boolean;
  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.IsArbic = true;
    this.IsEnglish = false;
  }
  navbarOpen:boolean = false;

  toggleNavbar(){

    this.navbarOpen = !this.navbarOpen
  };

  
  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
      let element = document.querySelector('.navbar');
      if (window.pageYOffset > element.clientHeight) {
        element.classList.add('navbar-inverse');
      } else {
        element.classList.remove('navbar-inverse');
      }

    }
    changeLang(lang: string) {
      if(lang == 'ar') {
        this.IsArbic = false;
        this.IsEnglish = true;
      } 
      else {
        this.IsArbic = true;
        this.IsEnglish = false;
      }
      this.translateService.use(lang);
      this.translateService.setDefaultLang(lang);
  }


}
