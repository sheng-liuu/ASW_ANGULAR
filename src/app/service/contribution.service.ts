import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SocialUser } from 'angularx-social-login';
import { Contribution } from '../models/contribution';



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
  getContribution(id): Observable<Contribution> {
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
  
  getContributions(nametype:String): Observable<Contribution[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-API-KEY': localStorage.getItem("apikey"),
        'Accept': 'application/json'
      })
    };
    if (nametype == null) 
      return this.http.get<Contribution[]>('https://hackernews12c.herokuapp.com/api/v1/contributions', httpOptions);
    else
      return this.http.get<Contribution[]>('https://hackernews12c.herokuapp.com/api/v1/contributions?nametype=' + nametype, httpOptions);
  }
}
