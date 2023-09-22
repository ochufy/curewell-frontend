import { Component } from '@angular/core';
import { CureWellService } from '../../services/cure-well.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-specialization',
  templateUrl: './view-specialization.component.html',
  styleUrls: ['./view-specialization.component.css']
})
export class ViewSpecializationComponent {
  
  specializationList: any[] = [];

  constructor(private cureWellService: CureWellService, router: Router) { }

  ngOnInit(): void {
    this.cureWellService.getAllSpecializations().subscribe((data) => {
      this.specializationList = data;
      console.log(data);
    });
  }

}
