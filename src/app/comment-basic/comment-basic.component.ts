import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../service/comment.service';
import { Comment } from '../models/comment';
import {ContributionService} from '../service/contribution.service';

@Component({
  selector: 'app-comment-basic',
  templateUrl: './comment-basic.component.html',
  styleUrls: ['./comment-basic.component.css']
})
export class CommentBasicComponent implements OnInit {
  @Input() comment: Comment;
  public replies: Comment[];

  constructor(private commentService: CommentService,
  private contributionService: ContributionService) { }

  ngOnInit(): void {
    this.commentService.getReplies(this.comment.id).subscribe(data => {
      console.log("Comments sucessful");
      this.replies = data;
    });
  }

  vote2(id: number): void {
    this.contributionService.postVote2(id).subscribe(data => {
      window.location.reload();
      console.log("Voted2 sucessful");
    });

  }

  unvote2(id: number): void {
    this.contributionService.postUnvote2(id).subscribe(data => {
      window.location.reload();
      console.log("Unvoted2 sucessful");
    });
  }

  canVote2(item: Comment) {
    if (localStorage.getItem("id") != item.user_id && item.voted == false) return true;
    else return false;
  }

  canUnvote2(item: Comment) {
    if (localStorage.getItem("id") != item.user_id && item.voted == true) return true;
    else return false;
  }

}
