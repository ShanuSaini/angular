import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeDetail: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
