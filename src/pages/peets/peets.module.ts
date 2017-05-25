import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeetsPage } from './peets';

@NgModule({
  declarations: [
    PeetsPage,
  ],
  imports: [
    IonicPageModule.forChild(PeetsPage),
  ],
  exports: [
    PeetsPage
  ]
})
export class PeetsPageModule {}
