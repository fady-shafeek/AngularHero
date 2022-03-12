import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/posts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IPost } from '../Models/ipost';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postList?:IPost[]
  errMsg:string=''
  constructor(private activatedRoute:ActivatedRoute,private postSrv:PostService,private router:Router) { }

  ngOnInit(): void {
    
    this.postSrv.getAllPosts().subscribe(postData=>{
      this.postList=postData
    },
    error=>{
      this.errMsg=error
    })
  }

}
