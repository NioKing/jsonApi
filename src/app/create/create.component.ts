import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  // @Input() posts: any[] = []
  @Output() postEvent = new EventEmitter<any[]>();
  posts: any = []

  createForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required])
  })

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    
  }

  addPost() {
    const post = {
      title: this.createForm.get('title')?.value,
      body: this.createForm.get('body')?.value
    }
    this.dataService.addPost(post)
    .subscribe((res: any) => {
      this.posts = res
      this.postEvent.emit(this.posts)
      this.createForm.reset()
      console.log(this.posts);
      
    })
  }

}
