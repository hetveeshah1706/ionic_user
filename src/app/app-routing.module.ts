import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'listdetail/:batch_id', loadChildren: './listdetail/listdetail.module#ListdetailPageModule' },
  { path: 'demo', loadChildren: './demo/demo.module#DemoPageModule' },
  { path: 'attendance', loadChildren: './attendance/attendance.module#AttendancePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'studentfrontdisplay', loadChildren: './studentfrontdisplay/studentfrontdisplay.module#StudentfrontdisplayPageModule' },
  //{ path: 'header', loadChildren: './header/header.module#HeaderPageModule' },
  { path: 'footer', loadChildren: './footer/footer.module#FooterPageModule' },
  { path: 'notice', loadChildren: './notice/notice.module#NoticePageModule' },
  { path: 'notice-discreption/:notice_id', loadChildren: './notice-discreption/notice-discreption.module#NoticeDiscreptionPageModule' },
  { path: 'studentpersonaldetails', loadChildren: './studentpersonaldetails/studentpersonaldetails.module#StudentpersonaldetailsPageModule' },
  { path: 'dailywork', loadChildren: './dailywork/dailywork.module#DailyworkPageModule' },
  { path: 'dailysubjectdisplay/:subject_id', loadChildren: './dailysubjectdisplay/dailysubjectdisplay.module#DailysubjectdisplayPageModule' },
  { path: 'pdf-open/:pdf', loadChildren: './pdf-open/pdf-open.module#PdfOpenPageModule' },
  { path: 'assignment', loadChildren: './assignment/assignment.module#AssignmentPageModule' },
  { path: 'assignmentdisplay/:subject_id', loadChildren: './assignmentdisplay/assignmentdisplay.module#AssignmentdisplayPageModule' },

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
