import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { GlobalService } from './services/global.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng6-heroes-blog';
  user: Observable<firebase.User>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private db: AngularFireDatabase,
              private afAuth: AngularFireAuth,
              private snackBar: MatSnackBar,
              private globalService: GlobalService) {
                this.user = afAuth.authState;
                this.user.subscribe((currentUser) => {
                      this.globalService.user.next(currentUser);
                      if (currentUser) {
                      const snackBarRef = this.snackBar.open(`Welcome hero: ${currentUser.displayName}`, 'View Hero', {
                        duration: 2000
                      });
                    }
                });
              }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
