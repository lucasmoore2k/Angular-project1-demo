import { Component } from '@angular/core';
import { IngredientsModel } from '../utils/ingredients.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent {
  ingredients: IngredientsModel[] = [
    new IngredientsModel('Spaguetti',400, 'g'),
    new IngredientsModel('Tomatoes',5, 'un')
  ];

  constructor() {

  }
}
