import { Component, OnInit } from '@angular/core';
import {Ingredients} from '../shared/ingredients.model';
import { ShoppingListService } from './shoppingListService.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
Ingredients:Ingredients[];
  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit(): void {
    this.Ingredients=this.shoppingService.getShoppingList();
    this.shoppingService.ShoppingListEvet.subscribe(
      (i:Ingredients[])=>{
        this.Ingredients=i;

      }
    )
    // this.shoppingService.ShoppingListEvet.subscribe((ingredients:Ingredients)=>{
    //   this.shoppingService.AddIngredients(ingredients);
    // }
    // );
  }

  // AddIngredients(event:Event)
  // {
  //   // this.Ingredients.push(event);
  // }

}
