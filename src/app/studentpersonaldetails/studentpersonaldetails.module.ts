import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StudentpersonaldetailsPage } from './studentpersonaldetails.page';

const routes: Routes = [
  {
    path: '',
    component: StudentpersonaldetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentpersonaldetailsPage]
})
export class StudentpersonaldetailsPageModule {}
