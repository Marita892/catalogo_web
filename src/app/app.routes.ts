/*import { Routes } from '@angular/router';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AppComponent } from './app.component';
import { BotonComponent } from './components/boton/boton.component';

export const routes: Routes = [
    //{path:'',component : AppComponent},
    {path:'products',redirectTo :''},
    {path:'product/:id',component:ProductDetailComponent},
    {path:'boton',component:BotonComponent}
];*/

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { BotonComponent } from './components/boton/boton.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', redirectTo: '', pathMatch: 'full' },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'boton', component: BotonComponent },
  { path: '**', redirectTo: '' }
];


