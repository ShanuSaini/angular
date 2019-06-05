import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe-model';
import { RecipesServiceService } from '../../recipes-service.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipesServiceService) { }

  ngOnInit() {
    
  }

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
