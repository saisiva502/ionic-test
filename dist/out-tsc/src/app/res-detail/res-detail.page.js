import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationDataService } from '../reservation-data.service';
import { Location } from '@angular/common';
let ResDetailPage = class ResDetailPage {
    constructor(location, activatedRoute, _resService) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this._resService = _resService;
        this.detail_data = [];
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
    goBack() {
        this.location.back();
    }
};
ResDetailPage = __decorate([
    Component({
        selector: 'app-res-detail',
        templateUrl: './res-detail.page.html',
        styleUrls: ['./res-detail.page.scss'],
    }),
    __metadata("design:paramtypes", [Location, ActivatedRoute, ReservationDataService])
], ResDetailPage);
export { ResDetailPage };
//# sourceMappingURL=res-detail.page.js.map