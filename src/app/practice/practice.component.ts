import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Stuff } from '../stuff';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})

export class PracticeComponent implements OnInit {

  //defines hero property
  stuffies: Stuff[] = [];

  //inject heroService
  constructor(private heroService: HeroService) { }

  //on lifecycle hook ngOnInit, calls getHeroes
  ngOnInit() {
    this.getStuffies();
  }

  getStuffies(): void {
    this.heroService.getStuffs()
    .subscribe(st => this.stuffies = st);
  }

}