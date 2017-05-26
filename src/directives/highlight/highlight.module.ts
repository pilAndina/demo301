import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HighlightDirective } from './highlight';

@NgModule({
  declarations: [
    HighlightDirective,
  ],
  exports: [
    HighlightDirective
  ]
})
export class HighlightDirectiveModule {}
