import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-model';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'Boondi Ke Ladoo', 
      'Boondi Ke Ladoo Recipe', 
      'assets/images/recipes/boondi-ke-ladoo.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
