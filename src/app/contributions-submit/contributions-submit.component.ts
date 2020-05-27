import { Component, OnInit } from '@angular/core';
import { Contribution } from '../models/contribution';
import { ContributionService } from '../service/contribution.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contributions-submit',
  templateUrl: './contributions-submit.component.html',
  styleUrls: ['./contributions-submit.component.css']
})
export class ContributionsSubmitComponent implements OnInit {
  public item: Contribution;
  
 constructor(private contributionService: ContributionService,
  private router: Router) { }


  ngOnInit(): void {
  }
  onSubmit() {
    console.log("title",this.item.title);
    this.contributionService.postContribution(this.item).subscribe(data => {
      console.log("Submitted sucessful");
      this.item = data;
    });
  }
}
