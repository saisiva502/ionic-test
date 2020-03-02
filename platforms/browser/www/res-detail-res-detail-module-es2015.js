(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["res-detail-res-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/res-detail/res-detail.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/res-detail/res-detail.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\" (click)=\"goBack()\">\n      <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n    </ion-buttons>\n    <ion-title>Reservation Detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\" *ngFor=\"let item of detail_data\">\n  \t<img src=\"./assets/grd.jpeg\">\n    <ion-card-content>\n      <ion-card-subtitle class=\"reservation_name\">Type: <b>{{item.type}}</b></ion-card-subtitle>\n      <ion-card-subtitle class=\"reservation_name\">Match: <b>{{item.match}}</b></ion-card-subtitle>\n      <ion-card-subtitle class=\"reservation_name\">Date: <b>{{item.date}}</b></ion-card-subtitle>\n      <ion-card-subtitle class=\"reservation_name\">\n        <ion-button color=\"secondary\" size=\"small\" (click)=\"sendNotification()\">Book Now</ion-button>\n      </ion-card-subtitle>\n    </ion-card-content>\n  </ion-card>\n  <div id=\"container\"></div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/res-detail/res-detail-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/res-detail/res-detail-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ResDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResDetailPageRoutingModule", function() { return ResDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _res_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./res-detail.page */ "./src/app/res-detail/res-detail.page.ts");




const routes = [
    {
        path: '',
        component: _res_detail_page__WEBPACK_IMPORTED_MODULE_3__["ResDetailPage"]
    }
];
let ResDetailPageRoutingModule = class ResDetailPageRoutingModule {
};
ResDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/res-detail/res-detail.module.ts":
/*!*************************************************!*\
  !*** ./src/app/res-detail/res-detail.module.ts ***!
  \*************************************************/
/*! exports provided: ResDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResDetailPageModule", function() { return ResDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _res_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./res-detail-routing.module */ "./src/app/res-detail/res-detail-routing.module.ts");
/* harmony import */ var _res_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./res-detail.page */ "./src/app/res-detail/res-detail.page.ts");







let ResDetailPageModule = class ResDetailPageModule {
};
ResDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _res_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResDetailPageRoutingModule"]
        ],
        declarations: [_res_detail_page__WEBPACK_IMPORTED_MODULE_6__["ResDetailPage"]]
    })
], ResDetailPageModule);



/***/ }),

/***/ "./src/app/res-detail/res-detail.page.scss":
/*!*************************************************!*\
  !*** ./src/app/res-detail/res-detail.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL255cm9zL0RvY3VtZW50cy9uYWdlc3dhcmFyYW8vSW9uaWMvdGVzdF90YXNrMS9zcmMvYXBwL3Jlcy1kZXRhaWwvcmVzLWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Jlcy1kZXRhaWwvcmVzLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcmVzLWRldGFpbC9yZXMtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29ue1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59IiwiaW9uLWljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/res-detail/res-detail.page.ts":
/*!***********************************************!*\
  !*** ./src/app/res-detail/res-detail.page.ts ***!
  \***********************************************/
/*! exports provided: ResDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResDetailPage", function() { return ResDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reservation_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reservation-data.service */ "./src/app/reservation-data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let ResDetailPage = class ResDetailPage {
    constructor(http, location, activatedRoute, _resService) {
        this.http = http;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this._resService = _resService;
        this.detail_data = [];
        this.device_id = '';
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        var x = this.activatedRoute.params.subscribe(res => {
            this.data_type = res.type;
            this.data_id = res.id;
            // console.log(this.data_id)
        });
        this._resService.resCurrentId(this.data_id, this.data_type).then(res => {
            this.detail_data = res;
            this.lat = res[0].lat;
            this.lon = res[0].lon;
            if (this.lat && this.lon) {
                Highcharts.mapChart('container', {
                    chart: {
                        map: 'custom/world'
                    },
                    title: {
                        text: 'Ground Location'
                    },
                    mapNavigation: {
                        enabled: true
                    },
                    tooltip: {
                        headerFormat: '',
                        pointFormat: '<b>{point.name}</b><br>Lat: {point.lat}, Lon: {point.lon}'
                    },
                    plotOptions: {
                        series: {
                            cursor: 'pointer',
                            point: {
                                events: {
                                    click: function () {
                                        console.log('Category: ' + this.category + ', value: ' + this.y);
                                    }
                                }
                            }
                        }
                    },
                    series: [{
                            // Use the gb-all map with no data as a basemap
                            name: 'Basemap',
                            borderColor: '#A0A0A0',
                            nullColor: '#61dafb',
                            showInLegend: false
                        }, {
                            name: 'Separators',
                            type: 'mapline',
                            nullColor: '#707070',
                            showInLegend: false,
                            enableMouseTracking: false
                        }, {
                            // Specify points using lat/lon
                            type: 'mappoint',
                            name: 'states',
                            color: Highcharts.getOptions().colors[5],
                            marker: {
                                enabled: true,
                                symbol: "url(https://img.icons8.com/color/25/000000/marker.png)"
                            },
                            data: [
                                {
                                    name: "India",
                                    lat: this.lat,
                                    lon: this.lon
                                }
                            ],
                        }]
                });
            }
        });
    }
    sendNotification() {
        let headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Basic MzVkZDYxNWQtZjlhMS00Y2QwLWE3NmEtY2Q1ZjA2YTc0MmFj'
        };
        var jsonToSend = {
            ["app_id"]: "d5e9e3d9-9534-4ad1-bad2-124a65ed3862",
            ["contents"]: { ["en"]: "Success fully booked your ground" },
            ["headings"]: { ["en"]: "All the best" },
            ["subtitle"]: { ["en"]: "From GrabGrounds" },
            // ["buttons"]:[{"id": "id1", "text": "Share", "icon": "ic_menu_share"}, {"id": "id2", "text": "button2", "icon": "ic_menu_send"}],
            ["big_picture"]: "https://www.myphonemate.com/wp-content/uploads/2019/08/PS-B-PS044.png",
            ["included_segments"]: ["Active Users", "Inactive Users"],
            ["isAndroid"]: true,
            ["isIos"]: true,
        };
        this.http.post("https://onesignal.com/api/v1/notifications", jsonToSend, { headers: headers }).subscribe(res => {
            console.log(res);
        }, err => {
            alert(err);
        });
    }
    //  async showAlert(title, msg) {
    //   const alert = await this.alertCtrl.create({
    //     header: title,
    //     subHeader: msg,
    //     buttons: [
    //       {
    //         text: `Action: Click`,
    //         handler: () => {
    //           // E.g: Navigate to a specific screen
    //         }
    //       }
    //     ]
    //   })
    //   alert.present();
    // }
    goBack() {
        this.location.back();
    }
};
ResDetailPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _reservation_data_service__WEBPACK_IMPORTED_MODULE_3__["ReservationDataService"] }
];
ResDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-res-detail',
        template: __webpack_require__(/*! raw-loader!./res-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/res-detail/res-detail.page.html"),
        styles: [__webpack_require__(/*! ./res-detail.page.scss */ "./src/app/res-detail/res-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _reservation_data_service__WEBPACK_IMPORTED_MODULE_3__["ReservationDataService"]])
], ResDetailPage);



/***/ })

}]);
//# sourceMappingURL=res-detail-res-detail-module-es2015.js.map