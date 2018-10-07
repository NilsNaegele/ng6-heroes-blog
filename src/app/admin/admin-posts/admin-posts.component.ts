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
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.scss']
})
export class AdminPostsComponent implements OnInit {

  posts: Observable<any>;
  post: AngularFireObject<any>;
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
                this.posts = this.db.list('/posts').snapshotChanges();
                this.storageRef = this.af.storage().ref();

                this.globalService.admin.subscribe((a) => {
                  this.currentAdmin = a;
                });
              }
  onChange(e: any, key: string) {
    this.post = this.db.object('/posts/' + key);
    if (e.checked) {
      this.post.update({published: true});
    } else {
      this.post.update({published: false});
    }
  }

  deletePost(post: any) {
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
     this.selectedOption = result;
     if (this.selectedOption === 'delete') {
       this.db.object('/posts/' + post.key).remove();
       const snackBarRef = this.snackBar.open('Post deleted', 'OK!', {
         duration: 300
       });
     }
    });
  }

  ngOnInit() {
  }

}
