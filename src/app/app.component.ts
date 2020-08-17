import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'goldes';
  loader: boolean;
  constructor(
    // private cookieService: CookieService,
    private translateService: TranslateService,
    private spinner: NgxSpinnerService
) {
    translateService.setDefaultLang('en');
    this.loader = true
  }
  changeLang(lang: string) {
    this.translateService.use(lang);
    this.translateService.setDefaultLang(lang);
  }
  ngOnInit() {
    this.spinner.show();
 
    setTimeout(() => {
      this.spinner.hide();
      this.loader = false
    }, 2000);

    
  }
}
