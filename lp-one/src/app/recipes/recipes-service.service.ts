import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe-model';


@Injectable({
  providedIn: 'root'
})
export class RecipesServiceService {
 
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Boondi Ke Ladoo', 
      'Boondi Ke Ladoo Recipe', 
      'assets/images/recipes/boondi-ke-ladoo.jpg'
    ),
    new Recipe(
      'Boondi Ke Ladoo 2', 
      'Boondi Ke Ladoo Recipe 2', 
      'assets/images/recipes/boondi-ke-ladoo.jpg'
    )
  ];

  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }

  setRecipeSelected(){
    
  }

}
