import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { Component, OnInit } from '@angular/core';

import { User } from '../models/user';

import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public localUser: User;
  public username;

  constructor(private userService: UserService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.username = params.id;
      this.userService.getUserByUsername(this.username).subscribe(n => {
      console.log("Usuari de back   " + n);
      this.localUser = n;
      });
    });console.log(localStorage.getItem("username"));
  }
  
  isCurrentUser():boolean{
    if(this.username == localStorage.getItem("username")) return true;
    else return false;
  }
  
  async onSubmit() {
    (await this.userService.updateUser(this.localUser)).subscribe(
      async (response) => {
       
      },
      (error) => console.log(error));
  }

}