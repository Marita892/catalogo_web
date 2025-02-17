import { Injectable } from '@angular/core';
import { Observable ,of } from 'rxjs';
import { Categoria, Product ,ListProduct} from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products : Product[]=[
    {id:1,nombre:'Adidas Lite Racer 3.0',precio:550,tipo:"Novedades",categoria:"Hombre",imagen:"imag/racer3.jpeg"},
    {id:2,nombre:"Adidas Duramo RC",precio:620,tipo:"Novedades",categoria:"Hombre",imagen:"imag/duramoRC.jpeg"},
    {id:3,nombre:"Adidas Hoops 3.0",precio:750,tipo:"Novedades",categoria:"Hombre",imagen:"imag/duramoRC.jpeg"},
    
    {id:4,nombre:'Adidas Copa Pure II',precio:650,tipo:"Novedades",categoria:"Hombre",imagen:"imag/copapureII.jpeg"},
    {id:5,nombre:"Adidas Predator Club",precio:620,tipo:"Novedades",categoria:"Hombre",imagen:"imag/predatorclub.jpeg"},
    {id:6,nombre:"Adidas Goleto VIII",precio:520,tipo:"Oferta",categoria:"Hombre",imagen:"imag/goleto8.jpeg"},
    {id:7,nombre:"Nike Tiempo Legend",precio:580,tipo:"Novedades",categoria:"Hombre",imagen:"imag/tiempolengend.jpeg"},
    {id:8,nombre:"Adidas Crazy Fast",precio:650,tipo:"Novedades",categoria:"Hombre",imagen:"imag/duramoRC.jpeg"},
    {id:9,nombre:"Adidas Grand Court TD Casual",precio:620,tipo:"Novedades",categoria:"Mujer",imagen:"imag/courtcasual.jpeg"},
  ];

  private cate : Categoria[]=[
    {id:1,nombre:'Hombre'},
    {id:2,nombre:"Mujer"},
    {id:3,nombre:"Niño"},
    {id:4,nombre:'Niña'},
   
  ];

  private productList :ListProduct[]=[];

  getCategoria() : Observable<Categoria[]>{
    return of (this.cate);

  }

    getProduct() : Observable<Product[]>{
      return of (this.products);

    }

    getProductById(id:number): Observable<Product | undefined>{
      return of (this.products.find(product=>product.id===id));

    }

    getProductByCate(categoria:string): Observable<Product | undefined>{
      return of (this.products.find(product=>product.categoria===categoria));

    }

    saveProduct(product:Product):Observable<Product>{
      return of(this.products[0]);
    }
    updateProduct(product:Product):Observable<Product>{

      return of(product);
    }
  
    deleteProduct(id:number):Observable<boolean>{

      return of (true);

    }

    saveProductList(product:ListProduct):Observable<ListProduct>{
  
    
      this.productList.push(product)
      return of(this.productList[0]);
    }
    getProductList() : Observable<ListProduct[]>{
      return of (this.productList);
  
    }
  
}
