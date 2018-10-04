import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from './models/hero';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsURL = 'api/posts';

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsURL).pipe(
      tap(heroes => console.log('fetched posts')),
      catchError(this.handleError('getPosts', []))
    );
  }

  getPost(id: number): Observable<Post> {
    const url = `${this.postsURL}/${id}`;
    return this.http.get<Post>(url).pipe(
      tap(() => console.log(`fetched post id=${id}`)),
      catchError(this.handleError<Post>(`getPost id=${id}`))
    );
  }
}
