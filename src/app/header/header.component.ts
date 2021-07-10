import { Component,EventEmitter, Input, Output } from "@angular/core";


@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
}
)
export class HeaderComponent{
    @Output() featureSelected=new EventEmitter<string>();
   istoggle:boolean=false;
    constructor()
    {

    }
//     onSelected(select:string)
//     {
//         console.log(" event click"+select);
// this.featureSelected.emit(select);
//     }

    func()
    {
        // console.log(this.istoggle);
        this.istoggle=!this.istoggle;
        // console.log(this.istoggle);
        // console.log(!true);
    }
}