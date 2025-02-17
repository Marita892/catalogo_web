import { Component } from '@angular/core';
import { ListProduct, Product } from '../../model/product.model';
import { RouterModule,Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-product-detail',
  imports: [MatCardModule,CommonModule,RouterModule,MatButton],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  product:Product | undefined =
{ id:0,
  nombre:'',
  tipo:'',
  categoria:'',
  precio:0,imagen:"", };



  constructor(private router:Router,private activeroute:ActivatedRoute,private productService:ProductService){
   const id=Number( this.activeroute.snapshot.paramMap.get('id'));
    this.productService.getProductById(id).subscribe(product=> this.product = product);


  }

  goToList(){
    //this.router.navigate(['']);
    window.history.back();

  }
 /* AgreToList(product1: Product){
    let lista: ListProduct
    ={    precioo=product1.precio,
     producto=product1.nombre,};

   
   this.productService.saveProductList(lista).subscribe(list=>{console.log("Producto agregado");});
    }

  }*/

}
