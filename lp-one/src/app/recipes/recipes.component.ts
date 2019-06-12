import { Component, OnInit } from '@angular/core';
import { RecipesServiceService } from './recipes-service.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  providers: [RecipesServiceService]
})
export class RecipesComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  }
  
}
