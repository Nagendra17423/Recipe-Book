import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shoppingListService.service';
import { Recipe } from './recipes.model';
@Injectable()
export class RecipesService {
    private recipes: Recipe[] = [
        new Recipe("Recipe 1",
            " looks delicious",
            "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg"
            ,[new Ingredients("Spinach",12),
            new Ingredients("onion",12),
            new Ingredients("Patato",20)

            ]),
        new Recipe("Recipe 2", "Looks Tasty",
            "https://static.onecms.io/wp-content/uploads/sites/19/2015/07/28/sheet-pan-beefy-nachos-1709p108.jpg"
            ,[new Ingredients("Tamatoes",2),
            new Ingredients("Chillies",20),
            new Ingredients("Ornages",30)

            ])
    ];

    constructor(private slservice:ShoppingListService){}

    recipeServiceEvent = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipeFromRecipeId(id:number)
    {
        return this.recipes.slice()[id];
    }

    addToShoppingList(Ingredients:Ingredients[])
    {
this.slservice.addIngredientsFromRecipe(Ingredients);
    }

}