import { Component, OnInit } from '@angular/core';
import { ContributionService } from '../service/contribution.service';
import { Router,  ActivatedRoute  } from '@angular/router';
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
  idContribution: number;

  constructor(private contributionService: ContributionService,
  private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.params.subscribe(params => {
    this.idContribution = params.number;
  });
  this.contributionService.getContribution(this.idContribution).subscribe(data => {
    console.log("UpvotedComment sucessful");
    this.item = data;
  });
  }
  onSubmit() {

  }


}
