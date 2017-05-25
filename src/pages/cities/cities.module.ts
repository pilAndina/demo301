import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitiesPage } from './cities';

@NgModule({
  declarations: [
    CitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(CitiesPage),
  ],
  exports: [
    CitiesPage
  ]
})
export class CitiesPageModule {}
