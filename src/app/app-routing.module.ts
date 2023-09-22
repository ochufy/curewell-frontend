import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
import { UpdateDoctorComponent } from './components/update-doctor/update-doctor.component';
import { ViewDoctorComponent } from './components/view-doctor/view-doctor.component';
import { ViewSpecializationComponent } from './components/view-specialization/view-specialization.component';
import { ViewTodaysSurgeryComponent } from './components/view-todays-surgery/view-todays-surgery.component';
import { UpdateSurgeryComponent } from './components/update-surgery/update-surgery.component';

const routes: Routes = [
  {path:'',redirectTo:'view-doctors',pathMatch:'full'},
  {path:'view-doctors',component:ViewDoctorComponent},
  {path:'add-doctor',component:AddDoctorComponent},
  {path:'update-doctor/:id/:name',component:UpdateDoctorComponent},
  {path:'view-specializations',component:ViewSpecializationComponent},
  {path:'view-todays-surgery',component:ViewTodaysSurgeryComponent},
  {path: 'update-surgery/:id/:category/:date/:start/:end/:doctorId', component: UpdateSurgeryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
