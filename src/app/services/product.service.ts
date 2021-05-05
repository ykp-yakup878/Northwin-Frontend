import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModels } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44305/api/products/getall';
  constructor(private httpClient: HttpClient) {}

  getProducts():Observable<ProductResponseModels> {
    return this.httpClient.get<ProductResponseModels>(this.apiUrl);
  }
}
