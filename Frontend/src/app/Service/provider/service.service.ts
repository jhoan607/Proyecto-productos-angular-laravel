import { Injectable } from '@angular/core';
import {Provider} from '../../Models/Provider'
import {Documento} from '../../Models/Documento'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceService {

  constructor(private http:HttpClient) { }

  //Url='http://localhost:8282/angular/proveedores';
  //UrlDocument='http://localhost:8282/angular/proveedor'

  Url='http://127.0.0.1:8000/api/proveedores';
  UrlDocument='http://127.0.0.1:8000/api/documentos'

  getDocumentos(){
    return this.http.get<Documento[]>(this.UrlDocument);
  }

  getProveedores(){
    return this.http.get<Provider[]>(this.Url);
  }
  createProveedor(proveedor:Provider){
    return this.http.post<Provider>(this.Url,proveedor);
  }
  getProveedorId(id:number){
    return this.http.get<Provider>(this.Url+"/"+id);
  }
  updateProveedor(proveedor:Provider){
    return this.http.put<Provider>(this.Url+"/"+proveedor.id,proveedor);
  }
  deleteProveedor(proveedor:Provider){
    return this.http.delete<Provider>(this.Url+"/"+proveedor.id);
  }
}
