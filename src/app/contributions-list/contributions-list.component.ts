import { Component, OnInit } from '@angular/core';
import { ContributionService } from '../service/contribution.service';
import { Router,  ActivatedRoute  } from '@angular/router';
import { Contribution } from '../models/contribution';


@Component({
  selector: 'app-contributions-list',
  templateUrl: './contributions-list.component.html',
  styleUrls: ['./contributions-list.component.css']
})
export class ContributionsListComponent implements OnInit {
  items: Contribution[];
  stringToSubmit: String;
  
  constructor(private contributionService: ContributionService,
  private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.stringToSubmit = params.String;
  });
        this.contributionService.getContributions(this.stringToSubmit).subscribe(data => {
        console.log("Contributions ask sucessful");
        this.items = data;
        });
  }
  
  vote() :void{
    this.contributionService.postVote(number id)
  }
    
} 

