import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitiesPage } from './cities';
import { RockbandComponentModule } from '../../components/rockband/rockband.module';

@NgModule({
  declarations: [
    CitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(CitiesPage),
    RockbandComponentModule
  ],
  exports: [
    CitiesPage
  ]
})
export class CitiesPageModule {}
