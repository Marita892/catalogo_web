import { Component ,Output,EventEmitter,Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import { Product } from '../../model/product.model';


@Component({
  selector: 'app-product-card',
  imports: [MatCardModule,MatButtonModule,MatIconModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input () product:Product=
  { id:0,
  nombre:'',
  tipo:'',
  categoria:'',
  precio:0
  ,imagen:""
  };

  @Output() productSelected:EventEmitter<Product>=new EventEmitter<Product>();  

  selectProduct(){
    this.productSelected.emit(this.product)
  }

  
}
