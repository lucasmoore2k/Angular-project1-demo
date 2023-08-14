import { Component,OnInit } from '@angular/core';
import { IngredientsModel } from '../utils/ingredients.model';
import { ShoppingService } from '../services/shopping.services';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})


export class ShoppinglistComponent implements OnInit {
  ingredients: IngredientsModel[] = [
    new IngredientsModel('Spaguetti',400, 'g'),
    new IngredientsModel('Tomatoes',5, 'un')
  ];

  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients()
  }



  onIngredientsAdded(ingredient: IngredientsModel){
    this.ingredients.push(ingredient)
  }

}
