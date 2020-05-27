import { Component, OnInit } from '@angular/core';
import { CommentService } from '../service/comment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upvotedcomment',
  templateUrl: './upvotedcomment.component.html',
  styleUrls: ['./upvotedcomment.component.css']
})
export class UpvotedcommentComponent implements OnInit {
  items;
  
  constructor(private commentService: CommentService,
  private router: Router) { }

  ngOnInit(): void {
    this.commentService.getUpvotedComment().subscribe(data => {
      console.log("UpvotedComment sucessful");
      this.items = data;
    });
  }

}
