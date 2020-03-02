import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ReservationDataService } from '../reservation-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
let ResListPage = class ResListPage {
    constructor(router, location, _resService, activatedRoute) {
        this.router = router;
        this.location = location;
        this._resService = _resService;
        this.activatedRoute = activatedRoute;
        this.intial_list = 10;
        this.next_list = 10;
        this.list_complete = "false";
        this.list_data = [];
        this.type = "";
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.type = this.activatedRoute.snapshot.params['type'];
        this.getAllIntilaData();
    }
    getAllIntilaData() {
        this._resService.getAllResData(this.type, this.intial_list).then(res => {
            this.list_data = res.data;
            if (res.status === "completed") {
                this.list_complete = "true";
                console.log("completed", this.list_complete);
            }
        });
    }
    getFutureRes(item) {
        console.log(item);
        this.router.navigate(['res-detail', "future", item.id]);
    }
    goBack() {
        this.location.back();
    }
    loadData(event) {
        console.log("Success");
        this.intial_list += this.next_list;
        this.getAllIntilaData();
        if (this.list_complete === "true") {
            console.log(this.list_complete);
            event.target.disabled = true;
        }
        setTimeout(function () {
            event.target.complete();
        }, 500);
    }
};
ResListPage = __decorate([
    Component({
        selector: 'app-res-list',
        templateUrl: './res-list.page.html',
        styleUrls: ['./res-list.page.scss'],
    }),
    __metadata("design:paramtypes", [Router, Location, ReservationDataService, ActivatedRoute])
], ResListPage);
export { ResListPage };
//# sourceMappingURL=res-list.page.js.map