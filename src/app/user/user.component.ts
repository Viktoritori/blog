import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post, User } from '../shared/model/blog.model';
import { BlogApiService } from '../shared/services/blog-api.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  posts: Observable<Post[]>;
  user: User;
  private unsubscribe$ = new Subject<void>();

  constructor(private blogService: BlogApiService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.posts = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.getUserName(params.get('id'));
        return this.blogService.getPosts({author: params.get('id')});
      }
    ));
  }

  getUserName(userId) {
    this.blogService.getUser(userId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((user) => {
        this.user = user;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
