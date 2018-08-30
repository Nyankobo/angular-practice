import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Stuff } from './stuff';
import { HEROES } from './mock-heroes';
import { STUFFS } from './mock-stuff';
import { Observable, of } from 'rxjs';
//import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

//Must PROVIDE the HeroService in the dependency injection system 
//   BEFORE Angular can inject it into the HeroesComponent

//Can provide the HeroService several ways:
//    in the HeroesComponent, in the AppComponent, in the AppModule..... pros & cons for each
//    This tutorial adds it to the AppModule:
//      CLI:  ng generate service hero --module=app

@Injectable({
  providedIn: 'root',
})

export class HeroService {

  //Injecting message service into this service  (service-in-service)
  constructor(private messageService: MessageService) { }
  
  //RETURN HEROES:
  getHeroes(): Observable<Hero[]> {
    //Todo:  send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');

    return of(HEROES);
    //of(HEROES) returns an Observable<Hero[]>, which emits a single value (array of mock heroes)
  }

  getHero(id: number): Observable<Hero> {
    //TODO:  send message _after_ fetching the hero

    //Backticks define template literal
    this.messageService.add(`HeroService: fetched hero id =${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  getStuffs(): Observable<Stuff[]> {
    return of(STUFFS);
  }

  getStuffItem(id: number): Observable<Stuff> {

    console.log(id);

    var eh = of(STUFFS.find(s => s.id === id));

    console.log(eh);

    return eh;
  }
}

/*
@Injectable() decorator tells Angular that this service MIGHT itself have injected dependencies
Maybe doesn't have now, but will soon!


*/
