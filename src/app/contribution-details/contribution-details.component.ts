import { Component, OnInit } from '@angular/core';
import { ContributionService } from '../service/contribution.service';
import { Router } from '@angular/router';
import { Contribution } from '../models/contribution';

@Component({
  selector: 'app-contribution-details',
  templateUrl: './contribution-details.component.html',
  styleUrls: ['./contribution-details.component.css']
})
export class ContributionDetailsComponent implements OnInit {
  item: Contribution;
  idContribution: number;

  constructor(private contributionService: ContributionService,
  private router: Router) { }

  ngOnInit(): void {
  /*    this.router.params.subscribe(params => {
-      this.idContribution = params.number;
-  });
    showContribution();
  }
  
  showContribution(){
    this.contributionService.getContribution(idContribution).subscribe(data => {
      console.log("UpvotedComment sucessful");
      this.item = data;
    });*/
  }


}
