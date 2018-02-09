import {Component,Input } from '@angular/core';


@Component({
selector:'item',
templateUrl:'./item-component.component.html'


})

export class ItemComponent
{
@Input() Items;



}