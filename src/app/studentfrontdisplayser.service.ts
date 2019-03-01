import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentfrontdisplayserService {
  public url:string='http://localhost:3000/studentfrontdisplay/';
  getstudentFront(student_id){
    return this._http.get(this.url+student_id);
  }
  constructor(public _http:HttpClient) { }
}
