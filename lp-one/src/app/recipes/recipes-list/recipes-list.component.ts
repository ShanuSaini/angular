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
      'https://justhindi.in/recipes/wp-content/uploads/2017/04/boondi-ke-ladoo.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
