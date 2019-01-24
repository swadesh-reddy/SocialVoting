import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../auth.guard';
import { RegisterComponent } from '../register/register.component';
import { UsermainpageComponent } from '../user/usermainpage/usermainpage.component';
import { UserprofileComponent } from '../user/userprofile/userprofile.component';
import { SearchforpostComponent } from '../user/searchforpost/searchforpost.component';
import { TophitkrateComponent } from '../user/tophitkrate/tophitkrate.component';
import { RecommendationComponent } from '../user/recommendation/recommendation.component';
import { MysearchhistoryComponent } from '../user/mysearchhistory/mysearchhistory.component';
import { SearchforfriendComponent } from '../user/searchforfriend/searchforfriend.component';
import { UserInterestComponent } from '../user/user-interest/user-interest.component';
import { ViewprofileComponent } from '../user/viewprofile/viewprofile.component';
import { FriendProfileComponent } from '../user/friend-profile/friend-profile.component';
import { UserComponent } from '../user/user.component';
import { AdminComponent } from '../admin/admin.component';
import { ViewallusersComponent } from '../admin/viewallusers/viewallusers.component';
import { ViewallFriendRequestComponent } from '../admin/viewall-friend-request/viewall-friend-request.component';
import { AddPostComponent } from '../admin/add-post/add-post.component';
import { ViewAllPostComponent } from '../admin/view-all-post/view-all-post.component';
import { ViewAllRecommendedPostComponent } from '../admin/view-all-recommended-post/view-all-recommended-post.component';
import { ViewAllSearchHistoryComponent } from '../admin/view-all-search-history/view-all-search-history.component';
import { TopKRatingChartComponent } from '../admin/top-krating-chart/top-krating-chart.component';
import { AdminloginComponent } from '../adminlogin/adminlogin.component';
import { AdminMainpageComponent } from '../admin/admin-mainpage/admin-mainpage.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
      path: 'user', component: UserComponent, canActivate: [AuthGuard],
    children: [
        { path: 'usermainpage', component: UsermainpageComponent, canActivate: [AuthGuard] },
    { path: 'userprofile', component: UserprofileComponent,canActivate: [AuthGuard] },
    { path: 'friendprofile/:username', component: FriendProfileComponent,canActivate: [AuthGuard] },
    { path: 'userinterest', component: UserInterestComponent,canActivate: [AuthGuard] },
    { path: 'viewprofile/:username', component: ViewprofileComponent, canActivate: [AuthGuard] },
    { path: 'recommend', component: RecommendationComponent, canActivate: [AuthGuard] },
    { path: 'searchforfriend', component: SearchforfriendComponent, canActivate: [AuthGuard] },
    { path: 'tophitkrate', component: TophitkrateComponent, canActivate: [AuthGuard] },
    { path: 'mysearchhistory', component: MysearchhistoryComponent, canActivate: [AuthGuard] },
    { path: 'searchforpost', component: SearchforpostComponent, canActivate: [AuthGuard] }]
  },
  {
      path: 'admin', component: AdminComponent,
    children: [
        { path: 'adminmainpage', component: AdminMainpageComponent  },
        { path: 'viewallusers', component: ViewallusersComponent  },
        { path: 'viewallfriends', component: ViewallFriendRequestComponent },
        { path: 'addpost', component: AddPostComponent },
        { path: 'viewallpost', component: ViewAllPostComponent},
        { path: 'viewallrecommendedpost', component: ViewAllRecommendedPostComponent },
        { path: 'viewAllsearchhistory', component: ViewAllSearchHistoryComponent },
        { path: 'tophitkchart', component: TopKRatingChartComponent}]
  },

  { path: 'adminlogin', component: AdminloginComponent },
 { path: 'login', component: LoginComponent }]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  providers: [AuthGuard]
})
export class ApprouteModule { }
