import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResDetailPage } from './res-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ResDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResDetailPageRoutingModule {}
