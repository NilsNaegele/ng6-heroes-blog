import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../models/hero';
import { HeroService } from '../../hero.service';
import { GlobalService } from '../../services/global.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  searchTerm: string;

  constructor(private heroService: HeroService,
              private globalService: GlobalService,
              private router: Router) {
                this.globalService.searchTerm.subscribe((term) => this.searchTerm = term);
              }

  ngOnInit() {
    this.getHeroes();
    if (this.router.url.includes('heroes')) {
      this.globalService.searchTerm.next('');
    }
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  getHeroImage(hero: Hero) {
    if (hero.thumbnail) {
      return hero.thumbnail;
    } else {
      return '../../../assets/images/placeholder.jpeg';
    }
  }

}
