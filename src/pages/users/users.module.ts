import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersPage } from './users';
import { RockbandComponentModule } from '../../components/rockband/rockband.module';


@NgModule({
  declarations: [
    UsersPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersPage),
    RockbandComponentModule
  ],
  exports: [
    UsersPage
  ]
})
export class UsersPageModule {}
