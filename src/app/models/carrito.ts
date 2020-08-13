import { Productor } from './productor';

export class Carrito {
    idproducto?: number;
    nombreproducto: string; 
    precioproducto: number;
    pesoproducto: number;
    estadoproducto: string;
    categoriaproducto: string;
    descripcionproducto: string;
    Productor: Productor;

    constructor(nombreproducto: string,precioproducto:number,pesoproducto: number,estadoproducto:string, categoriaproducto: string, descripcionproducto: string, Productor: Productor){
        this.nombreproducto = nombreproducto;
        this.precioproducto = precioproducto;
        this.pesoproducto = pesoproducto;
        this.estadoproducto = estadoproducto;        
        this.categoriaproducto = categoriaproducto;
        this.descripcionproducto = descripcionproducto;
        this.Productor = Productor;
        
    }
}
