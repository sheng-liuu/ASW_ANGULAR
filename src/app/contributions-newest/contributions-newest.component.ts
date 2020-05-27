import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContributionService } from '../service/contribution.service';

@Component({
  selector: 'app-contributions-newest',
  templateUrl: './contributions-newest.component.html',
  styleUrls: ['./contributions-newest.component.css']
})
export class ContributionsNewestComponent implements OnInit {
 items;

  constructor(private contributionService: ContributionService, private router: Router) {}

  ngOnInit(): void {
    this.contributionService.getUrl().subscribe(data => {
      console.log("Url sucessful");
      this.items = data;
    });
  }

}
