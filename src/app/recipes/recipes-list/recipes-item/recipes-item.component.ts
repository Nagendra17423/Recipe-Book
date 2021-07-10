import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

import { Recipe } from '../../recipes.model';
import { RecipesService } from '../../RecipesService.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
@Input() recipe:Recipe;
@Input() index:number;
@Output() recipeItemEvent=new EventEmitter<void>();
  constructor(private recipeService:RecipesService) { 
    // console.log(this.recipe);
  }

  ngOnInit(): void {
  }

  selectedRecipe()
  {
// this.recipeService.recipeServiceEvent.emit(this.recipe);

    // this.recipeItemEvent.emit();
  }

}
