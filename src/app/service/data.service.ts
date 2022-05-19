import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  // Get All Post
  getAllPost() {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`)
  }

  // Get Post By Id
  getPostById(id: any) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

  // Add Post
  addPost(post: any) {
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`, post)
  }

  // Edit Post
  editPost(post: any) {
    return this.http.patch(`https://jsonplaceholder.typicode.com/posts?${post.id}`, post)
  }

  // Delete Post
  deletePost(post: any) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {responseType: "text"})
  }
}
