import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
let AuthGuard = class AuthGuard {
    constructor(router, storage) {
        this.router = router;
        this.storage = storage;
    }
    canActivate(next, state) {
        return this.storage.get('current_user').then(res => {
            if (res === true) {
                return true;
            }
            else {
                this.router.navigate(['login']);
            }
        });
    }
};
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [Router, Storage])
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map