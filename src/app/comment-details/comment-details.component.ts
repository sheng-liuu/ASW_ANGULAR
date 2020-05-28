import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentService } from '../service/comment.service';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  item: Comment;
  idComment: number;

  constructor(private commentService: CommentService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idComment = params.id;
      console.log(this.idComment)
    });

    this.commentService.getCommentDetails(this.idComment).subscribe(data => {
      console.log("Comment sucessful");
      this.item = data;
    });
  }
}
