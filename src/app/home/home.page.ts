import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router'
import { ReservationDataService } from '../reservation-data.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  employees_data:any = [];
  carousel_imgs:any = [
  	"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5r9mIu9Wv92SlY1v-t5m8kDdhGqbI8hduuPsxfYCYH5FQ1E7K",
  	"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtArr-jW2cMfC4SRfZXfU_2b2vIvGa9PYnpB85A-1xPoSfgaEx",
  	"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcXAmwAXNWNt5jXSbN2Ya8RTl9LFDKRhOSOLSOMVo3Qbw57EgR",
  	"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSe4-mXqRSTFEEGlBt5wyvrXjcYftUNT9tD2_UnIWI68BirqlGF"
  ]

  sliderConfig = {
    spaceBetween: 10,
    autoplay:true,
    speed: 400,loop: false
  };
  // data_loaded:boolean = false
  // future_reservations:any = []
  // @Output() getUser = new EventEmitter<any>();
  constructor(
    private storage: Storage,
     private _resService: ReservationDataService, 
     private http: HttpClient, 
     private toast:ToastController, 
     private router: Router
   ) {}

  ngOnInit(){
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
  // ionViewDidEnter(){
  //   this.data_loaded = true

  //   this._resService.getAllResData("future", 2).then(res=>{
  //      // console.log(res, "TTTTT")
  //      // alert(JSON.stringify(res))
  //      this.future_reservations = res.data
  //   })
  //   // alert("Data Called Initally")
  // }
  // ionViewWillEnter(){
  //   this.data_loaded = true

  //   this._resService.getAllResData("future", 2).then(res=>{
  //      // console.log(res, "TTTTT")
  //      // alert(JSON.stringify(res))
  //     this.future_reservations = res.data

  //   })

  //   // this.storage.get("current_user_info").then(res=>{
  //   //   // console.log(res, "UUUU")
  //   //   this.getUser = JSON.parse(res)
  //   //   console.log(this.getUser, "Emit")
  //   // })
  // }

  // getFutureRes(item){
  // 	console.log(item)
  // 	this.router.navigate(['res-detail', "future",  item.id])
  // }

  // onFutureAllRes(){
  // 	this.router.navigate(['res-list', "future"])
  // }

}
