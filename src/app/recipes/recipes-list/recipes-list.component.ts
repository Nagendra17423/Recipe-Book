import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import * as EventEmitter from 'node:events';
import { Recipe } from '../recipes.model';
import { RecipesService } from '../RecipesService.service';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];


  // @Output() showRecipeEvent=new EventEmitter<Recipe>();
  constructor(private recipeService:RecipesService) { }

  ngOnInit(): void {
    this.recipes=this.recipeService.getRecipes();
  }
  
  // selectedRecipe(recipe:Recipe)
  // {
  //   this.showRecipeEvent.emit(recipe);
  // }

}
