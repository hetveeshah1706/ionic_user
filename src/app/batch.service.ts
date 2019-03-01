import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BatchService {
url:string='http://localhost:3000/batch/';
  constructor(private _http:HttpClient) { }

  getAllBatch(){
   return this._http.get(this.url);
  }
}
