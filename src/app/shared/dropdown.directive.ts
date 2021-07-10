import { Directive, ElementRef, HostBinding, HostListener, Renderer2, ViewChild } from "@angular/core";

@Directive({
    selector:"[appDropDown]"
})
export class DropDown{
@HostBinding('class.show') istoggle=false;
show:boolean=false;
@ViewChild("tdata") child:ElementRef;
constructor(private renderer:Renderer2)
{

}
@HostListener('click') toggle()
{
    console.log("before "+this.istoggle);
     this.istoggle=!this.istoggle;
     console.log("after "+this.istoggle);
     
    //  this.child.nativeElement.

    // if(!this.istoggle)
    // this.renderer.addClass(this.child,'show');
    // else
    // {
    //     this.renderer.removeClass(this.child,'show');
    // }


    //  if(this.istoggle)
    //  {
    //      this.show=true;
    //  }
    //  else
    //  this.show=false;

}


}