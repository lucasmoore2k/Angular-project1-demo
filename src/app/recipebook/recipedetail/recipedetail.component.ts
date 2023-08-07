import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../recipelist/recipe.model';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit{
  @Input() recipe: RecipeModel;

  constructor(){
    this.recipe = new RecipeModel('', '', '')
  }

  ngOnInit(): void {
    
  }
}
