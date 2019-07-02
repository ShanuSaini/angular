import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShopingListService } from '../shoping-list.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html'
})
export class ShopingEditComponent implements OnInit {

  private ingredientAdded: Ingredient;

  constructor(private slService: ShopingListService) { }

  ngOnInit() {
  }

  onAddItem(form){
    const name = form.value.name;
    const value = form.value.amount;
    console.log(value);
    console.log(name);
    const ingredientToBeAdded = new Ingredient(
      name, value
    );
    this.slService.addIngredient(ingredientToBeAdded);
  }

}
