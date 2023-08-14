import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipeServices } from 'src/app/services/recipe.services';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
  @Input() recipe: RecipeModel =  new RecipeModel('', '', '');;


  constructor(private recipeService: RecipeServices){
  }

  ngOnInit(): void {
    this.recipeService.getRecipes()
  }

  onSelected(recipe: RecipeModel){
    this.recipeService.onSelect(recipe)
  }

}
