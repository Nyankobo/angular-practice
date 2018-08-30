//The imports at the top of the array are JavaScript import statements
// while the imports array within @NgModule is Angular specific. 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HeroService } from './hero.service';
import {UserService} from './user.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

//imported for routing
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HighlightDirective } from './highlight.directive';
import { PracticeComponent } from './practice/practice.component';
import { ImageComponent } from './image/image.component';

/*
An NgModule bounds declarable classes only. Declarables are the only classes that matter to the Angular compiler.
Instead of defining all member classes in one giant file as in a JavaScript module, you list the module's classes 
in the @NgModule.declarations list.
An NgModule can only EXPORT the <declarable classes it owns> or <imports from other modules>. 
Unlike JavaScript modules, an NgModule can EXTEND the ENTIRE app with services, by adding PROVIDERS 
to the @NgModule.providers list.
*/

//WHUT NgModule DOES: -----------
//The @NgModule class decorator imports array tells Angular what other 
//          NgModules the current module needs
// -- NgModule metadata (the stuff in the class) - How app parts FIT TOGETHER
// -- How to compile a component's TEMPLATE, create injector @ runtime, etc.
// -- You 'bootstrap' [ INITIALIZE ] this module to launch the app.

@NgModule({
  //Defines which components belong to this module. take only: 
  //      components, 
  //      directives (ex. DOM manip, styles: NgFor, NgIf, NgStyle),  -- see ElementRef, HostListener imports, HighlightDirective example
  //      pipes
  // Declare declarables only once in an NgModlue -- import {} anywhere else it's needed
  /* SUMMARY to create/use one of these:
        1. export it from wherever it was written
        2. import {} it where you wanna use it (where the @NgModule is)
        3. add it in the @NgModule declarations: [] array

  */
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HighlightDirective,
    PracticeComponent,
    ImageComponent      //directive
    //must declare every component in 1 @NgModule declarations, to use it.
  ],
  imports: [
    //LIST OF EXTERNAL MODULES THAT APP NEEDS - references only
    //      ex. DOM rendering, santitization, location
    //ONLY EXISTS in @NgModule metadata obj
    BrowserModule,
    FormsModule,
    AppRoutingModule
    //---> a component template can reference another component/directive/pipe
    //      when the referenced class is declared in this module, or imported from another module  (???)
  ],
  //Generally, provide services the whole app needs in the 
  //   root module, and scope services by providing them in lazy loaded modules.
  providers: [
    //Providers = SERVICE PROVIDERS, array tells Angular to create a single, shared 
    //    instance of HeroService & inject into any class that requests it
    //    -> inject into the CONSTRUCTOR of the requesting class
    HeroService,
    MessageService,
    UserService
    //----> Available APP-WIDE <----
    //----> scoping, and lazy loading, I think ? <---
    // router works @ level, so have to put it there
  ],
//PROVIDERS = services:
// Can add a providers array to an @Component
//    allows EAGER loading, but use is limited to that component

//ROOT COMPONENT, aka entryComponent -- inserted into index.html host pg
  bootstrap: [AppComponent]
  // - each bootstrapped component is the 'base' of its tree-of-components
  // - most apps have only (1) tree, and bootstrap (1) root component
  //              --- this one ---
})
export class AppModule { }

/*
Register a provider with a component when you must limit 
a service instance to a component and its component tree, 
that is, its child components. For example, a user editing 
component, UserEditorComponent, that needs a private copy 
of a caching UserService should register the UserService 
with the UserEditorComponent. Then each new instance of 
the UserEditorComponent gets its own cached service instance.*/