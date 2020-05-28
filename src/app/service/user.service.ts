import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { SocialUser } from 'angularx-social-login';
import { UserDTO } from '../models/userDTO';



@Injectable({
  providedIn: 'root'
})
export class UserService {



  private userUrl = 'https://hackernews12c.herokuapp.com/api/v1/user';
  
  

  constructor(private http: HttpClient) {
  }

  getUserByUsername(username: string): Observable<User> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-API-KEY': localStorage.getItem("apikey"),
        'Accept': 'application/json'
      })
    };
    console.log(httpOptions);
    
    return this.http.get<User>(
    'https://hackernews12c.herokuapp.com/api/v1/user?id=' + username, httpOptions);
  }
  
  login(user: SocialUser): Observable<User> {
    const postUser: UserDTO = {
      name: user.name,
      email: user.email,
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.post<User>(
    'https://hackernews12c.herokuapp.com/api/v1/login', postUser, httpOptions);
  }
  
  async updateUser(user: User) {
    const putIssue = {
      about: user.about
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-API-KEY': localStorage.getItem("apikey"),
        'Accept': 'application/json'
      }),
    };

    return this.http.patch('https://hackernews12c.herokuapp.com/api/v1/user', putIssue, httpOptions);
  }
  
  
}