import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CitiesPage } from './cities';
import { RockbandComponentModule } from '../../components/rockband/rockband.module';
import { HighlightDirectiveModule } from '../../directives/highlight/highlight.module';
import { ReversePipeModule } from '../../pipes/reverse/reverse.module';

@NgModule({
  declarations: [
    CitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(CitiesPage),
    RockbandComponentModule,
    HighlightDirectiveModule,
    ReversePipeModule
  ],
  exports: [
    CitiesPage
  ]
})
export class CitiesPageModule {}
