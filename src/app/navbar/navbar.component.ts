import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  IsArbic: boolean;
  IsEnglish: boolean;
  constructor(
    private translateService: TranslateService,
    private cookieService: CookieService,
  ) {
    this.IsArbic = true;
    this.IsEnglish = false;
  }

  ngOnInit(): void {
    if (this.cookieService.get('lang') == 'en') {
      this.IsArbic = true;
      this.IsEnglish = false;
    }
    else {
      this.IsArbic = false;
      this.IsEnglish = true;
    }
  }

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
    if (lang == 'ar') {
      this.IsArbic = false;
      this.IsEnglish = true;
    }
    else {
      this.IsArbic = true;
      this.IsEnglish = false;
    }
    this.translateService.use(lang);
    this.translateService.setDefaultLang(lang);
    this.cookieService.set('lang', lang)

  }
  navClick() {
    let element = document.querySelector('.navbar-collapse');
    element.classList.remove('show');
  }


}
