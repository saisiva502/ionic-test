import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { ReservationDataService } from '../reservation-data.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
// import { OneSignal } from '@ionic-native/onesignal/ngx';
// import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
// import { AlertController } from '@ionic/angular';
declare let Highcharts;
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-res-detail',
  templateUrl: './res-detail.page.html',
  styleUrls: ['./res-detail.page.scss'],
})
export class ResDetailPage implements OnInit {

  constructor(private http:HttpClient, private location:Location, private activatedRoute: ActivatedRoute, private _resService: ReservationDataService) { }
  detail_data:any = [];
  data_type:string;
  data_id:string;
  lat:string;
  lon:string;
  device_id:string = ''

  ngOnInit() {
  }

  ionViewDidEnter(){
  	var x = this.activatedRoute.params.subscribe(res =>{
  		this.data_type = res.type
  		this.data_id = res.id
  		// console.log(this.data_id)

  	})
  	this._resService.resCurrentId(this.data_id,this.data_type).then(res=>{
  		this.detail_data = res;
      this.lat = res[0].lat
      this.lon = res[0].lon
  		if(this.lat && this.lon){
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
                name:"India",
                lat: this.lat,
                lon: this.lon
              }
              ],
          }]
        });
      }
    })

  }

  sendNotification(){
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Basic MzVkZDYxNWQtZjlhMS00Y2QwLWE3NmEtY2Q1ZjA2YTc0MmFj'
    }
    var jsonToSend = {
      ["app_id"]: "d5e9e3d9-9534-4ad1-bad2-124a65ed3862",
      ["contents"] :{["en"]: "Success fully booked your ground"},
      ["headings"] :{["en"]: "All the best"},
      ["subtitle"] :{["en"]: "From GrabGrounds"},
      // ["buttons"]:[{"id": "id1", "text": "Share", "icon": "ic_menu_share"}, {"id": "id2", "text": "button2", "icon": "ic_menu_send"}],
      ["big_picture"] :"https://www.myphonemate.com/wp-content/uploads/2019/08/PS-B-PS044.png",
      ["included_segments"]: ["Active Users", "Inactive Users"],
      ["isAndroid"]: true,
      ["isIos"]: true,
    }
    this.http.post("https://onesignal.com/api/v1/notifications",jsonToSend,{headers: headers}).subscribe(res=>{
      console.log(res)
    }, err=>{
      alert(err)
    })
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


  goBack(){
    this.location.back()
  }

}
