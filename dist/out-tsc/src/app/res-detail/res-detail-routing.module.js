import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResDetailPage } from './res-detail.page';
const routes = [
    {
        path: '',
        component: ResDetailPage
    }
];
let ResDetailPageRoutingModule = class ResDetailPageRoutingModule {
};
ResDetailPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ResDetailPageRoutingModule);
export { ResDetailPageRoutingModule };
//# sourceMappingURL=res-detail-routing.module.js.map