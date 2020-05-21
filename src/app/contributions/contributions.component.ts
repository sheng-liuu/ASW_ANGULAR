import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.css']
})
export class ContributionsComponent implements OnInit {
items: number[];
  constructor() {
    this.items = Array(30);}

  ngOnInit(): void {
  }

}
