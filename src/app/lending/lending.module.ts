import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LendingRoutingModule } from './lending-routing.module';
import { LendingComponent } from './lending.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    LendingComponent
  ],
  imports: [
    CommonModule,
    LendingRoutingModule,
    FormsModule,
   IonicModule,
    IonicModule.forRoot(),
  ]
})
export class LendingModule { }
