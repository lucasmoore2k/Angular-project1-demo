import { Injectable } from "@angular/core";
import { IngredientsModel } from "../utils/ingredients.model";

@Injectable({
    providedIn: 'root'
  })

export class ShoppingService {
    private ingredients: IngredientsModel[] = [
        new IngredientsModel('Spaguetti',400, 'g'),
        new IngredientsModel('Tomatoes',5, 'un')
      ];

      getIngredients(){
        return this.ingredients.slice();
      }
    
}