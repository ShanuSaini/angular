import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { ShopingListService } from './shoping-list.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html'
})
export class ShopingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private slService: ShopingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe(
      (ingrediens: Ingredient[]) => {
        this.ingredients = ingrediens;
      }
    );
  }

}
