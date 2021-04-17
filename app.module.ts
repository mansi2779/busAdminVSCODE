import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderfooterComponent } from './headerfooter/headerfooter.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { FeedbackComponent } from './feedback/feedback.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { RentalmainComponent } from './rentalmain/rentalmain.component';
import { RentaladdComponent } from './rentaladd/rentaladd.component';
import { RentalupdateComponent } from './rentalupdate/rentalupdate.component';
import { SideHomeComponent } from './side-home/side-home.component';
import { HttpClientModule } from '@angular/common/http';
import { BusmainComponent } from './busmain/busmain.component';
import { RentalbookingComponent } from './rentalbooking/rentalbooking.component';
import { BusaddComponent } from './busadd/busadd.component';
import { BusbookingComponent } from './busbooking/busbooking.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderfooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FeedbackComponent,
    SearchresultComponent,
    SidemenuComponent,
    RentalmainComponent,
    RentaladdComponent,
    RentalupdateComponent,
    SideHomeComponent,
    BusmainComponent,
    RentalbookingComponent,
    BusaddComponent,
    BusbookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
