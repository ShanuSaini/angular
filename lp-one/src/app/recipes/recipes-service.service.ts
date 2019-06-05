import { Injectable } from '@angular/core';
import { Recipe } from './recipe-model';

@Injectable({
  providedIn: 'root'
})
export class RecipesServiceService {

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

}
