import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SubmittedComponent } from './submitted/submitted.component';
import { ThreadsComponent } from './threads/threads.component';


const routes: Routes = [
  {path:  'user', component:  UserComponent},
  {path:  'submitted', component: SubmittedComponent},
  {path:  'threads', component: ThreadsComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
