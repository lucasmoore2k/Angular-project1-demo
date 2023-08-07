import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
  @Input() recipe: RecipeModel;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor(){
    this.recipe = new RecipeModel('Fettuccine', 'Recipe of fettuccine with tomatoes', 'https://goodoldvegan.com/wp-content/uploads/2021/08/Vegan-Fettucine-Alfredo.jpg')
  }

  ngOnInit(): void {
    
  }

  onSelected(){
    this.recipeSelected.emit()
  }
}
