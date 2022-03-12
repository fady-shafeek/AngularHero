import { Component, OnInit } from '@angular/core';
import { ISocial } from '../Models/isocial';
import { Regist } from '../Models/regist';
import { UserService } from '../services/user-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private UserService:UserService) { 
    this.catList = [
      { id: 1, name: 'Facebook' },
      { id: 2, name: 'Twitter' },
      { id: 3, name: 'Google' },
    ];
  }
  

  registModel=new Regist("","","");

  catList: ISocial[];

  ngOnInit(): void {
  }

  SendData()
  {
    console.log(this.registModel)
    this.UserService.postUser(this.registModel);
  }
}
