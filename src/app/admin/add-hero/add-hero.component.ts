import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MatSnackBar, MatDialog, MatDialogRef } from '@angular/material';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase/app';

import { GlobalService } from '../../services/global.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {

  heroes: AngularFireList<any>;
  categories: Observable<any>;
  ogCategory: string;
  newTitle: string;
  newThumbnail: string;
  newDescription: string;
  newPower: number;
  newPublished: boolean;
  newVideo: string;
  newCategory: any;
  newWeight: number;
  currentAdmin: any;
  editMode: boolean;
  heroKey: string;
  storageRef: any;
  file: any;
  imageUrl: any;
  currentHero: AngularFireObject<any>;
  currentModeratedHeroes: AngularFireList<any>;
  entityObject: any;
  dialogRef: MatDialogRef<any>;
  selectedOption: string;
  awaitingApproval: string;


  constructor(private af: FirebaseApp,
              private db: AngularFireDatabase,
              private snackBar: MatSnackBar,
              private globalService: GlobalService,
              private router: Router,
              private route: ActivatedRoute,
              private fb: FirebaseApp,
              private dialog: MatDialog) {
                this.newPublished = false;
                this.heroes = db.list('/heroes');
                // this.categories = db.list('/categories');

                this.globalService.admin.subscribe((admin) => {
                        this.currentAdmin = admin;
                });
                this.storageRef = af.storage().ref();
              }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params && params.key) {
        this.editMode = true;
        this.heroKey = params.key;
        this.currentHero = this.db.object('/heroes/' + params.key);
        this.currentHero.valueChanges().subscribe((h: any) => {
          this.newTitle = h.title;
          this.newDescription = h.newDescription;
          this.newPower = h.power;
          this.newPublished = h.published;
          this.newVideo = h.video;
          if (h.thumbnail) {
            this.imageUrl = h.thumbnail;
            this.newThumbnail = h.thumbnail;
          }
        });
      } else {
        this.newTitle = null;
        this.newDescription = null;
        this.newPower = 0;
        this.newPublished = false;
        this.newVideo = null;
        this.newThumbnail = null;
      }
    });
  }

  handleFiles(e) {
    this.file = e.srcElement.files[0];
    if (this.file.size > 2097152) {
      const snackBarRef = this.snackBar.open('Images must be 2 MB or less', 'OK!', {
        duration: 3000
      });
    } else {
      this.uploadImage();
    }
  }

  uploadImage() {
    console.log('upload image');
    const storageRef = firebase.storage().ref();
    const path = Date.now().toString() + '-' + this.file.name;
    const imageRef = storageRef.child('/heroes/' + path);
    const me = this;
    imageRef.put(this.file).then((snapshot) => {
          const snackBarRef = this.snackBar.open('Image uploaded', 'OK!', {
                duration: 3000
          });
          this.storageRef.child('/heroes/' + path).getDownloadURL().then(function(url) {
                  me.imageUrl = url;
                  me.newThumbnail = url;
          });
    });
  }

  deleteImage() {
    this.newThumbnail = null;
  }

  deleteImageUrl() {
    const storage = firebase.storage();
    const imageRef = storage.refFromURL(this.imageUrl);

    const me = this;
    imageRef.delete().then(function() {
        me.imageUrl = null;
    }).catch(function(error) {
      console.log('error', error);
    });
  }

  validateFields(title, description, power) {
      if (!title) {
        const snackBarRef = this.snackBar.open('You must add a title for this hero', 'OK!', {
          duration: 3000
        });
      } else if (!description) {
        const snackBarRef = this.snackBar.open('You must add a description for this hero', 'OK!', {
          duration: 3000
        });
      } else if (!power) {
        const snackBarRef = this.snackBar.open('You must add a power for this hero', 'OK!', {
          duration: 3000
        });
      }
  }

  addHero(newTitle: string, newPower: string, newDescription: string, newPublished: boolean, newVideo: string) {

    if (!newPublished) {
      newPublished = false;
    }

    if (newTitle && newPower && newDescription && this.currentAdmin.uid) {
      const heroObject = {
          id: this.globalService.slugify(newTitle),
          title: newTitle,
          description: newDescription,
          thumbnail: this.newThumbnail ? this.newThumbnail : null,
          power: newPower,
          published: newPublished,
          video: newVideo
      };

      this.db.list('/heroes').push(heroObject);
      const snackBarRef = this.snackBar.open('Hero added to database', 'OK!', {
        duration: 3000
      });
    }
    this.validateFields(newTitle, newDescription, newPower);
  }

  deleteHero(event) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
          this.selectedOption = null;
          if (this.selectedOption === 'delete') {
            this.db.object('/heroes/' + this.heroKey).remove();
            const snackBarRef = this.snackBar.open('Hero deleted', 'OK!', {
              duration: 3000
            });
            this.router.navigateByUrl('admin/heroes');
          }
    });
  }

}
