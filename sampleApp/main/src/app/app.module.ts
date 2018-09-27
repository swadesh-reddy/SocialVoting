import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsermainpageComponent } from './usermainpage/usermainpage.component';
import { RegisterComponent } from './register/register.component';
import { AuthenicateService } from './authenicate.service';
import { ApprouteModule } from './approute/approute.module';
import { HeaderComponent } from './header/header.component';
import { UserSideBarComponent } from './user-side-bar/user-side-bar.component';
import { UserComponent } from './user/user.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ViewAllMyFriendsComponent } from './view-all-my-friends/view-all-my-friends.component';
import { SearchforpostComponent } from './searchforpost/searchforpost.component';
import { MysearchhistoryComponent } from './mysearchhistory/mysearchhistory.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { UserInterestComponent } from './user-interest/user-interest.component';
import { TophitkrateComponent } from './tophitkrate/tophitkrate.component';
import { SearchforfriendComponent } from './searchforfriend/searchforfriend.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsermainpageComponent,
    RegisterComponent,
    HeaderComponent,
    UserSideBarComponent,
    UserComponent,
    UserprofileComponent,
    ViewAllMyFriendsComponent,
    SearchforpostComponent,
    MysearchhistoryComponent,
    RecommendationComponent,
    UserInterestComponent,
    TophitkrateComponent,
    SearchforfriendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ApprouteModule
  ],
  providers: [AuthenicateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
