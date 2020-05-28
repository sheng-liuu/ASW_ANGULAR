import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hackernews';
  
  isLogin(){
    if(localStorage.getItem("username") != null) return true;
    else return false;
  }
}
