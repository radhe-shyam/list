import { Component } from "@angular/core";
import { Ingredient } from '../shared/Ingredient.model';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
    ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('tomato', 10)
    ];

}