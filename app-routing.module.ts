import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusaddComponent } from './busadd/busadd.component';
import { BusbookingComponent } from './busbooking/busbooking.component';
import { BusmainComponent } from './busmain/busmain.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RentaladdComponent } from './rentaladd/rentaladd.component';
import { RentalbookingComponent } from './rentalbooking/rentalbooking.component';
import { RentalmainComponent } from './rentalmain/rentalmain.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { SideHomeComponent } from './side-home/side-home.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';


const routes: Routes = [
  {path:'',component:SideHomeComponent},
  {path:'Home', component: HomeComponent},
  {path:'Register', component: RegisterComponent},
  {path: 'Feedback', component:FeedbackComponent},
  {path:'SearchResults', component: SearchresultComponent},
  {path:'rentalmain',component:RentalmainComponent},
  {path:'rentaladd',component:RentaladdComponent},
  {path:'rentalbooking',component:RentalbookingComponent},
  {path:'busadd',component:BusaddComponent},
  {path:'busmain',component:BusmainComponent},
  {path:'busbooking',component:BusbookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
