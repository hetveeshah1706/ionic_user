import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamScheduleService } from '../exam-schedule.service';
import { exam_schedule_class } from '../exam-schedule/exam_schedule_class';

@Component({
  selector: 'app-exam-schedule-display',
  templateUrl: './exam-schedule-display.page.html',
  styleUrls: ['./exam-schedule-display.page.scss'],
})
export class ExamScheduleDisplayPage implements OnInit {
  public batch_id:number;
  public batch_name:string;
  public subject_name:string;
  public exam_date:Date;
  public marks:number;
  public hours:number;
  public exam_schedule_arr:exam_schedule_class[]=[];
  constructor(public _actroute:ActivatedRoute,public _ser:ExamScheduleService) { }

  ngOnInit() {
    this.batch_id=this._actroute.snapshot.params['batch_id'];
    this._ser.getExamScheduleIonic(this.batch_id).subscribe(
      (data:exam_schedule_class[])=>{
        //console.log(data);
        this.exam_schedule_arr=data;
      }
    );
  }

}
