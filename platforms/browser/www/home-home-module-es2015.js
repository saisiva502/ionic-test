(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home-list/home-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home-list/home-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <ion-card>\n    <ion-card-header>\n      <ion-card-title><ion-badge color=\"tertiary\">Future reservations</ion-badge></ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"size-lg\" size=\"6\" *ngFor=\"let item of future_reservations; let i=index\">\n            <ion-card class=\"home_data\" (click)=\"getFutureRes(item)\">\n              <img src=\"./assets/grd.jpeg\">\n              <ion-card-content>\n                <ion-card-subtitle class=\"reservation_name\">Type: <b>{{item.type}}</b></ion-card-subtitle>\n                <ion-card-subtitle class=\"reservation_name\">Match: <b>{{item.match}}</b></ion-card-subtitle>\n                <ion-card-subtitle class=\"reservation_name\">Date: <b>{{item.date}}</b></ion-card-subtitle>\n                <ion-card-subtitle class=\"reservation_name\">\n                  <ion-button color=\"secondary\" size=\"small\" (click)=\"getFutureRes(item)\">View</ion-button>\n                </ion-card-subtitle>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-button class=\"ion-float-right\" color=\"warning\" size=\"small\" (click)=\"onFutureAllRes()\">View All</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title><ion-badge color=\"tertiary\">Past reservations</ion-badge></ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col class=\"size-lg\" size=\"6\" *ngFor=\"let item of future_reservations; let i=index\">\n            <ion-card *ngIf=\"i<2\">\n              <img src=\"./assets/grd.jpeg\">\n              <ion-card-content>\n                <ion-card-subtitle class=\"reservation_name\">Type: <b>{{item.type}}</b></ion-card-subtitle>\n                <ion-card-subtitle class=\"reservation_name\">Match: <b>{{item.match}}</b></ion-card-subtitle>\n                <ion-card-subtitle class=\"reservation_name\">Date: <b>{{item.date}}</b></ion-card-subtitle>\n                <ion-card-subtitle class=\"reservation_name\">\n                  <ion-button color=\"secondary\" size=\"small\">View</ion-button>\n                </ion-card-subtitle>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-button class=\"ion-float-right\" color=\"warning\" size=\"small\">View All</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <div id=\"current_location\">\n    \n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-slides [options]=\"sliderConfig\">\n    <ion-slide *ngFor=\"let item of carousel_imgs\">\n      <ion-img src=\"{{item}}\"></ion-img>\n    </ion-slide>\n  </ion-slides>\n  <app-home-list></app-home-list>\n</ion-content>\n\n<!-- <ion-content>\n  <ion-card class=\"welcome-card\" *ngFor=\"let item of employees_data\">\n    <ion-card-header>\n    <ion-badge color=\"tertiary\">User</ion-badge>\n      <ion-card-title>\n        <ion-list lines=\"none\">\n          <ion-item line=\"none\">\n          <ion-icon name=\"person\" slot=\"start\"></ion-icon>\n            {{item.name}}\n          </ion-item>\n        </ion-list>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list lines=\"none\">\n        <ion-item>\n        <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n          {{item.email}}\n        </ion-item>\n        <ion-button class=\"ion-float-right\" color=\"secondary\">View</ion-button>\n      </ion-list>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content> -->\n"

/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_list_home_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-list/home-list.component */ "./src/app/components/home-list/home-list.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





const components = [
    _home_list_home_list_component__WEBPACK_IMPORTED_MODULE_3__["HomeListComponent"]
];
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: components,
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
        ],
        exports: [...components],
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/home-list/home-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/home-list/home-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reservation_name {\n  font-size: 6px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL255cm9zL0RvY3VtZW50cy9uYWdlc3dhcmFyYW8vSW9uaWMvdGVzdF90YXNrMS9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1saXN0L2hvbWUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lLWxpc3QvaG9tZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1saXN0L2hvbWUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNlcnZhdGlvbl9uYW1le1xuICBmb250LXNpemU6IDZweCAhaW1wb3J0YW50O1xufVxuIiwiLnJlc2VydmF0aW9uX25hbWUge1xuICBmb250LXNpemU6IDZweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home-list/home-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/home-list/home-list.component.ts ***!
  \*************************************************************/
/*! exports provided: HomeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeListComponent", function() { return HomeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reservation_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reservation-data.service */ "./src/app/reservation-data.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");









let HomeListComponent = class HomeListComponent {
    constructor(storage, _resService, http, toast, router, events, geoLocation) {
        this.storage = storage;
        this._resService = _resService;
        this.http = http;
        this.toast = toast;
        this.router = router;
        this.events = events;
        this.geoLocation = geoLocation;
        this.future_reservations = [];
    }
    ngOnInit() {
        this._resService.getAllResData("future", 2).then(res => {
            setTimeout(() => {
                this.future_reservations = res.data;
            });
        });
        var latitudeDync;
        var longitudeDync;
        this.geoLocation.watchPosition({ enableHighAccuracy: true }).subscribe((data) => {
            console.log(data.coords);
            console.log(data.coords);
            latitudeDync = data.coords.latitude;
            longitudeDync = data.coords.longitude;
        });
        this.geoLocation.getCurrentPosition().then((resp) => {
            alert(JSON.stringify(resp));
        }).catch((error) => {
            console.log('Error getting location', error);
        });
        setTimeout(() => {
            Highcharts.mapChart('current_location', {
                chart: {
                    map: 'countries/in/in-all'
                },
                title: {
                    text: 'Current Location'
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
                        nullColor: '#263e6e',
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
                                lat: 16.9891,
                                lon: 82.2475
                            }
                        ],
                    }]
            });
        });
    }
    ionViewDidEnter() {
        // this._resService.getAllResData("future", 2).then(res=>{
        //   setTimeout(()=>{
        //     this.future_reservations = res.data
        //   })
        // })
        this.geoLocation.getCurrentPosition().then((resp) => {
            alert(JSON.stringify(resp + "Did Enter"));
        }).catch((error) => {
            console.log('Error getting location', error);
        });
        this.geoLocation.watchPosition({ enableHighAccuracy: true }).subscribe((data) => {
            alert(data.coords + "Will Enter");
            this.latitude = data.coords.latitude;
            this.longitude = data.coords.longitude;
        });
    }
    ionViewWillEnter() {
        this._resService.getAllResData("future", 2).then(res => {
            setTimeout(() => {
                this.future_reservations = res.data;
            });
        });
        this.geoLocation.getCurrentPosition().then((resp) => {
            alert(JSON.stringify(resp + "Will Enter"));
        }).catch((error) => {
            console.log('Error getting location', error);
        });
        this.geoLocation.watchPosition({ enableHighAccuracy: true }).subscribe((data) => {
            alert(data.coords + "Will Enter");
            this.latitude = data.coords.latitude;
            this.longitude = data.coords.longitude;
        });
    }
    ionViewDidLoad() {
        this._resService.getAllResData("future", 2).then(res => {
            setTimeout(() => {
                this.future_reservations = res.data;
            });
        });
        this.geoLocation.getCurrentPosition().then((resp) => {
            alert(JSON.stringify(resp + "DidLoad"));
        }).catch((error) => {
            console.log('Error getting location', error);
        });
        this.geoLocation.watchPosition({ enableHighAccuracy: true }).subscribe((data) => {
            alert(data.coords + " Did Load");
            this.latitude = data.coords.latitude;
            this.longitude = data.coords.longitude;
        });
    }
    ionViewWillLoad() {
        this._resService.getAllResData("future", 2).then(res => {
            setTimeout(() => {
                this.future_reservations = res.data;
            });
        });
        this.geoLocation.watchPosition({ enableHighAccuracy: true }).subscribe((data) => {
            alert(data.coords + "Will Load");
            this.latitude = data.coords.latitude;
            this.longitude = data.coords.longitude;
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
HomeListComponent.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _reservation_data_service__WEBPACK_IMPORTED_MODULE_5__["ReservationDataService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"] }
];
HomeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-list',
        template: __webpack_require__(/*! raw-loader!./home-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home-list/home-list.component.html"),
        styles: [__webpack_require__(/*! ./home-list.component.scss */ "./src/app/components/home-list/home-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _reservation_data_service__WEBPACK_IMPORTED_MODULE_5__["ReservationDataService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"]])
], HomeListComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reservation_name {\n  font-size: 6px !important;\n}\n\n.network_bg_err {\n  background-color: red;\n  color: black;\n  padding: 10px;\n}\n\n.network_bg_success {\n  background-color: #32a877;\n  padding: 10px;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL255cm9zL0RvY3VtZW50cy9uYWdlc3dhcmFyYW8vSW9uaWMvdGVzdF90YXNrMS9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0MscUJBQUE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXNlcnZhdGlvbl9uYW1le1xuICBmb250LXNpemU6IDZweCAhaW1wb3J0YW50O1xufVxuXG4ubmV0d29ya19iZ19lcnJ7XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubmV0d29ya19iZ19zdWNjZXNze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJhODc3O1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuIiwiLnJlc2VydmF0aW9uX25hbWUge1xuICBmb250LXNpemU6IDZweCAhaW1wb3J0YW50O1xufVxuXG4ubmV0d29ya19iZ19lcnIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm5ldHdvcmtfYmdfc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMmE4Nzc7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reservation_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reservation-data.service */ "./src/app/reservation-data.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");







let HomePage = class HomePage {
    // data_loaded:boolean = false
    // future_reservations:any = []
    // @Output() getUser = new EventEmitter<any>();
    constructor(storage, _resService, http, toast, router) {
        this.storage = storage;
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
    }
    ngOnInit() {
        // alert("Data Called Initally from Oninit")
        //   this.data_loaded = true
        // this._resService.getAllResData("future", 2).then(res=>{
        //  	// console.log(res, "TTTTT")
        //      // alert(JSON.stringify(res))
        //  	this.future_reservations = res.data
        // })
        // this.storage.get("current_user_info").then(res=>{
        //   // console.log(res, "UUUU")
        //   this.getUser = JSON.parse(res)
        //   console.log(this.getUser, "Emit")
        // })
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] },
    { type: _reservation_data_service__WEBPACK_IMPORTED_MODULE_5__["ReservationDataService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _reservation_data_service__WEBPACK_IMPORTED_MODULE_5__["ReservationDataService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map