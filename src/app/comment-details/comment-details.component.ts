import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContributionService } from '../service/contribution.service';
import { CommentService } from '../service/comment.service';
import { Comment } from '../models/comment';
import { CommentDTO } from '../models/commentDTO';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  public item: Comment;
  public idComment: number;
  public idContribution: number;
  public idUser: String;
  public replies: Comment[];

  constructor(private commentService: CommentService, private contributionService: ContributionService,
    private router: Router, private route: ActivatedRoute) { }
  createForm = new FormGroup({
    content: new FormControl(''),
  });

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idComment = params.id;
      console.log(this.idComment)
    });

    

    this.idUser = localStorage.getItem("id");
    this.commentService.getCommentDetails(this.idComment).subscribe(data => {
      console.log("Comment sucessful");
      this.item = data;
      this.idContribution = this.item.contribution_id;
      console.log(this.idContribution)
    });

    this.commentService.getReplies(this.idComment).subscribe(data => {
    console.log("Comments sucessful");
    this.replies = data;
  });
  }

  onSubmit() {
    const postItem: CommentDTO = {
      content: this.createForm.controls['content'].value,
      user_id: this.idUser,
      contribution_id: this.idContribution,
      comment_id: this.idComment
    };
    this.commentService.postComment(postItem).subscribe(data => {
      console.log("Reply sucessful");
      this.router.navigateByUrl('/contribution-details/' + this.idContribution);
    });
  }
}
