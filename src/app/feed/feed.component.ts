import { Component, OnInit } from '@angular/core';
import { BlogApiService } from '../shared/services/blog-api.service';
import { Observable } from 'rxjs';
import { Post } from '../shared/model/blog.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(private blogService: BlogApiService) { }

  ngOnInit() {
    this.posts = this.blogService.getPosts();
  }

}
