import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  StoreName:string="Amazon"
  StoreLogo:string="favicon.ico"
  ClientName:string="John Doe"
  Discount: string="10%"
  IsPurshased:boolean=true
  ngOnInit(): void {
  }

}
