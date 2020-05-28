import { Component, OnInit } from '@angular/core';
import { ContributionService } from '../service/contribution.service';
import { Contribution } from '../models/contribution';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.css']
})
export class SubmittedComponent implements OnInit {
  items;
  public username;
  
  constructor(private contributionService: ContributionService,
  private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params)
      this.username = params.id;
      this.contributionService.getSubmitted(this.username).subscribe(data => {
        console.log("Submitted sucessful");
        this.items = data;
      });
    });
    
  }


}
