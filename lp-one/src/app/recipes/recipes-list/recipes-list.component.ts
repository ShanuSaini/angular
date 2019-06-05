import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe-model';
import { RecipesServiceService } from '../recipes-service.service';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent implements OnInit {

  @Output() emittedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[];

  constructor(private recipeService: RecipesServiceService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  emmitToRecipeDetail(recipe: Recipe){
    this.emittedRecipe.emit(recipe);
  }

}
