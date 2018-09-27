import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../auth.guard';
import { RegisterComponent } from '../register/register.component';
import { UsermainpageComponent } from '../usermainpage/usermainpage.component';
import { UserprofileComponent } from '../userprofile/userprofile.component';
import { SearchforpostComponent } from '../searchforpost/searchforpost.component';
import { TophitkrateComponent } from '../tophitkrate/tophitkrate.component';
import { RecommendationComponent } from '../recommendation/recommendation.component';
import { MysearchhistoryComponent } from '../mysearchhistory/mysearchhistory.component';
import { SearchforfriendComponent } from '../searchforfriend/searchforfriend.component';
import { UserInterestComponent } from '../user-interest/user-interest.component';
import { ViewAllMyFriendsComponent } from '../view-all-my-friends/view-all-my-friends.component';
import { UserComponent } from '../user/user.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'usermainpage', component: UsermainpageComponent },
    { path: 'userprofile', component: UserprofileComponent },
    { path: 'userinterest', component: UserInterestComponent },
    { path: 'viewallmyfriends', component: ViewAllMyFriendsComponent },
    { path: 'recommend', component: RecommendationComponent },
    { path: 'searchforfriend', component: ViewAllMyFriendsComponent },
    { path: 'tophitkrate', component: TophitkrateComponent },
   { path: 'mysearchhistory', component: TophitkrateComponent },
   { path: 'searchforpost', component: SearchforpostComponent }]
  },
  { path: 'login', component: LoginComponent }]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class ApprouteModule { }
