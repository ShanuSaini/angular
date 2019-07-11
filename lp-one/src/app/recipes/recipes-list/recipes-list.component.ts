import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-model';
import { RecipesServiceService } from '../recipes-service.service';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipesServiceService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
  }

}
