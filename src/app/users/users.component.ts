import { Component, OnInit } from '@angular/core';
import { IUser } from '../Models/iuser';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  UsrList?:IUser[];
  errMsg:string='';
  constructor(private usrServ:UsersService) { }

  ngOnInit(): void {
    this.usrServ.getAllUsers().subscribe(usrData=>{
      this.UsrList=usrData
    },
    error=>{
      this.errMsg=error
    })
  }

}
