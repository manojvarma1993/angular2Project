import { Directive,HostBinding,HostListener,Input } from '@angular/core';
import { leave } from '@angular/core/src/profile/wtf_impl';


@Directive(
{
selector:"[Fav]"


})

export class FavDirective
{

@HostBinding('class.isFavorite') Favorite=true;

@Input() set Fav(value)
{
this.Favorite=value;

}

@HostBinding('class.isHovering') Hovering;


@HostListener('mouseenter')Enter()
{
this.Hovering=true;
}

@HostListener('mouseleave')leave()
{
    this.Hovering=false;
}



}