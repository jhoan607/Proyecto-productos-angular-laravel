import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from '../../Models/Product';
import {Provider} from '../../Models/Provider';
import {Category} from '../../Models/Category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  Url='http://127.0.0.1:8000/api/productos';
  UrlProvider='http://127.0.0.1:8000/api/proveedor';
  UrlCategory='http://127.0.0.1:8000/api/categoria';
  UrlStopMinimo='http://127.0.0.1:8000/api/stopMinimo';
  UrlStopMaximo='http://127.0.0.1:8000/api/stopMaximo';


  getStopMinimo(){
    return this.http.get<Product[]>(this.UrlStopMinimo);
  }

  getStopMaximo(){
    return this.http.get<Product[]>(this.UrlStopMaximo);
  }

  getProvider(){
    return this.http.get<Provider[]>(this.UrlProvider);
  }

  getCategory(){
    return this.http.get<Category[]>(this.UrlCategory);
  }

  getProduct(){
    return this.http.get<Product[]>(this.Url);
  }

  createProduct(product:Product){
    return this.http.post<Product>(this.Url,product);
  }
  getProductId(id:number){
    return this.http.get<Product>(this.Url+"/"+id);
  }

  updateProduct(product:Product){
    return this.http.put<Product>(this.Url+"/"+product.id,product);
  }
  deleteProduct(product:Product){
    return this.http.delete<Product>(this.Url+"/"+product.id);
  }
}
