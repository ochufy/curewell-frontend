import { Component } from '@angular/core';
import { CureWellService } from '../../services/cure-well.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css'],
})
export class AddDoctorComponent {
  
  status: boolean = false;
  showDiv: boolean = false;
  msg: string = '';
  errorAddMsg: string = '';

  constructor(private cureWellService: CureWellService, private fb: FormBuilder) { }

  addDoctorForm = this.fb.group({
    doctorName: [null, Validators.required],
  });

  get doctorName() {
    return this.addDoctorForm.get('doctorName');
  }

  onClickDoctorAdd() {
    console.log(this.addDoctorForm.value);
    this.cureWellService.addDoctor(this.addDoctorForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.status = data;
        this.showDiv = true;
        this.msg = 'Doctor successfully added';
      },
      error: (error) => {
        console.log(error);
        this.errorAddMsg = error;
        this.msg = 'Some error occured';
      },
      complete: () => {
        console.log('Add doctor completed');
      },
    });
  }

}
