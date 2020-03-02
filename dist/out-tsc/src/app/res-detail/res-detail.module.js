import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ResDetailPageRoutingModule } from './res-detail-routing.module';
import { ResDetailPage } from './res-detail.page';
let ResDetailPageModule = class ResDetailPageModule {
};
ResDetailPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ResDetailPageRoutingModule
        ],
        declarations: [ResDetailPage]
    })
], ResDetailPageModule);
export { ResDetailPageModule };
//# sourceMappingURL=res-detail.module.js.map