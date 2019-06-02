import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html'
})
export class ShopingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient( 'Flour 250g', 10 ),
    new Ingredient( 'Semolina 50g', 15 ),
    new Ingredient( 'Sugar 400g', 20 ),
    new Ingredient( 'Water 2 Liters', 0 ),
    new Ingredient( 'Yellow Food Color', 10 )
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient){
    this.ingredients.push(ingredient);
  }

}
