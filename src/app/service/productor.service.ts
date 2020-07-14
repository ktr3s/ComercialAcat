import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productor } from '../models/productor';

@Injectable({
  providedIn: 'root'
})
export class ProductorService {

  productorURL = 'http://localhost:8080/productor/'

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<Productor[]>{
    return this.httpClient.get<Productor[]>(this.productorURL+'listar')
  }

  public detail(idproductor: number): Observable<Productor>{
    return this.httpClient.get<Productor>(this.productorURL+`detail/${idproductor}`)
  }

  public detailName(nombreproductor: string): Observable<Productor>{
    return this.httpClient.get<Productor>(this.productorURL+`detailname/${nombreproductor}`)
  }

  public save(productor: Productor):Observable<any>{
    return this.httpClient.post<any>(this.productorURL+'create',productor);
  }

  public update(idproductor: number,productor: Productor):Observable<any>{
    return this.httpClient.put<any>(this.productorURL+`update/${idproductor}`,productor);
  }

  public delete(idproductor: number ): Observable<any>{
    return this.httpClient.delete<any>(this.productorURL+`delete/${idproductor}`);
  }

}
