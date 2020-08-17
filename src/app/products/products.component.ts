import { Component, OnInit } from '@angular/core';
import{FormControl , FormGroup, Validators} from '@angular/forms'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Userform = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
    email: new FormControl('', [Validators.required , Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
    password: new FormControl('', [Validators.required]),
    passwordconfirm: new FormControl('', [Validators.required]),
    address: new FormControl('', [ Validators.required])

  })
  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    {img: "assets/images/22.jpg"},
    {img: "assets/images/23.jpg"},
    {img: "assets/images/24.jpg"},
    {img: "assets/images/25.jpg"},
    {img: "assets/images/26.jpg"},
    {img: "assets/images/27.jpg"},
    {img: "assets/images/28.jpg"},
    {img: "assets/images/29.jpg"},
  ];
  slideConfig = {
    "infinite": true,
    "autoplay": true, 
    "slidesToShow": 3, 
    // "slidesToScroll": 3,
    'responsive': [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  slickInit(e) {
    //console.log('slick initialized');
  }
  breakpoint(e) {
    //console.log('breakpoint');
  }
  
  afterChange(e) {
    //console.log('afterChange');
  }
  
  beforeChange(e) {
    //console.log('beforeChange');
  }




  signup(formData){
 
    console.log(formData);
    

  }
}
