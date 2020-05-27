
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HackerNewsAPIService {
  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'https://hacker-news.firebaseio.com/v0';
  }

  fetchStories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/topstories.json`);
  }
}