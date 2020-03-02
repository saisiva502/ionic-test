import { Component, OnInit } from '@angular/core';
import { ReservationDataService } from '../reservation-data.service';
import { Router, ActivatedRoute } from '@angular/router'
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { IonInfiniteScroll } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IonReorderGroup } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-res-list',
  templateUrl: './res-list.page.html',
  styleUrls: ['./res-list.page.scss'],
})
export class ResListPage implements OnInit {

  constructor(private datePicker: DatePicker, private router:Router, private location: Location, private _resService: ReservationDataService, private activatedRoute: ActivatedRoute) { }
  intial_list: number = 10
  next_list:number = 10
  list_complete: string = "false";
  list_data:any = []
  temp_data:any = []
  type:string  = ""
  from_date: string = ''
  to_date: string = ''

  ngOnInit() {
  }

  ionViewDidEnter(){
  	this.type = this.activatedRoute.snapshot.params['type']
  	this.getAllIntilaData()
  }

  getAllIntilaData(){
    this._resService.getAllResData(this.type, this.intial_list).then(res=>{
      this.list_data = res.data
      this.temp_data  = res.data
      if(this.from_date && this.to_date){
        this.applyFilter()
      }
      if(res.status === "completed"){
        this.list_complete = "true"
        console.log("completed",this.list_complete)
      }
    })
  }

  clearFilter(){
    this.from_date = ''
    this.to_date = ""
    this.list_data = this.temp_data
  }

  applyFilter(){
    if(this.from_date && this.to_date){
      this.temp_data = this.list_data
      var list_filter_data = []


      var data = []
      this.list_data = this.temp_data;
      var from_dateParse = Date.parse(this.from_date)
      var to_dateParse  = Date.parse(this.to_date)

      console.log(from_dateParse, to_dateParse)
      this.list_data.map((item, index) =>{
        if(from_dateParse <= Date.parse(item.date) && to_dateParse >= Date.parse(item.date)){
          // alert(item + "djdjdjjd")
          data.push(item)
        }
        if(index = this.list_data.length-1){
          this.list_data = list_filter_data
        }
      })

      this.list_data = data
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
    }else{
      alert("Enter from and to dates")
    }
  }


  getFromDatePicker(){
    this.datePicker.show({
      date: new Date('2015/12/15'),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date =>{
        var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        this.from_date = [year, month, day].join('-');
      },
      err => alert('Error occurred while getting date: ' + err)
    );
  }

  getToDatePicker(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => {
        var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        this.to_date = [year, month, day].join('-');
      },
      err => alert('Error occurred while getting date: ' + err)
    );
  }

  getFutureRes(item){
  	console.log(item)
  	this.router.navigate(['res-detail', "future",  item.id])
  }

  goBack(){
  	this.location.back()
  }

  doReorder(ev: any) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  loadData(event){
    console.log("Success")
    this.intial_list += this.next_list
    this.getAllIntilaData()
    if(this.list_complete === "true"){
      console.log(this.list_complete)
      event.target.disabled = true;
    }
    setTimeout(function(){
      event.target.complete()
    }, 500)
  }
}
