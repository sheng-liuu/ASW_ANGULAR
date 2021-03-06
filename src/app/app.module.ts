import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleLoginProvider,  AuthService } from 'angularx-social-login';  
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SubmittedComponent } from './submitted/submitted.component';
import { ThreadsComponent } from './threads/threads.component';
import { UpvotedComponent } from './upvoted/upvoted.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { UpvotedcommentComponent } from './upvotedcomment/upvotedcomment.component';
import { ContributionDetailsComponent } from './contribution-details/contribution-details.component';
import { ContributionsListComponent } from './contributions-list/contributions-list.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { ContributionsSubmitComponent } from './contributions-submit/contributions-submit.component';
import { ContributionsAskComponent } from './contributions-ask/contributions-ask.component';
import { ContributionsNewestComponent } from './contributions-newest/contributions-newest.component';
import { CommentBasicComponent } from './comment-basic/comment-basic.component';

export function socialConfigs() {  
  const config = new AuthServiceConfig(  
    [  
      {  
        id: GoogleLoginProvider.PROVIDER_ID,  
        provider: new GoogleLoginProvider('299702883008-3gor46cn1q6be1ihm4kskhve1nmf737e.apps.googleusercontent.com')  
      }  
    ]  
  );  
  return config;  
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    SubmittedComponent,
    ThreadsComponent,
    UpvotedComponent,
    CommentDetailsComponent,
    UpvotedcommentComponent,
    ContributionDetailsComponent,
    ContributionsListComponent,
    CommentsListComponent,
    ContributionsSubmitComponent,
    ContributionsAskComponent,
    ContributionsNewestComponent,
    CommentBasicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,  
    {  
      provide: AuthServiceConfig,  
      useFactory: socialConfigs  
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
