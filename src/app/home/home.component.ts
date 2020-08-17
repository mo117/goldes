import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  images = ['../../assets/images/40.jpg' , '../../assets/images/2.jpg' , '../../assets/images/19.jpg'];

  ngOnInit(): void {
  }

}
