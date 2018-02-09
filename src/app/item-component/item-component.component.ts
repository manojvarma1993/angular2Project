import {Component,Input } from '@angular/core';


@Component({
selector:'item',
templateUrl:'./item-component.component.html',
styleUrls:['./item-component.component.css']


})

export class ItemComponent
{
@Input() Items;



}