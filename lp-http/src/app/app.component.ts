import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() { 
    this.onFetchPosts(); 
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.http
      .post<{name: string}>(
        'yourDBURL/posts.json',  // Realtime database URL here
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    this.http.get<{[key: string]: Post}>('yourDBURL/posts.json')  // Realtime DataBase URL
      .pipe(map(responseData => {
        const postsArray: Post[] = [];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            postsArray.push({ ...responseData[key], id: key });
          }
        }
        return postsArray;
      }))
      .subscribe(
        responseData => {
          console.log(responseData);
        }
      );
  }

  onClearPosts() {
    // Send Http request
  }
}
