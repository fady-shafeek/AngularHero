import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { StoredData } from '../ViewModels/stored-data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { 
    this.storeInfo = new StoredData('Amazon','https://picsum.photos/250/100',['Food','Drink', 'Sport']);
    this.prdList=[
      {id:1, name:'Iphone 6',price:4000, quantity:2, img:'https://picsum.photos/70/70' ,categoryId:1},
      {id:2, name:'Samsung S21',price:5000, quantity:1, img:'https://picsum.photos/70/70' ,categoryId:2},
      {id:3, name:'Iphone 11',price:20000, quantity:1, img:'https://picsum.photos/70/70' ,categoryId:1},
      {id:4, name:'OnePlus 6',price:8000, quantity:2, img:'https://picsum.photos/70/70' ,categoryId:3}
    ];

  }
  prdList:IProduct[];
  IsShown: boolean=true;
  storeInfo: StoredData;
  ClientName:string="John Doe"
  Discount: string="10%"
  IsPurshased:boolean=true
  ngOnInit(): void {
  }
  Show(){
    this.IsShown=!this.IsShown
  }

}
