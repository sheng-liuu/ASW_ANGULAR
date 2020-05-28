import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SocialUser } from 'angularx-social-login';
import { Contribution } from '../models/contribution';
import { Comment } from '../models/comment';
import { ContributionDTO } from '../models/contributionDTO';
import { identifierModuleUrl } from '@angular/compiler';



@Injectable({
  providedIn: 'root'
})

export class ContributionService {

  constructor(private http: HttpClient) {
  }
  
  getSubmitted(username: string): Observable<Contribution[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-API-KEY': localStorage.getItem("apikey"),
        'Accept': 'application/json'
      })
    };
    
    return this.http.get<Contribution[]>(
    'https://hackernews12c.herokuapp.com/api/v1/user/' +username + '/submitted', httpOptions);
  }
  
  getUpvoted(): Observable<Contribution[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-API-KEY': localStorage.getItem("apikey"),
        'Accept': 'application/json'
      })
    };
    
    return this.http.get<Contribution[]>(
    'https://hackernews12c.herokuapp.com/api/v1/user/upvoted', httpOptions);
  }
  getAsk(): Observable<Contribution[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-API-KEY': localStorage.getItem("apikey"),
        'Accept': 'application/json'
      })
    };
    
    return this.http.get<Contribution[]>(
    'https://hackernews12c.herokuapp.com/api/v1/contributions?nametype=ask', httpOptions);
  }
  
  getContribution(id: number): Observable<Contribution> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-API-KEY': localStorage.getItem("apikey"),
        'Accept': 'application/json'
      })
    };
    return this.http.get<Contribution>(
    'https://hackernews12c.herokuapp.com/api/v1/contributions/'+ id, httpOptions);
  }
  getCommentsContributions(id: number): Observable<Comment[]> { //all
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-API-KEY': localStorage.getItem("apikey"),
        'Accept': 'application/json'
      })
    };
    return this.http.get<Comment[]>('https://hackernews12c.herokuapp.com/api/v1/contributions/'+ id +'/comments', httpOptions);
  }
  getNumberComments(id: number): Observable<Comment[]> { //all
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-API-KEY': localStorage.getItem("apikey"),
        'Accept': 'application/json'
      })
    };
    return this.http.get<Comment[]>('https://hackernews12c.herokuapp.com/api/v1/contributions/'+ id +'/comments', httpOptions);
  }
  getContributions(): Observable<Contribution[]> { //all
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-API-KEY': localStorage.getItem("apikey"),
        'Accept': 'application/json'
      })
    };
    return this.http.get<Contribution[]>('https://hackernews12c.herokuapp.com/api/v1/contributions', httpOptions);
  }

  postContribution(contribution: ContributionDTO): Observable<Contribution> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-API-KEY': localStorage.getItem("apikey"),
        'Accept': 'application/json'
      })
    };
    return this.http.post<Contribution>(
    'https://hackernews12c.herokuapp.com/api/v1/contributions', contribution, httpOptions);
    
  }

  
  getUrl(): Observable<Contribution[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-API-KEY': localStorage.getItem("apikey"),
        'Accept': 'application/json'
      })
    };
    return this.http.get<Contribution[]>('https://hackernews12c.herokuapp.com/api/v1/contributions?nametype=url', httpOptions);
  }

  postVote(id:number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-API-KEY': localStorage.getItem("apikey"),
        'Accept': 'application/json'
      })
    };
    return this.http.post<any>('https://hackernews12c.herokuapp.com/api/v1/contributions/'+ id +'/vote',null, httpOptions);
  }

  postUnvote(id:number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-API-KEY': localStorage.getItem("apikey"),
        'Accept': 'application/json'
      })
    };
    return this.http.delete<any>('https://hackernews12c.herokuapp.com/api/v1/contributions/'+ id +'/vote', httpOptions);
  }
}
