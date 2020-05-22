import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SubmittedComponent } from './submitted/submitted.component';
import { ThreadsComponent } from './threads/threads.component';
import { UpvotedComponent } from './upvoted/upvoted.component';
<<<<<<< HEAD
import { CommentDetailsComponent } from './comment-details/comment-details.component';
=======
import { UpvotedcommentComponent } from './upvotedcomment/upvotedcomment.component';
>>>>>>> 24107c95c4ff329bf1a139508586fe19156d10ed


const routes: Routes = [
  {path:  'user', component:  UserComponent},
  {path:  'submitted', component: SubmittedComponent},
  {path:  'comment_details', component: CommentDetailsComponent},
  {path:  'threads', component: ThreadsComponent},
  {path:  'upvoted', component: UpvotedComponent},
  {path:  'upvotedcomment', component: UpvotedcommentComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
