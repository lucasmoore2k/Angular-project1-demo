import { Component, OnInit } from '@angular/core';
import { RecipeModel } from './recipelist/recipe.model';

@Component({
  selector: 'app-recipebook',
  templateUrl: './recipebook.component.html',
  styleUrls: ['./recipebook.component.css']
})
export class RecipebookComponent implements OnInit {
  selectedRecipe: RecipeModel;

  constructor(){
    this.selectedRecipe = new RecipeModel('','','')
  }

  ngOnInit(){

  }
}
