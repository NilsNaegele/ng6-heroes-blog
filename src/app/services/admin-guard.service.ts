import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  currentUser: any;

  constructor(private router: Router,
              private db: AngularFireDatabase,
              private globalService: GlobalService) {
                this.currentUser = this.globalService.user.getValue();
              }

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      if (this.currentUser) {
        this.db.list('/admins',
              ref => ref.orderByChild('email').equalTo(this.currentUser.email)).valueChanges()
              .subscribe((u: any) => {
                if (u[0] && (u[0].role === 'super-admin' || u[0].role === 'admin')) {
                  return resolve(true);
                } else {
                  this.router.navigate(['/admin']);
                  return resolve(false);
                }
              });
      }
    });
  }

}
