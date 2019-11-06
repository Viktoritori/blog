import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogComment, Post, User } from '../model/blog.model';
import { API_ROOT, ApiUrls } from '../constants/api-url';

@Injectable({
  providedIn: 'root'
})
export class BlogApiService {
  constructor(private http: HttpClient) {
  }

  getComments(params = {}): Observable<BlogComment[]> {
    return this.http.get<BlogComment[]>(`${API_ROOT}${ApiUrls.COMMENTS}`, { params });
  }

  getUser(id: string): Observable<User> {
    const url = ApiUrls.USERS.replace(':id', id.toString());
    return this.http.get<User>(`${API_ROOT}${url}`);
  }

  getPosts(params = {}): Observable<Post[]> {
    return this.http.get<Post[]>(`${API_ROOT}${ApiUrls.POSTS}`, { params });
  }
}
