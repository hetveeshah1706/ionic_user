import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import {  student_login } from '../login/student_login';
//import { HeaderPage } from '../header/header.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
 onLogin()
 {
   this._router.navigate(['/login']);
 }
constructor(private _ser:LoginService,private _router:Router){}
}
