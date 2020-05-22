import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from '../service/comment.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {
  items;
  
  constructor(private commentService: CommentService,
  private router: Router) {}

  ngOnInit(): void {
    this.commentService.getThreads(localStorage.getItem("username")).subscribe(data => {
      console.log("Thread sucessful");
      this.items = data;
    });
  }

}
