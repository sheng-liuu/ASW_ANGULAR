import { Component, OnInit } from '@angular/core';
import { Contribution } from '../models/contribution';

@Component({
  selector: 'app-contributions-submit',
  templateUrl: './contributions-submit.component.html',
  styleUrls: ['./contributions-submit.component.css']
})
export class ContributionsSubmitComponent implements OnInit {
  public item: Contribution;
  
 constructor() { }


  ngOnInit(): void {
  }
  onSubmit() {

  }

}
