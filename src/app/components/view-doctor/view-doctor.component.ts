import { Component } from '@angular/core';
import { CureWellService } from '../../services/cure-well.service';
import { Router } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent {
  
    doctorList: any[] = [];

    constructor(private cureWellService: CureWellService, private router: Router) { }
  
    ngOnInit(): void {
      this.cureWellService.getDoctors().subscribe((data) => {
        this.doctorList = data;
        console.log(data);
      });
    }

    onDoctorEdit(doctor: any){
      this.router.navigate(['/update-doctor', doctor.doctorId, doctor.doctorName]);
    }

    onDoctorDelete(doctor: any) {
      if(confirm(`Are you sure you want to delete this doctor?\n${doctor.doctorId} - ${doctor.doctorName}`))
      {
        this.cureWellService.deleteDoctor(doctor.doctorId).subscribe((data) => {
          console.log(data);
        });
      }
    }

}
