import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResListPage } from './res-list.page';
const routes = [
    {
        path: '',
        component: ResListPage
    }
];
let ResListPageRoutingModule = class ResListPageRoutingModule {
};
ResListPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ResListPageRoutingModule);
export { ResListPageRoutingModule };
//# sourceMappingURL=res-list-routing.module.js.map