import { Component, OnInit } from '@angular/core';
import { ExamResultService } from '../exam-result.service';
import { exam_result } from './exam_result_class';

@Component({
  selector: 'app-exam-result',
  templateUrl: './exam-result.page.html',
  styleUrls: ['./exam-result.page.scss'],
})
export class ExamResultPage implements OnInit {
  student_id:string;
  exam_result_arr:exam_result[]=[];
  exam_date:Date;
  marks:number;
  hours:number;
  marks_obtained:number;
  student_name:string;
  subject_name:string;
  standard_no:number;
  constructor(public _ser:ExamResultService) { }

  ngOnInit() {
    this.student_id=localStorage.getItem('student_id');
    this._ser.getExamResultIonic(this.student_id).subscribe(
        (data:exam_result[])=>{
          console.log(data);
        this.exam_result_arr=data;
        }
    );
  }

}
