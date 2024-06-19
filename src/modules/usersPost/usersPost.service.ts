import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, catchError, forkJoin, map, of } from 'rxjs';
import { IGetUserResponse } from './interfaces/IUser.interface';
import { IGetPostsResponse } from './interfaces/IPost.interface';

@Injectable()
export class UsersPostService {
  constructor(
    private readonly _httpService: HttpService
  ) { }

  getUsers(): Observable<IGetUserResponse[]> {
    return this._httpService.get<IGetUserResponse[]>('https://jsonplaceholder.typicode.com/users').pipe(
      map(response => response.data),
      catchError(error => {
        console.error('Error fetching users data:', error.message);
        return of([])
      })
    );
  }

  getPosts(): Observable<IGetPostsResponse[]> {
    return this._httpService.get<IGetPostsResponse[]>('https://jsonplaceholder.typicode.com/posts').pipe(
      map(response => response.data),
      catchError(error => {
        console.error('Error fetching posts data:', error.message);
        return of([])
      })
    );
  }

  getUsersAndPosts() {
    return forkJoin({
      posts: this.getPosts(),
      users: this.getUsers()
    }).pipe(
      map(({ posts, users }) => {
        return users.map(user => {
          user['posts'] = posts.filter(post => post.userId === user.id);
          return user;
        })
      })
    )
  }
}
