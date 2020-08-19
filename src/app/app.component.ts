import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  
  
  tabs = [
    {
     tag: 'About Us',
     link:'about'
    },
    {
      tag: 'Products',
      link:'products'
    },
    {
      tag:'Quality',
      link:'quality'
    },
    {
      tag:'Infrastructure',
      link:'infrastructure'
    },
    {
      tag:'Contact Us',
      link:'contact'
    }
  ]
}
