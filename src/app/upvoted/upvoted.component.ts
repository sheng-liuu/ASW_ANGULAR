import { Component, OnInit } from '@angular/core';
import { ContributionService } from '../service/contribution.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upvoted',
  templateUrl: './upvoted.component.html',
  styleUrls: ['./upvoted.component.css']
})
export class UpvotedComponent implements OnInit {
  items;
  constructor(private contributionService: ContributionService,
  private router: Router) { }

  ngOnInit(): void {
    this.contributionService.getUpvoted().subscribe(data => {
      console.log("Upvoted sucessful");
      this.items = data;
    });
  }

}
