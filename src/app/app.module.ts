import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewDoctorComponent } from './components/view-doctor/view-doctor.component';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { UpdateDoctorComponent } from './components/update-doctor/update-doctor.component';
import { ViewSpecializationComponent } from './components/view-specialization/view-specialization.component';
import { ViewTodaysSurgeryComponent } from './components/view-todays-surgery/view-todays-surgery.component';
import { UpdateSurgeryComponent } from './components/update-surgery/update-surgery.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ViewDoctorComponent,
    AddDoctorComponent,
    UpdateDoctorComponent,
    ViewSpecializationComponent,
    ViewTodaysSurgeryComponent,
    UpdateSurgeryComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
