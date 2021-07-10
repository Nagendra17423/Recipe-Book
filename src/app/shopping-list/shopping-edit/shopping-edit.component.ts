import { viewClassName } from '@angular/compiler';
import { Component, ElementRef, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shoppingListService.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("inpName") inpNameRef:ElementRef;
  @ViewChild('inpAmt') inpAmtRef:ElementRef;
  // @Output() customEvent=new EventEmitter<Ingredients>();
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }
  addIngredient()
  {
    const name:string=this.inpNameRef.nativeElement.value;
    const amt:number=this.inpAmtRef.nativeElement.value;
    this.inpAmtRef.nativeElement.value="";
    this.inpNameRef.nativeElement.value="";
    let i=new Ingredients(name,amt);
    this.shoppingListService.AddIngredients(i);
// this.shoppingListService.ShoppingListEvet.emit(i);
    // this.customEvent.emit(i);

  }

}
