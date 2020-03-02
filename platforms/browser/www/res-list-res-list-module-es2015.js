(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["res-list-res-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/res-list/res-list.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/res-list/res-list.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\" (click)=\"goBack()\">\n      <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n    </ion-buttons>\n    <ion-title>Reservation List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-item (click)=\"getFromDatePicker()\">From: {{from_date}} <ion-icon slot=\"end\" name=\"calendar\"></ion-icon></ion-item>\n<ion-item (click)=\"getToDatePicker()\">To: {{to_date}} <ion-icon slot=\"end\" name=\"calendar\"></ion-icon></ion-item>\n\n<ion-row>\n  <ion-col>\n    <ion-button color=\"secondary\" (click)=\"clearFilter()\"> Clear Filter</ion-button>\n  </ion-col>\n  <ion-col>\n    <ion-button color=\"success\" (click)=\"applyFilter()\"> Apply Filter</ion-button>\n  </ion-col>\n</ion-row>\n\n<ion-content>\n\t<ion-list>\n    <ion-reorder-group (ionItemReorder)=\"doReorder($event)\" disabled=\"false\">\n  \t  <ion-item *ngFor=\"let item of list_data\" (click)=\"getFutureRes(item)\">\n        <ion-reorder>\n          <ion-item>\n      \t    <ion-avatar slot=\"start\">\n      \t      <img src=\"./assets/grd.jpeg\">\n      \t    </ion-avatar>\n      \t    <ion-label>\n      \t      <h2>{{item.type}}</h2>\n      \t      <h3>{{item.match}}</h3>\n      \t      <p>{{item.date}}</p>\n      \t    </ion-label>\n      \t    <ion-button color=\"tertiary\" size=\"small\" (click)=\"getFutureRes(item)\">View</ion-button>\n          </ion-item>\n        </ion-reorder>\n  \t  </ion-item>\n    </ion-reorder-group>\n  </ion-list>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/res-list/res-list-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/res-list/res-list-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ResListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResListPageRoutingModule", function() { return ResListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _res_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./res-list.page */ "./src/app/res-list/res-list.page.ts");




const routes = [
    {
        path: '',
        component: _res_list_page__WEBPACK_IMPORTED_MODULE_3__["ResListPage"]
    }
];
let ResListPageRoutingModule = class ResListPageRoutingModule {
};
ResListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResListPageRoutingModule);



/***/ }),

/***/ "./src/app/res-list/res-list.module.ts":
/*!*********************************************!*\
  !*** ./src/app/res-list/res-list.module.ts ***!
  \*********************************************/
/*! exports provided: ResListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResListPageModule", function() { return ResListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _res_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./res-list-routing.module */ "./src/app/res-list/res-list-routing.module.ts");
/* harmony import */ var _res_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./res-list.page */ "./src/app/res-list/res-list.page.ts");







let ResListPageModule = class ResListPageModule {
};
ResListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _res_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResListPageRoutingModule"]
        ],
        declarations: [_res_list_page__WEBPACK_IMPORTED_MODULE_6__["ResListPage"]]
    })
], ResListPageModule);



/***/ }),

/***/ "./src/app/res-list/res-list.page.scss":
/*!*********************************************!*\
  !*** ./src/app/res-list/res-list.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  padding-left: 15px;\n}\n\n.view_btn {\n  -webkit-box-align: right;\n          align-items: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL255cm9zL0RvY3VtZW50cy9uYWdlc3dhcmFyYW8vSW9uaWMvdGVzdF90YXNrMS9zcmMvYXBwL3Jlcy1saXN0L3Jlcy1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVzLWxpc3QvcmVzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNDLHdCQUFBO1VBQUEsa0JBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL3Jlcy1saXN0L3Jlcy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29ue1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi52aWV3X2J0bntcblx0YWxpZ24taXRlbXM6IHJpZ2h0O1xufSIsImlvbi1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4udmlld19idG4ge1xuICBhbGlnbi1pdGVtczogcmlnaHQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/res-list/res-list.page.ts":
/*!*******************************************!*\
  !*** ./src/app/res-list/res-list.page.ts ***!
  \*******************************************/
/*! exports provided: ResListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResListPage", function() { return ResListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _reservation_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reservation-data.service */ "./src/app/reservation-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");






let ResListPage = class ResListPage {
    constructor(datePicker, router, location, _resService, activatedRoute) {
        this.datePicker = datePicker;
        this.router = router;
        this.location = location;
        this._resService = _resService;
        this.activatedRoute = activatedRoute;
        this.intial_list = 10;
        this.next_list = 10;
        this.list_complete = "false";
        this.list_data = [];
        this.temp_data = [];
        this.type = "";
        this.from_date = '';
        this.to_date = '';
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
            this.temp_data = res.data;
            if (this.from_date && this.to_date) {
                this.applyFilter();
            }
            if (res.status === "completed") {
                this.list_complete = "true";
                console.log("completed", this.list_complete);
            }
        });
    }
    clearFilter() {
        this.from_date = '';
        this.to_date = "";
        this.list_data = this.temp_data;
    }
    applyFilter() {
        if (this.from_date && this.to_date) {
            this.temp_data = this.list_data;
            var list_filter_data = [];
            var data = [];
            this.list_data = this.temp_data;
            var from_dateParse = Date.parse(this.from_date);
            var to_dateParse = Date.parse(this.to_date);
            console.log(from_dateParse, to_dateParse);
            this.list_data.map((item, index) => {
                if (from_dateParse <= Date.parse(item.date) && to_dateParse >= Date.parse(item.date)) {
                    // alert(item + "djdjdjjd")
                    data.push(item);
                }
                if (index = this.list_data.length - 1) {
                    this.list_data = list_filter_data;
                }
            });
            this.list_data = data;
            // this.list_data.map((item, index) =>{
            //   // alert(JSON.stringify(item))
            //   if(Date.parse(this.from_date) <= Date.parse(item.date) && Date.parse(this.to_date) >= Date.parse(item.created_at)){
            //     list_filter_data.push(item)
            //     alert(JSON.stringify(item))
            //   }
            //   if(index = this.list_data-1){
            //     this.list_data = list_filter_data
            //   }
            // })
        }
        else {
            alert("Enter from and to dates");
        }
    }
    getFromDatePicker() {
        this.datePicker.show({
            date: new Date('2015/12/15'),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(date => {
            var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;
            this.from_date = [year, month, day].join('-');
        }, err => alert('Error occurred while getting date: ' + err));
    }
    getToDatePicker() {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(date => {
            var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;
            this.to_date = [year, month, day].join('-');
        }, err => alert('Error occurred while getting date: ' + err));
    }
    getFutureRes(item) {
        console.log(item);
        this.router.navigate(['res-detail', "future", item.id]);
    }
    goBack() {
        this.location.back();
    }
    doReorder(ev) {
        // The `from` and `to` properties contain the index of the item
        // when the drag started and ended, respectively
        console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
        // Finish the reorder and position the item in the DOM based on
        // where the gesture ended. This method can also be called directly
        // by the reorder group
        ev.detail.complete();
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
ResListPage.ctorParameters = () => [
    { type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["DatePicker"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _reservation_data_service__WEBPACK_IMPORTED_MODULE_2__["ReservationDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ResListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-res-list',
        template: __webpack_require__(/*! raw-loader!./res-list.page.html */ "./node_modules/raw-loader/index.js!./src/app/res-list/res-list.page.html"),
        styles: [__webpack_require__(/*! ./res-list.page.scss */ "./src/app/res-list/res-list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["DatePicker"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _reservation_data_service__WEBPACK_IMPORTED_MODULE_2__["ReservationDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ResListPage);



/***/ })

}]);
//# sourceMappingURL=res-list-res-list-module-es2015.js.map