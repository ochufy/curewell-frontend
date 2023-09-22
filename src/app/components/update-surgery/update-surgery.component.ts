import { Component } from '@angular/core';
import { CureWellService } from '../../services/cure-well.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { timeValidator } from './time.validator';

@Component({
  selector: 'app-update-surgery',
  templateUrl: './update-surgery.component.html',
  styleUrls: ['./update-surgery.component.css']
})
export class UpdateSurgeryComponent {
  surgeryId: string | undefined;
  surgeryCategory: string | undefined;
  surgeryDate: string | undefined;
  startTime: string | undefined;
  endTime: string | undefined;
  doctorId: string  | undefined;

  status: boolean = false;
  showDiv: boolean = false;
  msg: string = '';
  errorAddMsg: string = '';

  constructor(private cureWellService: CureWellService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {}

  updateSurgeryForm = this.fb.group({
    newStartTime: ['', Validators.required],
    newEndTime: ['', Validators.required],
  }, {validator: timeValidator});

  get newStartTime() {
    return this.updateSurgeryForm.get('newStartTime');
  }
  get newEndTime() {
    return this.updateSurgeryForm.get('newEndTime');
  }

  ngOnInit(): void {
    this.surgeryId = this.route.snapshot.paramMap.get('id')!;
    this.surgeryCategory = this.route.snapshot.paramMap.get('category')!;
    this.surgeryDate = this.route.snapshot.paramMap.get('date')!;
    this.startTime = this.route.snapshot.paramMap.get('start')!;
    this.endTime = this.route.snapshot.paramMap.get('end')!;
    this.doctorId = this.route.snapshot.paramMap.get('doctorId')!;

    this.updateSurgeryForm.patchValue({
      newStartTime: this.startTime,
      newEndTime: this.endTime,
    });
  }

  onClickSurgeryEdit() {
    let surgery = {
      surgeryId: this.surgeryId,
      surgeryCategory: this.surgeryCategory,
      surgeryDate: this.surgeryDate,
      startTime: this.newStartTime?.value,
      endTime: this.newEndTime?.value,
      doctorId: this.doctorId,
    };

    console.log(surgery);

    this.cureWellService.editSurgery(surgery).subscribe({
      next: (data) => {
        console.log(data);
        if(data){
          this.status = data;
          this.showDiv = true;
          this.msg = "Surgery details updated successfully";
          alert(this.msg);
        }
        else {
          alert("Surgery details not updated");
        }
        this.router.navigate(['/view-todays-surgery']);
      },
      error: (error) => {
        console.log(error);
        this.errorAddMsg = error;
        this.msg = 'Some error occured';
        alert(this.msg);
        this.router.navigate(['/view-todays-surgery']);
      },
      complete: () => {
        console.log('Updated surgery details successfully');
      },
    });
  }
}
