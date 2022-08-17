import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';
import { Post } from 'src/app/shared/models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts?: Post[];

  constructor(private postService: PostService) { } 
   
  ngOnInit(): void {
    this.getPosts();
  }
 
  private getPosts() {
    let req$ = this.postService.getPosts();

    req$.subscribe(
      res => {
        this.posts = res;
      }
    )
  }

}
