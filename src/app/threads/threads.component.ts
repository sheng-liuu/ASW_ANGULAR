import { Component, OnInit, Pipe } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommentService } from '../service/comment.service';
import { ContributionService } from '../service/contribution.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})

export class ThreadsComponent implements OnInit {
  items;
  public username;
  public title;
  
  constructor(private commentService: CommentService,
  private router: Router, private route: ActivatedRoute, private contributionService: ContributionService,) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.username = params.id;
      this.commentService.getThreads(localStorage.getItem("username")).subscribe(data => {
        console.log("Thread sucessful");
        this.items = data;
      });
    });
    
  }
  
  async getContributionTitle(id: number){
    this.contributionService.getContribution(id).subscribe(data => {
      this.title = data.title;
    });
    console.log(this.title);
    return this.title;
  }

}
