export class Producto {
    idproducto?: number;
    nombreproducto: string; 
    precioproducto: number;
    pesoproducto: number;
    estadoproducto: string;
    categoriaproducto: string;

    constructor(nombreproducto: string,precioproducto:number,pesoproducto: number,estadoproducto:string, categoriaproducto: string){
        this.nombreproducto = nombreproducto;
        this.precioproducto = precioproducto;
        this.pesoproducto = pesoproducto;
        this.estadoproducto = estadoproducto;        
        this.categoriaproducto = categoriaproducto;
        
    }

}
