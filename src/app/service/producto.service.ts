import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

 
  productoURL = 'http://localhost:8080/producto/'
  carritoURL = 'http://localhost:8080/carrito/'
  productos: Producto[];

  
  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(this.productoURL+'listar');
  }

  public listarcategoria(categoriaproducto: string): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(this.productoURL+`/listar/${categoriaproducto}`);
  }

  public listarestado(estadoproducto: string): Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(this.productoURL+`/listar/estado/${estadoproducto}`);
  }

  public detail(idproducto: number): Observable<Producto>{
    return this.httpClient.get<Producto>(this.productoURL+`detail/${idproducto}`);
  }

  public alcarrito(idproducto: number): Observable<Producto>{
    return this.httpClient.get<Producto>(this.carritoURL+`alcarrito/${idproducto}`);
  }

  public detailName(nombreproducto: string): Observable<Producto>{
    return this.httpClient.get<Producto>(this.productoURL+`detailname/${nombreproducto}`);
  }

  public save(producto: Producto):Observable<any>{
    return this.httpClient.post<any>(this.productoURL+'create/${idproductor}',producto);
  }

  public update(idproducto: number,producto: Producto):Observable<any>{
    return this.httpClient.put<any>(this.productoURL+`update/${idproducto}`,producto);
  }

  public delete(idproducto: number ): Observable<any>{
    return this.httpClient.delete<any>(this.productoURL+`delete/${idproducto}`);
  }

}
