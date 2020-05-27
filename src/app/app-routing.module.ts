import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SubmittedComponent } from './submitted/submitted.component';
import { ThreadsComponent } from './threads/threads.component';
import { UpvotedComponent } from './upvoted/upvoted.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { UpvotedcommentComponent } from './upvotedcomment/upvotedcomment.component';
import { ContributionDetailsComponent } from './contribution-details/contribution-details.component';
import { ContributionsListComponent } from './contributions-list/contributions-list.component';
import { ContributionsSubmitComponent } from './contributions-submit/contributions-submit.component';
import { ContributionsAskComponent } from './contributions-ask/contributions-ask.component';
import { ContributionsNewestComponent } from './contributions-newest/contributions-newest.component';


const routes: Routes = [
  {path:  'user', component:  UserComponent},
  {path:  'submitted', component: SubmittedComponent},
  {path:  'comment_details', component: CommentDetailsComponent},
  {path:  'threads', component: ThreadsComponent},
  {path:  'upvoted', component: UpvotedComponent},
  {path:  'upvotedcomment', component: UpvotedcommentComponent},
  {path:  'contribution-details/:id', component: ContributionDetailsComponent},
  {path:  'contributions', component: ContributionsListComponent},
  {path:  'ask', component: ContributionsAskComponent},
  {path:  'newest', component: ContributionsNewestComponent},
  {path:  'submit', component: ContributionsSubmitComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
