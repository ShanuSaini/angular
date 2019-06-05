import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShopingListService } from '../shoping-list.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html'
})
export class ShopingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;

  private ingredientAdded: Ingredient;

  constructor(private slService: ShopingListService) { }

  ngOnInit() {
  }

  addIngredient(){
    const ingredientToBeAdded = new Ingredient(
      this.nameInputRef.nativeElement.value, 
      this.amountInputRef.nativeElement.value
    );
    this.slService.addIngredient(ingredientToBeAdded);
  }

}
