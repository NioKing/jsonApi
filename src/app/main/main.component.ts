import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  posts: any[] = []
  

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getAllPosts()
  }

  // Get All Posts
  getAllPosts() {
    this.dataService.getAllPost()
   .subscribe((res: any) => {
     this.posts = res
     console.log(res);
   
   })
  }

  // Create Post
  createPost(post: any) {
    this.posts.push({
      id: this.posts.length + 1,
      title: post.title,
      body: post.body
    })
  }

  // Delete Post
  deletePost(post: any) {
    this.dataService.deletePost(post)
    .subscribe((res: any) => {
      const index = this.posts.indexOf(post)
      this.posts.splice(index, 1)
    })
  }
  
}
