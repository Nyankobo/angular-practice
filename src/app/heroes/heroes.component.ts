import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';

//Always import Component, & annotate the class w/ @Component

//@Component is a decorator function that specifies the Angular metadata for the component.
//3 Metadata properties:
//    selector = component's css element selector
//    templateUrl = location of component's template file
//    styleUrls = location of component's private css styles

//HERE:
// app-heroes matches the name of the HTML element identifying the component w/in a parent component's template
// like a css selector   (ex)  a {  }
// To display, add to template of the SHELL (AppComponent HTML)


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

/*
Styles and stylesheets identified in @Component metadata are scoped 
to that specific component. The heroes.component.css styles apply 
only to the HeroesComponent and don't affect the outer HTML or the 
HTML in any other component.
*/

//EXPORT so you can iMPORT elsewhere
export class HeroesComponent implements OnInit {

  //Add heroes property to this class -- exposes heroes for binding
  heroes: Hero[];

  //inject the SERVICE into the constructor
  //    This param (1) defines a provite heroService property, and 
  //              (2) identifies it as the injection site for HeroService
  //        When Angular creates a HeroesComponent, 
  //        the Dependency Injection system sets the heroService 
  //        parameter to the singleton instance of HeroService
  constructor(private heroService: HeroService) { }


  // ------ AFTER ROUTING SET UP, THESE NO LONGER NEEDED
  //on init, this is UNDEFINED, so add logic to only display if not undefined
  // selectedHero: Hero;

  //onSelect method-- assigns the clicked hero to the selectedHero property
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   console.log("On select: ", this.selectedHero);
  // }
// ---------


  //to retrieve Heroes:
  //    this should have an asynchronous signature (a callback, return a Promise, or an Observable...)
  //    Here we will return an Obsevable -- when using the HttpClient.get() method, it returns an Observable
  //          Observable is one of the key classes in the RxJS library.
  /*
          In a later tutorial on HTTP, you'll learn that Angular's HttpClient methods return RxJS Observables. 
          In this tutorial, you'll simulate getting data from the server with the RxJS of() function.
  */

  //LIFECYCLE HOOK -- Angular calls ngOnInit after creating a component. Initalization logic would go here.
  ngOnInit() {

    //call on initiation, to retrieve heroes from service:
    this.getHeroes();
  }

  //retrieve heroes from service:
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);

      //"RxJS Library" -- Observable one of the key classes; returns an Observable -- 'of' function comes from this

      //Observable.subscribe()
      //When Service makes requests of remote server, has to do ASYNC. So:
      //  .subscribe) waits for the Observable to emit the array of heroes, and passes
      //  the array to the callback, and sets the heroes property
  }


}
