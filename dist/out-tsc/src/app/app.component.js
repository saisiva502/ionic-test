import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, storage, router, alertController) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.storage = storage;
        this.router = router;
        this.alertController = alertController;
        this.appPages = [
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
        this.login_true = false;
        this.initializeApp();
    }
    ngOnInit() {
        this.login_true = true;
    }
    ngAfterViewInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.backButtonSubscription = this.platform.backButton.subscribe(() => __awaiter(this, void 0, void 0, function* () {
                const alert = yield this.alertController.create({
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
                yield alert.present();
            }));
        });
    }
    ngOnDestroy() {
        return __awaiter(this, void 0, void 0, function* () {
            this.backButtonSubscription.unsubscribe();
        });
    }
    onLogout() {
        this.storage.remove('current_user');
        this.router.navigate(['login']);
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleLightContent();
            this.splashScreen.show();
            this.splashScreen.hide();
        });
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.scss']
    }),
    __metadata("design:paramtypes", [Platform,
        SplashScreen,
        StatusBar,
        Storage,
        Router,
        AlertController])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map