import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StudentfrontdisplayPage } from './studentfrontdisplay.page';

const routes: Routes = [
  {
    path: '',
    component: StudentfrontdisplayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentfrontdisplayPage]
})
export class StudentfrontdisplayPageModule {}
