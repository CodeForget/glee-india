import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';

import { Product } from '../_models/product';
import {Varient} from '../_models/varient.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl=environment.baseUrl;
    
    constructor(private http: HttpClient) { }


    getProducts() {
        return this.http.get<Product[]>(`${this.apiUrl}/api/product`);
    }

    getProductById(id){
      return this.http.get<Product>(`${this.apiUrl}/api/product/${id}`);
    }

    getProductDetails(id){
      return this.http.get<Product>(`${this.apiUrl}/api/product/${id}`);
    }

    getProductVarient(id){
      return this.http.get<Varient[]>(`${this.apiUrl}/api/varient/${id}`);
    }

}