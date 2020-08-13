import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})

export class AdminService{

  adminURL = 'http://localhost:8080/acat_admin/'

  constructor(private httpClient: HttpClient) { }

public login(admin: Admin):Observable<any>{
    return this.httpClient.post<any>(this.adminURL+'authenticate',admin);
  }

}