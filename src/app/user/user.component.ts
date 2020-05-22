import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { Component, OnInit } from '@angular/core';

import { User } from '../models/user';

import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public localUser: User;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    let username = localStorage.getItem("username");
    this.userService.getUserByUsername(username).subscribe(n => {
      console.log("Usuari de back   " + n);
      this.localUser = n;
        
    });
  }
  
   async onSubmit() {
    (await this.userService.updateUser(this.localUser)).subscribe(
      async (response) => {
       
      },
      (error) => console.log(error));
  }

}