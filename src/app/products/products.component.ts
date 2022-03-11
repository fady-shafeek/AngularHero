import { Component, OnInit } from '@angular/core';
import { StoredData } from '../ViewModels/stored-data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { 
    this.storeInfo = new StoredData('Amazon','https://picsum.photos/250/100',['Food','Drink', 'Sport']);
  }
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
