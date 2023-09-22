import { Component } from '@angular/core';
import { CureWellService } from '../../services/cure-well.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-todays-surgery',
  templateUrl: './view-todays-surgery.component.html',
  styleUrls: ['./view-todays-surgery.component.css']
})
export class ViewTodaysSurgeryComponent {

  surgeryList: any[] = [];

  constructor(private cureWellService: CureWellService, private router: Router) { }

  ngOnInit(): void {
    this.cureWellService.getSurgeriesForToday().subscribe((data) => {
      this.surgeryList = data;
      console.log(this.surgeryList);
    });
  }

  onSurgeryEdit(surgery: any){
    this.router.navigate(['/update-surgery', surgery.surgeryId, surgery.surgeryCategory, surgery.surgeryDate, surgery.startTime, surgery.endTime, surgery.doctorId]);
  }

}
