import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ResListPageRoutingModule } from './res-list-routing.module';
import { ResListPage } from './res-list.page';
let ResListPageModule = class ResListPageModule {
};
ResListPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ResListPageRoutingModule
        ],
        declarations: [ResListPage]
    })
], ResListPageModule);
export { ResListPageModule };
//# sourceMappingURL=res-list.module.js.map