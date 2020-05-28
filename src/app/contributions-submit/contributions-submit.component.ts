import { Component, OnInit } from '@angular/core';
import { Contribution } from '../models/contribution';
import { ContributionService } from '../service/contribution.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ContributionDTO } from '../models/contributionDTO';

@Component({
  selector: 'app-contributions-submit',
  templateUrl: './contributions-submit.component.html',
  styleUrls: ['./contributions-submit.component.css']
})
export class ContributionsSubmitComponent implements OnInit {
  public item: Contribution;
  public haveError: boolean;
  
 constructor(private contributionService: ContributionService,
  private router: Router) { }

  createForm = new FormGroup({
    title: new FormControl(''),
    url: new FormControl(''),
    text: new FormControl(''),
  });
  
  ngOnInit(): void {
    this.haveError = false;
  }
  onSubmit() {
    const postItem: ContributionDTO = {
      title: this.createForm.controls['title'].value,
      url: this.createForm.controls['url'].value,
      text: this.createForm.controls['text'].value,
    };
    
    (this.contributionService.postContribution(postItem)).subscribe(
      async (response) => {
        this.haveError = false;
        console.log("Submitted sucessful");
        this.router.navigateByUrl('/newest');
      },
      (error) => this.haveError = true);
    
  }
}
