import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamResultService {
public url:string="http://localhost:3000/examResultIonic/";
  constructor(public _http:HttpClient) { }
  getExamResultIonic(student_id){
    return this._http.get(this.url+student_id);
  }
}
