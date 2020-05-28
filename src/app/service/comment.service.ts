import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SocialUser } from 'angularx-social-login';
import { CommentDTO } from '../models/commentDTO';
import { Comment } from '../models/comment';

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
  
  getUpvotedComment(): Observable<Comment[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-API-KEY': localStorage.getItem("apikey"),
        'Accept': 'application/json'
      })
    };

    return this.http.get<Comment[]>(
    'https://hackernews12c.herokuapp.com/api/v1/user/upvotedcomment', httpOptions);
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
  postComment(comment: CommentDTO,): Observable<Comment>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-API-KEY': localStorage.getItem("apikey"),
        'Accept': 'application/json'
      })
    };
    return this.http.post<Comment>(
      'https://hackernews12c.herokuapp.com/api/v1/comments', comment, httpOptions);
  }

  postVote(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-API-KEY': localStorage.getItem("apikey"),
        'Accept': 'application/json'
      })
    };
    return this.http.post<any>('https://hackernews12c.herokuapp.com/api/v1/comments/' + id + '/replies', null, httpOptions);
  }
getCommentReply(id: number) {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-KEY': localStorage.getItem("apikey"),
      'Accept': 'application/json'
    })
  };
  return this.http.post<any>('https://hackernews12c.herokuapp.com/api/v1/comments/' + id + '/vote', null, httpOptions);
}
  postUnvote(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-API-KEY': localStorage.getItem("apikey"),
        'Accept': 'application/json'
      })
    };
    return this.http.delete<any>('https://hackernews12c.herokuapp.com/api/v1/comments/' + id + '/vote', httpOptions);
  }

  getReplies(id: number): Observable<Comment[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-API-KEY': localStorage.getItem("apikey"),
        'Accept': 'application/json'
      })
    };
    return this.http.get<Comment[]>('https://hackernews12c.herokuapp.com/api/v1/comments/' + id + '/replies', httpOptions);
  }
}

