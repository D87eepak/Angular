import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router) { } 

  public id: string;
  public productItem:String;
  ngOnInit(): void {
    
  }

  
  products = [
    {
     tag: 'Eye Bolts',
     link:'bolts'
    },
    {
      tag: 'Belt Fasteners',
      link:'fasteners'
    },
    {
      tag:'Machine Tools',
      link:'tools'
    },
    {
      tag:'Hot Forging Items',
      link:'items'
    }
  ]

  onSelect(product){
      
    this.router.navigate(['/products/details',product]);

  }
}
