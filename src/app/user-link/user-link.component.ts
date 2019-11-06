import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { User } from '../shared/model/blog.model';
import { BlogApiService } from '../shared/services/blog-api.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user-link',
  templateUrl: './user-link.component.html',
  styleUrls: ['./user-link.component.css']
})
export class UserLinkComponent implements OnInit, OnDestroy {
  @Input() userId: string;
  @Input() isOnlyNameVisible = false;
  user: User;
  private unsubscribe$ = new Subject<void>();

  constructor(private blogService: BlogApiService) { }

  ngOnInit() {
   this.blogService.getUser(this.userId)
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
