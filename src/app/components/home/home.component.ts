import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product.model';
import { ProductListComponent } from "../product-list/product-list.component";
import { ProductCardComponent } from "../product-card/product-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
  imports: [ ProductListComponent,ProductCardComponent,CommonModule],
})
export class HomeComponent {
  list: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {
    productService.getProduct().subscribe(products => this.list = products);
  }

  mensajeCategoria(nombre: string) {
    this.productService.getProduct().subscribe(products => this.list = products);
  }

  public goToDetail(product: Product) {
    this.router.navigate(['/product', product.id]);
  }

  public goToLogin() {
    this.router.navigate(['/boton']);
  }
}
