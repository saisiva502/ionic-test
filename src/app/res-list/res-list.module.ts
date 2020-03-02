import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResListPageRoutingModule } from './res-list-routing.module';

import { ResListPage } from './res-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResListPageRoutingModule
  ],
  declarations: [ResListPage]
})
export class ResListPageModule {}
