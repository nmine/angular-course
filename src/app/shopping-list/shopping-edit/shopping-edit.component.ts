import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {Recipe} from '../../recipes/recipe-list/recipe.model';
import {ShoppingListService} from '../shopping.list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput')
  nameInput: ElementRef;
  @ViewChild('amountInput')
  amountInput: ElementRef;

  constructor(private shoppingService: ShoppingListService) {
  }

  ngOnInit(): void {
  }

  onAddItem() {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    this.shoppingService.addIngredient(
      new Ingredient(name, amount));
  }
}
