import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post(
        'yourDBURL/posts.json',  // Realtime database URL here
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    this.http.get('yourDBURL/posts.json')  // Realtime DataBase URL
      .pipe(map(responseData => {
        const postsArray = [];
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
