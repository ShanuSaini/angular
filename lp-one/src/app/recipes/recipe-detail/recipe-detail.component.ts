import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe-model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShopingListService } from 'src/app/shoping-list/shoping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeDetail: Recipe;

  constructor(private slService: ShopingListService) { }

  ngOnInit() {
  }

  toShopingList(ingredients: Ingredient[]){
    for(let ingredient of ingredients){
      this.slService.addIngredient(ingredient);
    }
  }

}
