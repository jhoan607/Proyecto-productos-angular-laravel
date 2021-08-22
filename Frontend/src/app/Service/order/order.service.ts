import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Order} from './../../Models/Order';
import {OrderDetail} from './../../Models/OrderDetail';
import {Product} from '../../Models/Product';
import {Provider} from '../../Models/Provider';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http : HttpClient) { }


  Url='http://127.0.0.1:8000/api/pedido';
  UrlProduct='http://127.0.0.1:8000/api/productos';
  UrlProvider='http://127.0.0.1:8000/api/proveedor';

  getProvider(){
    return this.http.get<Provider[]>(this.UrlProvider);
  }

  getProduct(){
    return this.http.get<Product[]>(this.UrlProduct);
  }

  createOrder(order:Order){
    console.log(order);
    return this.http.post<Order>(this.Url, order);
  }
  
}
