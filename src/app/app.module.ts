import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';
import { CommentsComponent } from './comments/comments.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserLinkComponent } from './user-link/user-link.component';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FeedComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PostComponent,
    CommentsComponent,
    UserComponent,
    UserLinkComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
