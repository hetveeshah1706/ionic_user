import { Component, OnInit } from '@angular/core';
import { exam_schedule_class } from './exam_schedule_class';
import { ExamScheduleService } from '../exam-schedule.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-schedule',
  templateUrl: './exam-schedule.page.html',
  styleUrls: ['./exam-schedule.page.scss'],
})
export class ExamSchedulePage implements OnInit {
  batch_id:number;
  batch_arr:exam_schedule_class[]=[];
  onExamSchedule(batch_id){
    this._route.navigate(['/exam-schedule-display',batch_id]);
  }
  onExamResult(){
    this._route.navigate(['/exam-result']);
  }
  constructor(public _ser:ExamScheduleService,public _route:Router) { }

  ngOnInit() {
    this._ser.getAllBatch().subscribe(
      (data:exam_schedule_class[])=>{
        this.batch_arr=data;
      }
    );    
  }

}
