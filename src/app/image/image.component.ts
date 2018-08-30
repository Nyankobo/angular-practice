import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';
import { Stuff } from '../stuff';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  stuff: Stuff;

  //INJECT SERVICES
  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

    ngOnInit() {
      console.log("hero:", this.stuff);
      this.getStuffItem();
  
    }
  
    getStuffItem(): void {
      console.log(window.location);
      const id = +this.route.snapshot.paramMap.get('desc');
  
  
      console.log(id);
  
      this.heroService.getStuffItem(id)
      .subscribe(a => this.stuff = a);
    }
  
    goBack(): void {
      this.location.back();
    }

}
