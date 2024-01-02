import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  urlShot: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private readonly productAPI = 'http://localhost:8080/api/produto';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productAPI);
  }
}
