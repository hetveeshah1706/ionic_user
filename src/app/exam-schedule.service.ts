import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamScheduleService {
  public url:string='http://localhost:3000/examScheduleIonic/';
  constructor(public _http:HttpClient) { }
  getExamScheduleIonic(fk_batch_id) {
    return this._http.get(this.url+fk_batch_id);
  }
  getAllBatch(){
    return this._http.get(this.url);
  }
}
