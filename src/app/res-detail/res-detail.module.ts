import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResDetailPageRoutingModule } from './res-detail-routing.module';

import { ResDetailPage } from './res-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResDetailPageRoutingModule
  ],
  declarations: [ResDetailPage]
})
export class ResDetailPageModule {}
