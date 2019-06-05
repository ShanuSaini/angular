import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe-model';
import { Ingredient } from '../shared/ingredient.model';


@Injectable({
  providedIn: 'root'
})
export class RecipesServiceService {
 
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Boondi Ke Ladoo', 
      'Boondi Ke Ladoo Recipe', 
      'assets/images/recipes/boondi-ke-ladoo.jpg',
      [
        new Ingredient( 'Flour 250g', 10 ),
        new Ingredient( 'Semolina 50g', 15 ),
        new Ingredient( 'Sugar 400g', 20 ),
        new Ingredient( 'Water 2 Liters', 0 ),
        new Ingredient( 'Yellow Food Color', 10 )
      ]
    ),
    new Recipe(
      'Boondi Ke Ladoo 2', 
      'Boondi Ke Ladoo Recipe 2', 
      'assets/images/recipes/boondi-ke-ladoo.jpg',
      [
        new Ingredient( 'Flour 250g', 10 ),
        new Ingredient( 'Semolina 50g', 15 ),
        new Ingredient( 'Sugar 400g', 20 ),
        new Ingredient( 'Water 2 Liters', 0 ),
        new Ingredient( 'Yellow Food Color', 10 )
      ]
    )
  ];

  constructor() { }

  getRecipes(){
    return this.recipes.slice();
  }

  setRecipeSelected(){
    
  }

}
