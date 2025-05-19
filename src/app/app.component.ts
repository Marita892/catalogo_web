/*import { Component } from '@angular/core';
import { Router,RouterModule,RouterOutlet } from '@angular/router';
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ProductService } from './services/product.service';
import { Product } from './model/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent,ProductCardComponent,CommonModule,RouterModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CatalogoProductos';
  list: Product[] =[];

   constructor(private productService: ProductService,private router:Router){
   productService.getProduct().subscribe(products => this.list=products);
   }

  mensajeCategoria(nombre:string)
  {
    ///  this.productService.getProductByCate(nombre).subscribe(products => {
  //if (products) {
    this.list = products ;
 // } else {
 //   this.list = [];  // Asignar un arreglo vacío si no hay productos
//  }}
//);
    this.productService.getProduct().subscribe(products => this.list=products);
   }

  public goToDetail(product: Product){
    console.log('Go to detail',product);
    this.router.navigate(['/product',product.id]);
  }

  public goToLogin(){
    console.log('Go to login');
    this.router.navigate(['/boton']);
  }
   
}*/

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Esto debe estar si estás usando Angular standalone
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CatalogoProductos';
}

