import { Component, OnInit } from '@angular/core';
import { ContributionService } from '../service/contribution.service';
import { Router } from '@angular/router';
import { Contribution } from '../models/contribution';

@Component({
  selector: 'app-contributions-list',
  templateUrl: './contributions-list.component.html',
  styleUrls: ['./contributions-list.component.css']
})
export class ContributionsListComponent implements OnInit {
  items: Contribution[];
  
  constructor(private contributionService: ContributionService,
  private router: Router) { }

  ngOnInit(nametype:string): void {
    if (nametype == "ask")
        this.contributionService.getContributions(nametype).subscribe(data => {
        console.log("Contributions ask sucessful");
        this.items = data;
        });
    
    elseif (nametype == "url")
        this.contributionService.getContributions(nametype).subscribe(data => {
        console.log("Contributions url sucessful");
        this.items = data;
        });
  
    else
        this.contributionService.getContributions(nametype).subscribe(data => {
        console.log("Contributions news sucessful");
        this.items = data;
        });
  }
    

}
