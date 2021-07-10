import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Recipe} from '../recipes.model';
import { RecipesService } from '../RecipesService.service';
@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
// @Input() recipeDisplayed:Recipe;
recipeDisplayed:Recipe;
id:number;
istoggle:boolean=false;
  constructor(private recipeService:RecipesService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (param:Params)=>{
        this.id=parseInt(param['id']);
        this.recipeDisplayed=this.recipeService.getRecipeFromRecipeId(this.id);

      }
    )
  }

  addToShopping()
  {
this.recipeService.addToShoppingList(this.recipeDisplayed.Ingredients);
  }

}
