import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog, MatSnackBar, MatDialogRef } from '@angular/material';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

import { GlobalService } from '../../services/global.service';
import { Observable } from 'rxjs';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-admin-heroes',
  templateUrl: './admin-heroes.component.html',
  styleUrls: ['./admin-heroes.component.scss']
})
export class AdminHeroesComponent implements OnInit {

  heroes: Observable<any>;
  hero: AngularFireObject<any>;
  selectedOption: any;
  dialogRef: MatDialogRef<any>;
  storageRef: any;
  currentAdmin: any;

  constructor(private af: FirebaseApp,
              private db: AngularFireDatabase,
              private globalService: GlobalService,
              private router: Router,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) {
                this.heroes = this.db.list('/heroes', ref => ref.orderByChild('power').limitToLast(9999)).snapshotChanges();
                this.storageRef = this.af.storage().ref();

                this.globalService.admin.subscribe((a) => {
                  this.currentAdmin = a;
                });
              }
  onChange(e: any, key: string) {
    this.hero = this.db.object('/heroes/' + key);
    if (e.checked) {
      this.hero.update({published: true});
    } else {
      this.hero.update({published: false});
    }
  }

  deleteHero(hero: any) {
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
     this.selectedOption = result;
     if (this.selectedOption === 'delete') {
       this.db.object('/heroes/' + hero.key).remove();
       const snackBarRef = this.snackBar.open('Hero deleted', 'OK!', {
         duration: 300
       });
     }
    });
  }

  ngOnInit() {
  }

}
