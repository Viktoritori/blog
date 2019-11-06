import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogApiService } from '../shared/services/blog-api.service';
import { BlogComment } from '../shared/model/blog.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() post: string;
  comments: Observable<BlogComment[]>;

  constructor(private blogService: BlogApiService) { }

  ngOnInit() {
    this.comments = this.blogService.getComments({post: this.post});
  }

}
