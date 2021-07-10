import { EventEmitter } from "@angular/core";
import {Ingredients} from "../shared/ingredients.model";



export class ShoppingListService{
    private Ingredients:Ingredients[]=[
        new Ingredients("Tamatoes",10),
        new Ingredients(" Apples",20)
      
      ];
      ShoppingListEvet=new EventEmitter<Ingredients[]>();
      getShoppingList()
      {
          return this.Ingredients.slice();
      }

      AddIngredients(ingredients:Ingredients)
      {
          this.Ingredients.push(ingredients);
          this.ShoppingListEvet.emit(this.Ingredients);
      }

      addIngredientsFromRecipe(Ingredients:Ingredients[])
      {
          this.Ingredients.push(...Ingredients);
          this.ShoppingListEvet.emit(this.Ingredients.slice());
      }
}