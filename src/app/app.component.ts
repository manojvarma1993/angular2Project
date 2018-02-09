import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from
'@angular/forms';  




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
for;
ngOnIt()
{
	
	this.for=new FormGroup(
	{

	Name : new FormControl('Name',Validators.required),
    Favorite : new FormControl('',Validators.required),
    Type : new FormControl('',Validators.required)





	});



}


  
}
