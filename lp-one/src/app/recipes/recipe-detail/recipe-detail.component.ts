import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShopingListService } from 'src/app/shoping-list/shoping-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesServiceService } from '../recipes-service.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {

  id: number;
  recipeDetail: Recipe;

  constructor(private slService: ShopingListService,
    private route: ActivatedRoute, private recipeService: RecipesServiceService) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params
    .subscribe(
      (params: Params) => { 
        this.id = +params['id']; 
        this.recipeDetail = this.recipeService.getRecipe(this.id);
      }
    );
  }

  toShopingList(ingredients: Ingredient[]){
    for(let ingredient of ingredients){
      this.slService.addIngredient(ingredient);
    }
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
  }

}
