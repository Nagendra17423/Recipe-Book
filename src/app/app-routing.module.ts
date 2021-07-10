// import { Route } from "@angular/compiler/src/core";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeStarterComponent } from "./recipes/recipe-starter/recipe-starter.component";
import { RecipesDetailsComponent } from "./recipes/recipes-details/recipes-details.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const route:Routes=[
    {path:'',redirectTo:'/recipe',pathMatch:'full'},
    {path:'recipe',component:RecipesComponent,children:[
    {path:"",component:RecipeStarterComponent},
    {path:":id",component:RecipesDetailsComponent}
    ]},
    {path:'shopping-list',component:ShoppingListComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(route)],
    exports:[RouterModule]
})
export class AppRouting{
}