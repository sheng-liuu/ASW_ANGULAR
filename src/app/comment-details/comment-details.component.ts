import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from '../service/comment.service';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  items;

  constructor(private commentService: CommentService,
  private router: Router) { }

  ngOnInit(): void {
    this.commentService.getCommentDetails(3).subscribe(data => {
      console.log("Comment sucessful");
      this.items = data;
    });
  }
}
