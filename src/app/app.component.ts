  import { Component, OnInit, OnDestroy, AfterViewInit, Input} from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute } from '@angular/router'
import { AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
declare var window;
import { ActionSheetController } from '@ionic/angular';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import { Events } from '@ionic/angular';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  login_true: boolean = false;
  custom:boolean = true;
  custom_image;
  data_connection: boolean = true;
  data_re_connection:boolean = false;
  backButtonSubscription;
  data: any = {};
  device_id:string = ""
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private router: Router,
    private alertController:AlertController,
    private camera: Camera,
    private actionsheetCtrl:ActionSheetController,
    private webview: WebView,
    private events: Events,
    private fb:Facebook,
    private oneSignal: OneSignal,
    private uniqueDevice_id: UniqueDeviceID,
    private network: Network,
    private geoLocation: Geolocation

  ) {
    this.uniqueDevice_id.get().then(uid=>{
      this.device_id = uid
    })

    setInterval(()=>{
      this.network.onDisconnect().subscribe(() => {
        this.data_connection = false //some alert msg that netwk has gone 
      });

      this.network.onConnect().subscribe(() => {
        this.data_re_connection = true;
        this.data_connection = true //some alert msg that netwk has gone 

        setTimeout(()=>{
          this.data_re_connection = false;
        }, 3000);

      });
    },)


    this.initializeApp();
    this.getUserMenuInfo()
    this.events.subscribe("name", (sliderConfig) =>{
      // alert(JSON.stringify(sliderConfig))
      this.data = sliderConfig
      this.login_true = true;
    })
  }

  @Input() getUser;

  ngOnInit(){
    console.log("2222222222222222");
    // this.login_true = true
    // this.storage.get("current_user_info").then(res=>{
    //   // console.log(res, "UUUU")
    //   this.data = JSON.parse(res)
    //   console.log(this.data)
    // })
    this.getUserMenuInfo()

  }

  getUserInfo(user:any){
    console.log(user, "*****")
  }

  // ionViewDidEnter(){
  //   // this.login_true = true
  //   // this.storage.get("current_user_info").then(res=>{
  //   //   // console.log(res, "UUUU")
  //   //   this.data = JSON.parse(res)
  //   //   console.log(this.data)
  //   // })
  //   this.getUserMenuInfo()
  // }


  getData(){
    console.log("Failed")
  }

  ionViewWillEnter(){
    this.storage.get("current_user_info").then(res=>{
      // console.log(res, "UUUU")
      this.data = JSON.parse(res)
      this.login_true = true
      console.log(this.data)
    })
  }

  ionViewWillLoad(){
    this.storage.get("current_user_info").then(res=>{
      // console.log(res, "UUUU")
      this.data = JSON.parse(res)
      this.login_true = true
      console.log(this.data)
    })
  }

  ionViewDidLoad(){
    this.storage.get("current_user_info").then(res=>{
      // console.log(res, "UUUU")
      this.data = JSON.parse(res)
      this.login_true = true
      console.log(this.data)
    })
  }


  async ngAfterViewInit() {
    this.backButtonSubscription = this.platform.backButton.subscribe(async () => {
     const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure want to exit',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Exit',
          handler: () => {
            navigator['app'].exitApp();
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
    });
  }

  getUserMenuInfo(){
    this.storage.get("current_user_info").then(res=>{
      // console.log(res, "UUUU")
      this.data = JSON.parse(res)
      this.login_true = true
      console.log(this.data)
    })
  }


 async changeProfile(){
    const actionSheet = await this.actionsheetCtrl.create({
      buttons: [{
        text: 'Take a photo',
        icon: 'camera',
        handler: () => {
          this.captureImage(false)
        }
      },{
        text: 'Choose from Gallery',
        icon: 'images',
        handler: () => {
          this.captureImage(true)
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  // }

    // var final_img;
    // const options: CameraOptions = {
    //   quality: 100,
    //   destinationType: this.camera.DestinationType.FILE_URI,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   mediaType: this.camera.MediaType.PICTURE
    // }

    // this.camera.getPicture(options).then((imageData) => {
    //  let base64Image = 'data:image/jpeg;base64,' + imageData;
    //  this.custom_image = window.Ionic.WebView.convertFileSrc(imageData);
    //  this.data.picture  = this.custom_image
    //  this.storage.get("current_user_info").then(res=>{
    //    var temp = JSON.parse(res)
    //    temp.picture = this.custom_image
    //    final_img = temp
    //  })
    //  this.storage.set("current_user_info", this.data)
    //  this.storage.get("current_user_info").then(res=>{
    //    alert(JSON.stringify(res))
    //  })
    //  this.getUserMenuInfo()
    //  this.custom = true
    //  alert(imageData)
    // }, (err) => {
    //  alert(err)
    //  // Handle error
    // });
  }

  async captureImage(useAlbum: boolean) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      ...useAlbum ? {sourceType: this.camera.PictureSourceType.PHOTOLIBRARY} : {}
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      var imagePath = this.webview.convertFileSrc(imageData);
      this.custom_image = imagePath
      this.data.picture  = imagePath
       // this.storage.get("current_user_info").then(res=>{
       //   var temp = JSON.parse(res)
       //   temp.picture = this.custom_image
       //   // final_img = temp
       // })
      this.storage.set("current_user_info", this.data)
      this.storage.get("current_user_info").then(res=>{
        alert(JSON.stringify(res))
      })
      this.getUserMenuInfo()
      this.custom = true
      // alert(imageData)
      }, (err) => {
     alert(err)
     // Handle error
    });
  }

  async ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }

  onLogout(){
    this.login_true = false
    this.storage.get('provider').then(res=>{
      if(res){
        this.fb.logout();
      }
    })
    this.storage.remove('current_user')
    this.storage.remove('current_user_info')
    this.router.navigate(['login'])
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.show();
      this.splashScreen.hide();

      this.oneSignal.startInit('d5e9e3d9-9534-4ad1-bad2-124a65ed3862', this.device_id);
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

      // Notifcation was received in general
      this.oneSignal.handleNotificationReceived().subscribe(data => {
        let msg = "Hello Android";
        let title = "You got a notification";
        // this.showAlert(title, msg);
      });

    this.network.onDisconnect().subscribe(() => {
      // alert("Network Disconnected")
      this.data_connection = false;
    })


    this.network.onConnect().subscribe(() => {
      // alert("Network Disconnected")
      this.data_re_connection = true;

      setTimeout(()=>{
        this.data_re_connection = false;
      })
    })


    this.geoLocation.watchPosition({ enableHighAccuracy: true }).subscribe((data) => {
      console.log(data.coords)
      console.log(data.coords)
      alert(JSON.stringify(data.coords))
    }, (err)=>{
      alert(err)
    });

    this.geoLocation.getCurrentPosition().then((resp) => {
      alert(JSON.stringify(resp))
    }).catch((error) => {
      console.log('Error getting location', error);
    });
      // // Notification was really clicked/opened
      // this.oneSignal.handleNotificationOpened().subscribe(data => {
      //   // Just a note that the data is a different place here!
      //   let additionalData = data.notification.payload.additionalData;

      //   this.showAlert('Notification opened', 'You already read this before');
      // });

      this.oneSignal.endInit();
    });
  }
}
