import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  auth: Observable<firebase.User>;

  constructor(private router: Router, private afAuth: AngularFireAuth) {
    this.auth = afAuth.authState;
  }

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      this.auth.subscribe((state) => {
        if (state) {
          return resolve(true);
        } else {
          this.router.navigate(['/login']);
          return resolve(false);
        }
      });
    });
  }

}
