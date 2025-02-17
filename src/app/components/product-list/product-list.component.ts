import { Component,Output,EventEmitter } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Categoria } from '../../model/product.model';  
import { ProductService } from '../../services/product.service'; 
import { CommonModule } from '@angular/common';





@Component({
  selector: 'app-product-list',
  imports: [MatButtonModule, MatToolbarModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  list:Categoria[]=[];
  @Output() CategoriaId =new EventEmitter<string>(); 

    constructor(private productService:ProductService){
      productService.getCategoria().subscribe(cate => this.list=cate);
    }
 
EnvioCategoria(nombre:string)
{
        this.CategoriaId.emit(nombre);
 }
}
