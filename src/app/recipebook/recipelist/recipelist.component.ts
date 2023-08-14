import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { RecipeModel } from './recipe.model';
import { RecipeServices } from 'src/app/services/recipe.services';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})

export class RecipelistComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  recipes: RecipeModel[] = [];

  constructor(private recipeServices: RecipeServices){
  }

  ngOnInit(){
    this.recipes = this.recipeServices.getRecipes()
  }

  onRecipeSelected(recipe: RecipeModel){
    this.recipeWasSelected.emit(recipe)
  }
}
