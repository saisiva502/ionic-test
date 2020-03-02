import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ReservationDataService } from '../reservation-data.service';
let HomePage = class HomePage {
    constructor(_resService, http, toast, router) {
        this._resService = _resService;
        this.http = http;
        this.toast = toast;
        this.router = router;
        this.employees_data = [];
        this.carousel_imgs = [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5r9mIu9Wv92SlY1v-t5m8kDdhGqbI8hduuPsxfYCYH5FQ1E7K",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtArr-jW2cMfC4SRfZXfU_2b2vIvGa9PYnpB85A-1xPoSfgaEx",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcXAmwAXNWNt5jXSbN2Ya8RTl9LFDKRhOSOLSOMVo3Qbw57EgR",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSe4-mXqRSTFEEGlBt5wyvrXjcYftUNT9tD2_UnIWI68BirqlGF"
        ];
        this.sliderConfig = {
            spaceBetween: 10,
            autoplay: true,
            speed: 400, loop: false
        };
        this.future_reservations = [];
    }
    ionViewDidEnter() {
        this._resService.getAllResData("future", 2).then(res => {
            console.log(res, "TTTTT");
            this.future_reservations = res.data;
        });
    }
    getFutureRes(item) {
        console.log(item);
        this.router.navigate(['res-detail', "future", item.id]);
    }
    onFutureAllRes() {
        this.router.navigate(['res-list', "future"]);
    }
};
HomePage = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: 'home.page.html',
        styleUrls: ['home.page.scss'],
    }),
    __metadata("design:paramtypes", [ReservationDataService, HttpClient, ToastController, Router])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map