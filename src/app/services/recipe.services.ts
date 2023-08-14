import { RecipeModel } from "../recipebook/recipelist/recipe.model";
import { EventEmitter,Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })

export class RecipeServices {
    recipeSelected = new EventEmitter<RecipeModel>();

    private recipes: RecipeModel[] = [
        new RecipeModel('Fettuccine', 'Recipe of fettuccine with tomatoes', 'https://goodoldvegan.com/wp-content/uploads/2021/08/Vegan-Fettucine-Alfredo.jpg')
      ];

      getRecipes(){
        return this.recipes.slice()
      }

      onSelect(recipe: RecipeModel){
        this.recipeSelected.emit(recipe)
      }
}