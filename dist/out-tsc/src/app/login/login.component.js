import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Facebook } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
let LoginComponent = class LoginComponent {
    constructor(googlePlus, fb, formBuilder, toastController, storage, router) {
        this.googlePlus = googlePlus;
        this.fb = fb;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.storage = storage;
        this.router = router;
        this.submitted = false;
        this.username_pre = "nyros";
        this.password_pre = "12345678";
        this.login_true = false;
        this.data = "";
        this.userData = '';
        this.error = false;
        this.err_data = "";
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
    get f() { return this.loginForm.controls; }
    onLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            this.submitted = true;
            if (this.loginForm.invalid) {
                console.log("failed");
                return;
            }
            else {
                if (this.username_pre === this.loginForm.controls['username'].value && this.password_pre === this.loginForm.controls['password'].value) {
                    this.storage.set('current_user', true);
                    this.router.navigate(['']);
                }
                else {
                    const toast = yield this.toastController.create({
                        message: 'Invalid Credentials',
                        duration: 2000
                    });
                    toast.present();
                }
            }
        });
    }
    fbLogin() {
        console.log("TTTTTTTT");
        this.fb.login(['public_profile', 'email'])
            .then((res) => {
            console.log('Logged into Facebook!', res);
            this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
                var y = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] };
                this.userData = JSON.stringify(y);
            });
            if (res) {
                this.storage.set('current_user', true);
                this.storage.set('provider', "facebook");
                this.router.navigate(['']);
                // this.login_true = true
                // var x = JSON.stringify(res)
                // this.data  = x
            }
        })
            .catch(e => console.log('Error logging into Facebook', e));
        this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    }
    GoogleLogin() {
        console.log("Google");
        this.googlePlus.login({
            "scopes": '',
            'webClientId': '59722761487-r4b90qcek8ttn1c1fjfv787no94bpjjn.apps.googleusercontent.com',
            'offline': true
        })
            .then(res => {
            if (res) {
                // this.storage.set('current_user', true);
                // this.storage.set('provider', "google");
                // this.router.navigate([''])
                this.login_true = true;
                var x = JSON.stringify(res);
                this.data = x;
            }
        })
            .catch(err => {
            this.login_true = true;
            this.error = true;
            var x = JSON.stringify(err);
            this.data = x;
            this.err_data = x;
        });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css'],
    }),
    __metadata("design:paramtypes", [GooglePlus,
        Facebook,
        FormBuilder,
        ToastController,
        Storage,
        Router])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map