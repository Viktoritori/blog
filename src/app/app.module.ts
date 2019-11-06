import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './post/post.component';
import { CommentsComponent } from './comments/comments.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserLinkComponent } from './user-link/user-link.component';
import { MatButtonModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material';

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
    RouterModule,
    MatCardModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
