import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login"
import { UserService } from '../service/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public localUser: User;
  public user: SocialUser
  public loggedIn: boolean;
  
  constructor(private userService: UserService,
              private authService: AuthService,private router: Router) { }
 
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);

      console.log("user: ");
      console.log(user);
      console.log("logged in: ");
      console.log(this.loggedIn);
      if (user != null) localStorage.setItem("username", user.name);
      if (this.loggedIn) {
        this.userService.login(user).subscribe(n => {
          this.localUser = n;
          localStorage.setItem("apikey", n.api_key);
          localStorage.setItem("id", n.id);
          console.log(n);
          console.log(this.localUser);
          this.router.navigateByUrl('/contributions');
          });
      }
    });
  }
 
  signOut(): void {
    this.authService.signOut();
    localStorage.removeItem("id");
    localStorage.removeItem("username");
    localStorage.removeItem("apikey");
    this.localUser = null;
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);

      console.log("**user: ");
      console.log(user);
      console.log("logged in: ");
      console.log(this.loggedIn);
      localStorage.setItem("username", user.name);
      if (this.loggedIn) {
        this.userService.getUserByUsername(user.name).subscribe(n => {
          this.localUser = n;
          console.log("Login heroku   " + this.localUser);
          localStorage.setItem("apikey", n.api_key);
          localStorage.setItem("id", n.id);
        });
      }
    }, (error) => console.log(error));
  }

}
