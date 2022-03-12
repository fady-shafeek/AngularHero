import { Injectable } from '@angular/core';
import { IPost } from '../Models/ipost';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _url:string="https://jsonplaceholder.typicode.com/posts"
  constructor(private http:HttpClient) { }
  getAllPosts():Observable<IPost[]>{
    return this.http.get<IPost[]>(this._url).pipe(catchError((err)=>{
      return throwError(err.message||"Server Error")
    }))
  }

}