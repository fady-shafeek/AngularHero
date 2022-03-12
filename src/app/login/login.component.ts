import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private UserService:UserService) { }

  topics=["Angular","React","JavaScript"];
  userModel=new User("","");


  ngOnInit(): void {
  }

  SendData()
  {
    console.log(this.userModel)
    this.UserService.postUser(this.userModel);
  }
}
