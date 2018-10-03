import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

import { HeroService } from '../../hero.service';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  hero: Hero;
  safeUrl;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private sanitizer: DomSanitizer,
              private heroService: HeroService) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => {
      this.hero = hero;
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.hero.video);
    });
  }

  goBack() {
    this.location.back();
  }

}
