import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipesService } from './RecipesService.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
recipeShow:Recipe;
  constructor(private recipeService:RecipesService) { }

  ngOnInit(): void {
    this.recipeService.recipeServiceEvent.subscribe((recipe)=>{
      this.recipeShow=recipe;
    })
    
  }
  // ev($event){
    // this.recipeShow=$event;

  // }

}
