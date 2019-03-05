import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentfrontdisplayserService {
  public url:string='http://localhost:3000/studentfrontdisplay/';
  public url1:string='http://localhost:3000/student_subject_display/';
  getstudentFront(student_id){
    return this._http.get(this.url+student_id);
  }
  getstudentsubject(student_id){
    return this._http.get(this.url1+student_id);
  }
  constructor(public _http:HttpClient) { }
}
