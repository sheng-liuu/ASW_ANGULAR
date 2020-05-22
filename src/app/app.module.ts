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
<<<<<<< HEAD
import { CommentDetailsComponent } from './comment-details/comment-details.component';
=======
import { UpvotedcommentComponent } from './upvotedcomment/upvotedcomment.component';
>>>>>>> 24107c95c4ff329bf1a139508586fe19156d10ed

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
<<<<<<< HEAD
    CommentDetailsComponent,
=======
    UpvotedcommentComponent,
>>>>>>> 24107c95c4ff329bf1a139508586fe19156d10ed
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
