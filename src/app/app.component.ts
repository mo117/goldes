import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from "ngx-spinner";
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'goldes';
  loader: boolean;
  constructor(
    private cookieService: CookieService,
    private translateService: TranslateService,
    private spinner: NgxSpinnerService
  ) 
  {
    translateService.setDefaultLang('en');
    this.loader = true
  }
  changeLang(lang: string) {
    this.translateService.use(lang);
    this.translateService.setDefaultLang(lang);
    this.cookieService.set('lang', lang)
  }
  ngOnInit() {
    if (this.cookieService.get('lang') == 'ar') {
      this.translateService.use('ar');
      this.translateService.setDefaultLang('ar');
    }
    else {
      this.translateService.use('en');
      this.translateService.setDefaultLang('en');
    }
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
      this.loader = false
    }, 2000);


  }
}
