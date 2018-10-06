import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer, Title, Meta } from '@angular/platform-browser';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { MatSnackBar } from '@angular/material';

import { Hero } from '../../models/hero';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  heroContent: any;
  hero: any;
  safeUrl;

  constructor(private db: AngularFireDatabase,
              private afAuth: AngularFireAuth,
              private snackBar: MatSnackBar,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private sanitizer: DomSanitizer,
              private title: Title,
              private meta: Meta,
              private globalService: GlobalService) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroContent = this.db.list('/heroes', ref => ref.orderByChild('id').equalTo(id));
    this.heroContent.valueChanges().subscribe((h) => {
      if (h[0].published) {
        this.hero = h[0];
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.hero.video);
        this.title.setTitle(this.hero.title);
        this.meta.updateTag({ content: 'View hero details for ' + this.hero.title}, 'name= \'description\'');
        const snackBarRef = this.snackBar.open(`Hero: ${this.hero.title} display`, 'View Hero', {
          duration: 3000
        });
      } else {
        this.hero = {
          title: 'Hero not found',
          description: ''
        };
      }
    });
  }

  goBack() {
    this.location.back();
  }

}
