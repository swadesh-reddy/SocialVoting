import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsermainpageComponent } from './user/usermainpage/usermainpage.component';
import { RegisterComponent } from './register/register.component';
import { AuthenicateService } from './authenicate.service';
import { ApprouteModule } from './approute/approute.module';
import { HeaderComponent } from './header/header.component';
import { UserSideBarComponent } from './user/user-side-bar/user-side-bar.component';
import { UserComponent } from './user/user.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { SearchforpostComponent } from './user/searchforpost/searchforpost.component';
import { MysearchhistoryComponent } from './user/mysearchhistory/mysearchhistory.component';
import { RecommendationComponent } from './user/recommendation/recommendation.component';
import { UserInterestComponent } from './user/user-interest/user-interest.component';
import { TophitkrateComponent } from './user/tophitkrate/tophitkrate.component';
import { SearchforfriendComponent } from './user/searchforfriend/searchforfriend.component';
import { ViewprofileComponent } from './user/viewprofile/viewprofile.component';
import { AdminComponent } from './admin/admin.component';
import { ViewallusersComponent } from './admin/viewallusers/viewallusers.component';
import { ViewallFriendRequestComponent } from './admin/viewall-friend-request/viewall-friend-request.component';
import { AddPostComponent } from './admin/add-post/add-post.component';
import { ViewAllPostComponent } from './admin/view-all-post/view-all-post.component';
import { ViewAllRecommendedPostComponent } from './admin/view-all-recommended-post/view-all-recommended-post.component';
import { ViewAllSearchHistoryComponent } from './admin/view-all-search-history/view-all-search-history.component';
import { TopKRatingChartComponent } from './admin/top-krating-chart/top-krating-chart.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminMainpageComponent } from './admin/admin-mainpage/admin-mainpage.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FriendProfileComponent } from './user/friend-profile/friend-profile.component';
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
     SearchforpostComponent,
    MysearchhistoryComponent,
    RecommendationComponent,
    UserInterestComponent,
    TophitkrateComponent,
    SearchforfriendComponent,
    ViewprofileComponent,
    AdminComponent,
    ViewallusersComponent,
    ViewallFriendRequestComponent,
    AddPostComponent,
    ViewAllPostComponent,
    ViewAllRecommendedPostComponent,
    ViewAllSearchHistoryComponent,
    TopKRatingChartComponent,
    AdminloginComponent,
    AdminMainpageComponent,
    ViewProductComponent,
    FriendProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
      ApprouteModule,
      FlashMessagesModule.forRoot(),
  ],
  providers: [AuthenicateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
