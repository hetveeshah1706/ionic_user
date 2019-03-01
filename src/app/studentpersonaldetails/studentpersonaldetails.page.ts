import { Component, OnInit } from '@angular/core';
import { StudentfrontdisplayserService } from '../studentfrontdisplayser.service';

@Component({
  selector: 'app-studentpersonaldetails',
  templateUrl: './studentpersonaldetails.page.html',
  styleUrls: ['./studentpersonaldetails.page.scss'],
})
export class StudentpersonaldetailsPage implements OnInit {
  student_name:string;
  student_password:string;
  student_image:string;
  student_id:string;
  standard_no:number;
  date_of_birth:string;
  batch_name:string;
  
  constructor(public _ser:StudentfrontdisplayserService) { }

  ngOnInit() {
    this.student_id=localStorage.getItem('student_id')
    this._ser.getstudentFront(this.student_id).subscribe(
      (data:any[])=>{
        this.student_image=data[0].student_image;
        this.student_name=data[0].student_name;
        this.standard_no=data[0].standard_no;
        this.date_of_birth=data[0].date_of_birth;
        this.batch_name=data[0].batch_name;
        //this.subject_name=data[0].subject_name;
        //console.log(this.subject_name);
        console.log(data);
      }
    );
  }

}
