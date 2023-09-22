import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CureWellService {

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<any> {
    return this.http.get('https://localhost:7154/api/doctors')
  }
  getAllSpecializations(): Observable<any> {
    return this.http.get('https://localhost:7154/api/specializations')
  }
  getSurgeriesForToday(): Observable<any> {
    return this.http.get('https://localhost:7154/api/surgeries')
  }

  addDoctor(doctor: any): Observable<any> {
    return this.http.post('https://localhost:7154/api/add-doctor', doctor)
  }

  editDoctorDetails(doctor: any): Observable<any> {
    return this.http.put('https://localhost:7154/api/update-doctor', doctor)
  }

  editSurgery(surgery: any): Observable<any> {
    return this.http.put('https://localhost:7154/api/update-surgery', surgery)
  }

  deleteDoctor(doctorId: any): Observable<any> {
    return this.http.delete(`https://localhost:7154/api/doctors/${doctorId}`)
  }

}
