import { Component, OnInit } from '@angular/core';
import { ContributionService } from '../service/contribution.service';
import { Contribution } from '../models/contribution';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contributions-ask',
  templateUrl: './contributions-ask.component.html',
  styleUrls: ['./contributions-ask.component.css']
})
export class ContributionsAskComponent implements OnInit {
    items;

  constructor(private contributionService: ContributionService,
    private router: Router) {}

  ngOnInit(): void {
    this.contributionService.getAsk().subscribe(data => {
      console.log("Ask sucessful");
      this.items = data;
    });
  }

}
