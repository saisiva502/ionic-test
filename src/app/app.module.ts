import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Pinterest } from '@ionic-native/pinterest/ngx';
import { TwitterConnect } from '@ionic-native/twitter-connect/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {WebView} from '@ionic-native/ionic-webview/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';
import { Network } from '@ionic-native/network/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { AgmCoreModule } from '@agm/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';


@NgModule({
  declarations: [
  AppComponent,
  LoginComponent
  ],
  entryComponents: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    Facebook,
    WebView,
    OneSignal,
    Geolocation,
    Network,
    UniqueDeviceID,
    Pinterest,
    DatePicker,
    TwitterConnect,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ],

  bootstrap: [AppComponent]
})
export class AppModule {}
