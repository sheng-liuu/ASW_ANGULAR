import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContributionService } from '../service/contribution.service';
import { Contribution } from '../models/contribution';

@Component({
  selector: 'app-contributions-newest',
  templateUrl: './contributions-newest.component.html',
  styleUrls: ['./contributions-newest.component.css']
})
export class ContributionsNewestComponent implements OnInit {
 items;

  constructor(private contributionService: ContributionService, private router: Router) {}

  ngOnInit(): void {
    this.contributionService.getContributions().subscribe(data => {
      console.log("Url sucessful");
      this.items = data;
    });
  }
  
  canVote(item: Contribution){
    if(localStorage.getItem("id") != item.user_id && item.voted == false) return true;
    else return false;
  }

}
