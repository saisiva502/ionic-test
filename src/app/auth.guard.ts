import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router'
import { Storage } from '@ionic/storage';
import { Events } from '@ionic/angular'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	  constructor(private events:Events, private router: Router, private storage: Storage) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.storage.get('current_user').then(res=>{
      if (res === true) {
        this.storage.get('current_user_info').then(res=>{
          console.log('&&&&&')
          this.events.publish('name', JSON.parse(res))
        })
        return true;
      } else {
        this.router.navigate(['login'])
      }
    });
  }
}
