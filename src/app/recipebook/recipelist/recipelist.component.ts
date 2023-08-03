import { Component } from '@angular/core';
import { RecipeModel } from './recipe.model';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent {
  recipes: RecipeModel[] = [
    new RecipeModel('Fettuccine', 'Recipe of fettuccine with tomatoes', 'https://goodoldvegan.com/wp-content/uploads/2021/08/Vegan-Fettucine-Alfredo.jpg')
  ];

  constructor(){

  }
}
