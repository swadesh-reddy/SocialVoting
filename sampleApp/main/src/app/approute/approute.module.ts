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
        { path: 'usermainpage', component: UsermainpageComponent, canActivate: [AuthGuard] },
    { path: 'userprofile', component: UserprofileComponent,canActivate: [AuthGuard] },
    { path: 'userinterest', component: UserInterestComponent,canActivate: [AuthGuard] },
    { path: 'viewallmyfriends', component: ViewAllMyFriendsComponent, canActivate: [AuthGuard] },
    { path: 'recommend', component: RecommendationComponent, canActivate: [AuthGuard] },
    { path: 'searchforfriend', component: SearchforfriendComponent, canActivate: [AuthGuard] },
    { path: 'tophitkrate', component: TophitkrateComponent, canActivate: [AuthGuard] },
    { path: 'mysearchhistory', component: MysearchhistoryComponent, canActivate: [AuthGuard] },
    { path: 'searchforpost', component: SearchforpostComponent, canActivate: [AuthGuard] }]
  },
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
