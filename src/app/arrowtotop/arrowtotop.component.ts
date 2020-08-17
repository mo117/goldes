import { Component, OnInit , HostListener} from '@angular/core';

@Component({
  selector: 'app-arrowtotop',
  templateUrl: './arrowtotop.component.html',
  styleUrls: ['./arrowtotop.component.css']
})
export class ArrowtotopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toTop(){
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    // window.scrollTo(0,0);
  };
  
  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
      let element = document.querySelector('.top');
      if (window.pageYOffset > element.clientHeight) {
        element.classList.add('Show');
      } else {
        element.classList.remove('Show');
      }
    }

}
