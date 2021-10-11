import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe-list/recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  private indexRecipe: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.indexRecipe = params['id'];
        this.recipe = this.recipeService.getRecipe(this.indexRecipe);
      }
    );
  }

  addIngredientToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['../edit', this.indexRecipe, 'edit'], {relativeTo: this.route});
  }
}
