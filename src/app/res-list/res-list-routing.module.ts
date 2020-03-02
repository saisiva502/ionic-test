import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResListPage } from './res-list.page';

const routes: Routes = [
  {
    path: '',
    component: ResListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResListPageRoutingModule {}
