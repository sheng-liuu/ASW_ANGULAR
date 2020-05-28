import { Component, OnInit } from '@angular/core';
import { ContributionService } from '../service/contribution.service';
import { CommentService } from '../service/comment.service';
import { Router,  ActivatedRoute  } from '@angular/router';
import { Contribution } from '../models/contribution';
import { Comment } from '../models/comment';
import { FormGroup, FormControl } from '@angular/forms';
import { CommentDTO } from '../models/commentDTO';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-contribution-details',
  templateUrl: './contribution-details.component.html',
  styleUrls: ['./contribution-details.component.css']
  
})
export class ContributionDetailsComponent implements OnInit {
  public item: Contribution;
  comment: Comment;
  idContribution: number;
 idUser: String;
 idComment: number;
 comments: Comment[];

  constructor(private contributionService: ContributionService,
    private commentService: CommentService,
  private router: Router, private route: ActivatedRoute) { }
  createForm = new FormGroup({
    content: new FormControl(''),
  });
  
  ngOnInit(): void {
      this.route.params.subscribe(params => {
    this.idContribution = params.id;
    console.log(this.idContribution)

  });
  this.contributionService.getContribution(this.idContribution).subscribe(data => {
    console.log("Show contribution sucessful");
    this.item = data;
  });

  this.idUser = localStorage.getItem("id");
  this.contributionService.getCommentsContributions(this.idContribution).subscribe(data => {
    console.log("Comments sucessful");
    this.comments = data;
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
      console.log("Comment sucessful");
      this.router.navigateByUrl('/contribution-details/'+ this.idContribution);
    });
  }

  vote(id: number): void {
    this.contributionService.postVote(id).subscribe(data => {
      window.location.reload();
      console.log("Voted sucessful");
    });

  }

  unvote(id: number): void {
    this.contributionService.postUnvote(id).subscribe(data => {
      window.location.reload();
      console.log("Unvoted sucessful");
    });

  }

  vote2(id: number): void {
    this.commentService.postVote(id).subscribe(data => {
      window.location.reload();
      console.log("Voted2 sucessful");
    });

  }

  unvote2(id: number): void {
    this.commentService.postUnvote(id).subscribe(data => {
      window.location.reload();
      console.log("Unvoted2 sucessful");
    });

  }

  canVote(item: Contribution) {
    if (localStorage.getItem("id") != item.user_id && item.voted == false) return true;
    else return false;
  }

  canUnvote(item: Contribution) {
    if (localStorage.getItem("id") != item.user_id && item.voted == true) return true;
    else return false;
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

