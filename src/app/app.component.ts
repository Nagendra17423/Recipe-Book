import { Component } from '@angular/core';
import { RecipesService } from './recipes/RecipesService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[RecipesService]
})
export class AppComponent {
  title = 'my-second-app';
  feature:string='recipe';
  selectedFeature(str)
  {
  console.log("fired"+str)
this.feature=str;
  }

}
