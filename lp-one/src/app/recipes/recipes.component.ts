import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-model';
import { RecipesServiceService } from './recipes-service.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  providers: [RecipesServiceService]
})
export class RecipesComponent implements OnInit {

  passRecipe: Recipe;

  constructor(private recipeService: RecipesServiceService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.passRecipe = recipe;
      }
    );
  }
  
}
