import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { GlobalService } from '../../services/global.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  user: Observable<firebase.User>;
  currentAdmin: boolean;

  constructor(private db: AngularFireDatabase,
              private afAuth: AngularFireAuth,
              private router: Router,
              private globalService: GlobalService,
              private snackBar: MatSnackBar) {
                this.user = this.afAuth.authState;
              }

  ngOnInit() {
    this.currentAdmin = false;
    this.user.subscribe(currentUser => {
      if (!currentUser) {
        this.router.navigateByUrl('login');
        return;
      }
        if (currentUser.email === 'nilsholger1307@gmail.com') {
        this.currentAdmin = true;
        this.globalService.admin.next(currentUser);
        const snackBar = this.snackBar.open('Welcome Admin!', 'OK!', {
          duration: 3000
        });
      } else {
        this.router.navigateByUrl('');
        const snackBar = this.snackBar.open('You are not an authorized Administrator', 'OK!', {
          duration: 3000
        });
      }
    }, (err) => {
      console.log('Permission error', err);
      this.router.navigateByUrl('');
      const snackBar = this.snackBar.open('You are not an authorized Administrator', 'OK!', {
        duration: 3000
      });
    });
  }

  logOut() {
    this.afAuth.auth.signOut();
  }

}
