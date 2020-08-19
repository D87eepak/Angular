import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product-component/product-component.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
	{ 
	  path: '',
	component: ProductComponent,
	children: [ 
	    {
	       path: 'details/:id',
	       component: ProductDetailsComponent
	    }
	  ] 	  
	}	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { 

 

}
