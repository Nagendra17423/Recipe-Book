import { Ingredients } from "../shared/ingredients.model";

export class Recipe{
    name:string;
    description:string;
    imagePath:string;
    Ingredients:Ingredients[];
    constructor(name,description,imagePath,Ingredients:Ingredients[])
    {
        this.name=name;
        this.description=description;
        this.imagePath=imagePath;
        this.Ingredients=Ingredients;
    }
    
}