import { Component, OnInit } from '@angular/core';
import { ContributionService } from '../service/contribution.service';
import { Router,  ActivatedRoute  } from '@angular/router';
import { Contribution } from '../models/contribution';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-contributions-list',
  templateUrl: './contributions-list.component.html',
  styleUrls: ['./contributions-list.component.css']
})
export class ContributionsListComponent implements OnInit {
  items: Contribution[];
  public isLogin: boolean;
  comments: Comment[];
  numbercomments: number
  constructor(private contributionService: ContributionService,
  private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(localStorage.getItem("apikey")) this.isLogin = true;
    else this.isLogin = false;
        this.contributionService.getUrl().subscribe(data => {
        console.log("Contributions ask sucessful");
        this.items = data;
        });
        
  }
  getNumberComments(id: number) {
    this.contributionService.getNumberComments(id).subscribe(data => {
      console.log("Comments sucessful");
      this.numbercomments = data.length; 
    });
  }
  vote(id: number) :void{
    this.contributionService.postVote(id).subscribe(data => {
      window.location.reload();
      console.log("Voted sucessful");
    });
    
  }
  
  unvote(id: number) :void{
    this.contributionService.postUnvote(id).subscribe(data => {
      window.location.reload();
      console.log("Unvoted sucessful");
    });
    
  }
  
  canVote(item: Contribution){
    if(localStorage.getItem("id") != item.user_id && item.voted == false) return true;
    else return false;
  }
  
  canUnvote(item: Contribution){
    if(localStorage.getItem("id") != item.user_id && item.voted == true) return true;
    else return false;
  }
}