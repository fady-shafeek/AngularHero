import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IUser } from '../Models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _url:string="https://jsonplaceholder.typicode.com/users"

  constructor(private http:HttpClient) { }
  getAllUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>(this._url).pipe(catchError((err)=>{
      return throwError(err.message||"Server Error")
    }))
  }
}
