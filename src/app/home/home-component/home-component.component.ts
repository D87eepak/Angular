import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  slides = [
    {
      image: 'https://source.unsplash.com/1600x900/?nature,water'
    },
    {
      image: 'https://source.unsplash.com/1600x1600/?nature,forest'
    },{
      image: 'https://source.unsplash.com/1600x1600/?nature,desert'
    },
    {
      image: 'https://source.unsplash.com/1600x1600/?nature,mountain'
    }
  ]
}
