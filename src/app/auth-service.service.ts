import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from '../environments/environment';
import { Admin } from './models/admin';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  adminURL = 'http://localhost:8080/acat_admin/'
  constructor(private http:HttpClient) { }

  login(admin: Admin):Observable<any>{
    return this.http.post(this.adminURL+'authenticate',admin)
  }
  
}
