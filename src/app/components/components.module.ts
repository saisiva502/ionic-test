import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeListComponent } from './home-list/home-list.component'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

const components = [
  HomeListComponent
];
@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  exports: [...components],
})
export class ComponentsModule { }
