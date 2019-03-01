import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  url:string="http://localhost:3000/attendancestudent/"

  constructor(private _http:HttpClient) { }
  onStudentAttendance(student_id){
   return this._http.get(this.url+student_id);
  }
}
