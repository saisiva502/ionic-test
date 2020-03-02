import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router'
import { ReservationDataService } from '../../reservation-data.service';
import { Storage } from '@ionic/storage';
import { Events } from '@ionic/angular'
import { Geolocation } from '@ionic-native/geolocation/ngx';

declare let Highcharts;

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss'],
})
export class HomeListComponent implements OnInit {

  future_reservations:any = []
  latitude:number;
  longitude:number;
  map:any;
  constructor(
    private storage: Storage,
    private _resService: ReservationDataService, 
    private http: HttpClient, 
    private toast:ToastController, 
    private router: Router,
    private events:Events,
    private geoLocation: Geolocation

   ) {}

  ngOnInit(){
		this._resService.getAllResData("future", 2).then(res=>{
      setTimeout(()=>{
        this.future_reservations = res.data
      })
		})

    var latitudeDync;
    var longitudeDync;
    this.geoLocation.watchPosition({ enableHighAccuracy: true }).subscribe((data) => {
      console.log(data.coords)
      console.log(data.coords)

      latitudeDync = data.coords.latitude
      longitudeDync = data.coords.longitude
    });

    this.geoLocation.getCurrentPosition().then((resp) => {
      alert(JSON.stringify(resp))
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    setTimeout(()=>{
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
              name:"India",
              lat: 16.9891,
              lon: 82.2475
            }
            ],
        }]
      });
    })
  }


  ionViewDidEnter(){
    // this._resService.getAllResData("future", 2).then(res=>{
    //   setTimeout(()=>{
    //     this.future_reservations = res.data
    //   })
    // })
    this.geoLocation.getCurrentPosition().then((resp) => {
      alert(JSON.stringify(resp + "Did Enter"))
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    this.geoLocation.watchPosition({ enableHighAccuracy: true }).subscribe((data) => {
      alert(data.coords + "Will Enter")
      this.latitude = data.coords.latitude
      this.longitude = data.coords.longitude
    });
  }

  ionViewWillEnter(){
    this._resService.getAllResData("future", 2).then(res=>{
      setTimeout(()=>{
        this.future_reservations = res.data
      })
    })

    this.geoLocation.getCurrentPosition().then((resp) => {
      alert(JSON.stringify(resp + "Will Enter" ))
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    this.geoLocation.watchPosition({ enableHighAccuracy: true }).subscribe((data) => {
      alert(data.coords + "Will Enter")
      this.latitude = data.coords.latitude
      this.longitude = data.coords.longitude
    });
  }

  ionViewDidLoad(){
    this._resService.getAllResData("future", 2).then(res=>{
      setTimeout(()=>{
        this.future_reservations = res.data
      })
    })
    this.geoLocation.getCurrentPosition().then((resp) => {
      alert(JSON.stringify(resp + "DidLoad"))
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    this.geoLocation.watchPosition({ enableHighAccuracy: true }).subscribe((data) => {
      alert(data.coords + " Did Load")
      this.latitude = data.coords.latitude
      this.longitude = data.coords.longitude
    });
  }

  ionViewWillLoad(){
    this._resService.getAllResData("future", 2).then(res=>{
      setTimeout(()=>{
        this.future_reservations = res.data
      })
    })
    this.geoLocation.watchPosition({ enableHighAccuracy: true }).subscribe((data) => {
      alert(data.coords + "Will Load")
      this.latitude = data.coords.latitude
      this.longitude = data.coords.longitude
    });
  }


  getFutureRes(item){
  	console.log(item)
  	this.router.navigate(['res-detail', "future",  item.id])
  }

  onFutureAllRes(){
  	this.router.navigate(['res-list', "future"])
  }

}
