import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//will use these to configure the router
import { RouterModule, Routes } from '@angular/router';

//import the components you intend to navigate to:
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { PracticeComponent }  from './practice/practice.component';
import { ImageComponent }  from './image/image.component';

const routes: Routes = [
  //path = string that matches the URL in browser
  //component = component the router should create when navigating to this route
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'stuff/:desc', component: ImageComponent },

  //The colon (:) in the path indicates that :id is a placeholder for a specific hero id.
];
  //Routes tell the router which view to display when a user clicks a link/goes to a URL
  //  Two parts:
  //    1. path:  a string that matches the URL in the browser address bar
  //    2. component: the component that the router should create when navigating to this route

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    //- - - - - - - - - - - - - - - -
    //initialize the router AND start it listening for browser location changes:
    //        'forRoot() - method called b/c you configure the router @ the app's root level
    //                    SUPPLIES the service providers & directives needed for routing,
    //                    PERFORMS initial navigation based on current browser URL

    /*the root application module imports RouterModule.forRoot(...) and gets a 
    Router, whereas all route components import RouterModule which does not 
    include the Router. */
  ],
  //declarations: [], <-- don't generally declare Components in routing module

  exports: [RouterModule],
  //  Exported & available to components, used as <router-outlet>

})
export class AppRoutingModule { }
