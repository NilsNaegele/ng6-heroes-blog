import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
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
