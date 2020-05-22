import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SocialUser } from 'angularx-social-login';



@Injectable({
  providedIn: 'root'
})

export class CommentService {

  constructor(private http: HttpClient) {
  }
  
  getThreads(username: string): Observable<Comment[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-API-KEY': localStorage.getItem("apikey"),
        'Accept': 'application/json'
      })
    };
    
    return this.http.get<Comment[]>(
    'https://hackernews12c.herokuapp.com/api/v1/user/' +username + '/threads', httpOptions);
  }
  
  getCommentDetails(id_comment: number): Observable<Comment> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-API-KEY': localStorage.getItem("apikey"),
        'Accept': 'application/json'
      })
    };
    
    return this.http.get<Comment>(
    'https://hackernews12c.herokuapp.com/api/v1/comments/' + id_comment, httpOptions);
  }
}