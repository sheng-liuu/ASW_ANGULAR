import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login"
import { UserService } from '../service/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public localUser: User;
  private loggedIn: boolean;
  
  constructor(private userService: UserService,
              private authService: AuthService) { }
 
  signInWithGoogle(): void {
      while (!this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)) {}

      this.authService.authState.subscribe((user) => {
        localStorage.setItem("username", user.name);
        this.loggedIn = (user != null);
        this.userService.login(user).subscribe(n => {
          if(n != null) {
            localStorage.setItem("apikey", n.api_key);
            this.localUser = n;
          }
        });

      console.log("user: ");
      console.log(user);
      console.log("logged in: ");
    
    });
  }
 
  signOut(): void {
    this.authService.signOut();
    localStorage.removeItem("username");
    localStorage.removeItem("apikey");
    this.localUser = null;
  }

  ngOnInit(): void {
  }

}
