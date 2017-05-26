import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RockbandComponent } from './rockband';

@NgModule({
  declarations: [
    RockbandComponent,
  ],
  imports: [
    IonicPageModule.forChild(RockbandComponent),
  ],
  exports: [
    RockbandComponent
  ]
})
export class RockbandComponentModule {}
