import {Recipe} from './recipe-list/recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A test Recipe', 'Description test', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcookieandkate.com%2Fcrispy-apple-kohlrabi-salad-recipe%2F&psig=AOvVaw2YTeZFuaSkt2tarvVih-_G&ust=1633606670893000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCQ7J_ZtfMCFQAAAAAdAAAAABAP',
      [
        new Ingredient('test ingredient', 2),
        new Ingredient('test ingredient2', 3)
      ]),
    // tslint:disable-next-line:max-line-length
    new Recipe('A other Recipe', 'Description test2', 'https://www.google.com/url?https://www.google.com/url?sa=i&url=https%3A%2F%2Fcookieandkate.com%2Fcrispy-apple-kohlrabi-salad-recipe%2F&psig=AOvVaw2YTeZFuaSkt2tarvVih-_G&ust=1633606670893000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCQ7J_ZtfMCFQAAAAAdAAAAABAP',
      [
        new Ingredient('test other ingredient', 2),
        new Ingredient('test other ingredient2', 3)
      ])
  ];

  getRecipe() {
    return this.recipes.slice();
  }
}