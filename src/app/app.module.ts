import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { DropDown } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shoppingListService.service';
import { AppRouting } from './app-routing.module';
import { RecipeStarterComponent } from './recipes/recipe-starter/recipe-starter.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesListComponent,
    RecipesDetailsComponent,
    RecipesItemComponent,
    DropDown,
    RecipeStarterComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
