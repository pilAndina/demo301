import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitiesPage } from './cities';
import { RockbandComponentModule } from '../../components/rockband/rockband.module';
import { HighlightDirectiveModule } from '../../directives/highlight/highlight.module';

@NgModule({
  declarations: [
    CitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(CitiesPage),
    RockbandComponentModule,
    HighlightDirectiveModule
  ],
  exports: [
    CitiesPage
  ]
})
export class CitiesPageModule {}
