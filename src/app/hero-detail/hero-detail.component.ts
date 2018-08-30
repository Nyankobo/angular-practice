import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
/**/

//import { Hero } b/c the template binds to the component's hero property (type Hero)
//import Input b/c the Hero property will be bound to the HeroesComponent 
//              <app-hero-detail [hero]="selectedHero"></app-hero-detail>

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  //INJECT SERVICES
  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit() {
    console.log("hero:", this.hero);

    this.getHero();

  }

  //IN ORDER TO RETRIEVE THE HERO TO DISPLAY:
/* Get the route that created it,
Extract the id from the route
Acquire the hero with that id from the server via the HeroService */

  getHero(): void {
    //This is a static image of the route info shortly after the component was created:
    //    paramMap is a dictionary of route parameter values extracted from the URL
    //    the 'id' key returns the id of the hero to fetch
    //    route parameters are always STRINGS; +converts string to a # (which is what a hero Id is)
    const id = +this.route.snapshot.paramMap.get('id');

    console.log(id);

    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
