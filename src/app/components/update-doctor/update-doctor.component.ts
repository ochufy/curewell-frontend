import { Component } from '@angular/core';
import { CureWellService } from '../../services/cure-well.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent {
  
  doctorId: string  | undefined;
  doctorName: string | undefined;

  status: boolean = false;
  showDiv: boolean = false;
  msg: string = '';
  errorAddMsg: string = '';

  constructor(private cureWellService: CureWellService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {}

  updateDoctorForm = this.fb.group({
    newName: ['', Validators.required],
  });

  get newName() {
    return this.updateDoctorForm.get('newName');
  }

  ngOnInit(): void {
    this.doctorId = this.route.snapshot.paramMap.get('id')!;
    this.doctorName = this.route.snapshot.paramMap.get('name')!;

    this.updateDoctorForm.patchValue({
      newName: this.doctorName,
    });
  }

  onClickDoctorEdit() {
    let doctor = {
      doctorId: this.doctorId,
      doctorName: this.updateDoctorForm.value.newName,
    };

    console.log(doctor);

    this.cureWellService.editDoctorDetails(doctor).subscribe({
      next: (data) => {
        console.log(data);
        if(data){
          this.status = data;
          this.showDiv = true;
          this.msg = "Doctor's name updated successfully";
          alert(this.msg);
        }
        else {
          alert("Doctor's name not updated");
        }
        this.router.navigate(['/view-doctors']);
      },
      error: (error) => {
        console.log(error);
        this.errorAddMsg = error;
        this.msg = 'Some error occured';
        alert(this.msg);
        this.router.navigate(['/view-doctors']);
      },
      complete: () => {
        console.log('Updated doctor details successfully');
      },
    });
  }
}
