import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute } from '@angular/router'
import { ToastController } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
// import { Pinterest } from '@ionic-native/pinterest/ngx';
import { TwitterConnect } from '@ionic-native/twitter-connect/ngx';
import { MenuController } from '@ionic/angular'
import { Events } from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	submitted:boolean = false;
	username_pre:string = "nyros"
	password_pre:string = "12345678"
  login_true:boolean = false;
  data = ""
  userData = ''
  error:boolean = false
  err_data = ""
  constructor(
    private fb: Facebook, 
    private formBuilder: FormBuilder, 
    private toastController: ToastController, 
    private storage: Storage, 
    private router: Router,
    private menuCtrl: MenuController,
    private tw: TwitterConnect,
    private events: Events
    ) {
      this.menuCtrl.swipeEnable(false);
     }

  // scopes = [
  //   this.pinterest.SCOPES.READ_PUBLIC,
  //   this.pinterest.SCOPES.WRITE_PUBLIC,
  //   this.pinterest.SCOPES.READ_RELATIONSHIPS,
  //   this.pinterest.SCOPES.WRITE_RELATIONSHIPS
  // ]

  datas = {
    name: "sai"
  }

  ngOnInit() {
  	this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
  	})
  }

  get f() { return this.loginForm.controls; }

  async onLogin(){
  	this.submitted = true;
    if (this.loginForm.invalid) {
      console.log("failed")
      return;
    }else{
    	if(this.username_pre === this.loginForm.controls['username'].value && this.password_pre === this.loginForm.controls['password'].value){
    		this.storage.set('current_user', true);
        var info_nr = {user_name: "Nyros", picture: "https://nyros.com/images/favicon.ico"}
        this.storage.set('current_user_info', JSON.stringify(info_nr));
        // this.events.publish('name', info_nr)
    		this.router.navigate(['home'])
    	}else{
        const toast = await this.toastController.create({
		      message: 'Invalid Credentials',
		      duration: 2000
		    });
		    toast.present();
    	}
    }
  }

  fbLogin(){
    console.log("TTTTTTTT")
    this.fb.login(['public_profile', 'email'])
  .then((res: FacebookLoginResponse) => {
    if(res){
    console.log('Logged into Facebook!', res)
      this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
        var y = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], user_name: profile['name']}
        this.userData = JSON.stringify(y)
        this.storage.set('current_user_info', JSON.stringify(y));
        // this.events.publish('name', y)
        // alert(JSON.stringify(y))
        this.storage.set('current_user', true);
        this.storage.set('provider', "facebook");
        this.router.navigate(['home'])
      });
      // this.login_true = true
      // var x = JSON.stringify(res)
      // this.data  = x
    }
  })
  .catch(e => console.log('Error logging into Facebook', e));
    this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
  }

  // pinterestLogin(){
  //   console.log("Google")
  //   this.googlePlus.login({
  //     "scopes": '',
  //     'webClientId': '59722761487-r4b90qcek8ttn1c1fjfv787no94bpjjn.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
  //     'offline': true
  //   })
  // .then(res =>{
  //   if(res){
  //     console.log(res, "FROM SUCCESS")
  //     // this.storage.set('current_user', true);
  //     // this.storage.set('provider', "google");
  //     // this.router.navigate([''])
  //     this.login_true = true
  //     var x = JSON.stringify(res)
  //     this.data  = x
  //   }
  // })
  // .catch(err => {
  //     console.log(err, "FROM Error")

  //   this.login_true = true
  //   this.error = true
  //   var x = JSON.stringify(err)
  //   this.data  = x
  //   this.err_data = x
  // });
  // }

  twitterLogin(){
    this.tw.login()
    .then( res => {
      // Get user data
      // There is a bug which fires the success event in the error event.
      // The issue is reported in https://github.com/chroa/twitter-connect-plugin/issues/23
      this.tw.showUser()
      .then(user =>{
        console.log(user);
        alert(user)
      }, err =>{
        console.log(err);
        alert(err)
      })
    })
  }
}
