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
      {id:1, name:'Iphone 6',price:4000, quantity:2, img:'https://picsum.photos/200' ,categoryId:1},
      {id:2, name:'Samsung S21',price:5000, quantity:1, img:'https://picsum.photos/201' ,categoryId:2},
      {id:3, name:'Iphone 11',price:20000, quantity:1, img:'https://picsum.photos/202' ,categoryId:1},
      {id:4, name:'OnePlus 6',price:8000, quantity:2, img:'https://picsum.photos/199' ,categoryId:3}
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
  clientName:string=''
  IsShown: boolean=true;
  prdName:string='';
  prdimg:string='';
  price:number=0;
 
 
  BuyItem(name:string,img:string, price:number){
    this.IsShown=!this.IsShown;
    this.prdName=name;
    this.prdimg=img;
    this.price=price;
  }
  GoBack(){
    this.IsShown=!this.IsShown;
  }
  ngOnInit(): void {
  }

}
