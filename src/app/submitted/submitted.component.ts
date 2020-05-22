import { Component, OnInit } from '@angular/core';
import { ContributionService } from '../service/contribution.service';
import { Contribution } from '../models/contribution';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.css']
})
export class SubmittedComponent implements OnInit {
  items;
  constructor(private contributionService: ContributionService,
  private router: Router) {}

  ngOnInit(): void {
    this.contributionService.getSubmitted(localStorage.getItem("username")).subscribe(data => {
      console.log("Usuari de back");
      this.items = data;
    });
  }


}