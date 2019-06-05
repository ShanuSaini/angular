import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShopingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient( 'Flour 250g', 10 ),
    new Ingredient( 'Semolina 50g', 15 ),
    new Ingredient( 'Sugar 400g', 20 ),
    new Ingredient( 'Water 2 Liters', 0 ),
    new Ingredient( 'Yellow Food Color', 10 )
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
