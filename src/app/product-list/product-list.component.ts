import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../Models/discount-offers';
import { ICategory } from '../Models/icategory';
import { IProduct } from '../Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { 
    this.discount=DiscountOffers.B;

    this.prdList=[
      {id:1, name:'Iphone 6',price:4000, quantity:2, img:'https://picsum.photos/72/71' ,categoryId:1},
      {id:2, name:'Samsung S21',price:5000, quantity:1, img:'https://picsum.photos/71/70' ,categoryId:2},
      {id:3, name:'Iphone 11',price:20000, quantity:1, img:'https://picsum.photos/70/71' ,categoryId:1},
      {id:4, name:'OnePlus 6',price:8000, quantity:2, img:'https://picsum.photos/69/70' ,categoryId:3}
    ];
    this.catList=[
      {id:1,name:'Apple'},
      {id:2, name:'Samsung'},
      {id:3, name:'OnePlus'}
    ];
  }
  discount:DiscountOffers;
  prdList:IProduct[];
  catList:ICategory[];
  selectedCatId:number=0;
  noDiscount:boolean=false;
 
 
  BuyItem(id:number){

  }

  ngOnInit(): void {
  }

}
