import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listdetail',
  templateUrl: './listdetail.page.html',
  styleUrls: ['./listdetail.page.scss'],
})
export class ListdetailPage implements OnInit {
id:number;
  constructor(public _active:ActivatedRoute) { }

  ngOnInit() {
    this.id=this._active.snapshot.params['batch_id'];
    console.log(this.id);
  }

}
