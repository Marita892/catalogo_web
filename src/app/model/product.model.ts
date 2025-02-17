export interface Product{
    id:number;
    nombre:string;
    precio:number;
    tipo:string;
    categoria:string;
    imagen:string;
}

export interface Categoria{
    id:number;
    nombre:string;
}
 
export class ListProduct
{
    producto:string;
    precioo:number;
    constructor(){
this.precioo=0;
this.producto='';
    }

}