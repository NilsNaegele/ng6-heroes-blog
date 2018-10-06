import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { Observable } from 'rxjs';

import { Hero } from '../../models/hero';
import { HeroService } from '../../hero.service';
import { GlobalService } from '../../services/global.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Observable<Hero[]>;
  searchTerm: string;

  constructor(private db: AngularFireDatabase,
              private globalService: GlobalService,
              private router: Router,
              private snackBar: MatSnackBar,
              private title: Title,
              private meta: Meta) {
                this.heroes = db.list('/heroes',
                     ref => ref.orderByChild('power').limitToLast(20)).valueChanges();
                    //  const snackBarRef = this.snackBar.open(`Heroes display`, 'View Heroes', {
                    //   duration: 2000
                    // });
                this.globalService.searchTerm.subscribe((term) => this.searchTerm = term);
              }

  ngOnInit() {
    this.title.setTitle('Heroes');
    this.meta.updateTag({ content: 'View all heroes'}, 'name=\'description\'');
    if (this.router.url.includes('heroes')) {
      this.globalService.searchTerm.next('');
    }
  }

  getHeroImage(hero: Hero) {
    if (hero.thumbnail) {
      return hero.thumbnail;
    } else {
      return '../../../assets/images/placeholder.jpeg';
    }
  }

}
