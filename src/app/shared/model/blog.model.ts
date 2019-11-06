export interface Post {
  id: string;
  title: string;
  body: string;
  author: string;
}

export interface BlogComment {
  id: string;
  body: string;
  post: string;
  author: string;
}

export interface User {
  id: string;
  username: string;
}
