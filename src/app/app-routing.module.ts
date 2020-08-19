import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home-component/home-component.component';



const routes: Routes = [
  
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'about',
    loadChildren: () => import('src/app/about/about.module').then(m => m.AboutModule) 
  },
  {
    path: 'contact',
    loadChildren: () => import('src/app/contact/contact.module').then(m => m.ContactModule) 
  },
  {
    path: 'quality',
    loadChildren: () => import('src/app/quality/quality-module.module').then(m => m.QualityModule) 
  },
  {
    path: 'products',
    loadChildren: () => import('src/app/product/product-module.module').then(m => m.ProductModule) 
  },

  {
    path: 'infrastructure',
    loadChildren: () => import('src/app/infrastructure/infrastructure-module').then(m => m.InfrastructureModule) 
  },

  
  {
 path: '',
 redirectTo: '/home',
 pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
