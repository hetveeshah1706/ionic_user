import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticeserService {
  url:string="http://localhost:3000/multidelnotice/";
  url1:string="http://localhost:3000/notice/"
  constructor(public _http:HttpClient) { }
  getAllNotice(){
    return this._http.get(this.url);
   }
   getNoticeById(notice_id){
     return this._http.get(this.url1+notice_id);
   }

}
