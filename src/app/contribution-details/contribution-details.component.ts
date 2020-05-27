import { Component, OnInit } from '@angular/core';
import { ContributionService } from '../service/contribution.service';
import { Router } from '@angular/router';
import { Contribution } from '../models/contribution';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-contribution-details',
  templateUrl: './contribution-details.component.html',
  styleUrls: ['./contribution-details.component.css']
})
export class ContributionDetailsComponent implements OnInit {
  public item: Contribution;
  comment: Comment;

  constructor(private contributionService: ContributionService,
  private router: Router) { }

  ngOnInit(): void {

  }
  onSubmit() {

  }
  showContribution(id:number){
    this.contributionService.getContribution(id).subscribe(data => {
      console.log("UpvotedComment sucessful");
      this.item = data;
    });
  }

}