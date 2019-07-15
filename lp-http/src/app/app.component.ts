import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching: boolean = false;

  constructor(private postsService: PostsService) {}

  ngOnInit() { 
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    });
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe(
      () => {
        this.loadedPosts = [];
      }
    );
  }
}
