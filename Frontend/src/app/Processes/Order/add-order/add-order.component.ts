import { Component, OnInit } from '@angular/core';
import {OrderService} from 'src/app/Service/order/order.service';
import {Provider} from 'src/app/Models/Provider';
import {Product} from 'src/app/Models/Product';
import {Order} from 'src/app/Models/Order';
import {OrderDetail} from 'src/app/Models/OrderDetail';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators, FormArray} from '@angular/forms';
import {FormBuilder} from '@angular/forms'
import {ErrorStateMatcher} from '@angular/material/core';
import Swal from 'sweetalert2';



export class MyItems {    
  Value: number;    
  constructor(Value:number)    
  {    
    this.Value = Value;    
  }    
}   




@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  constructor(private service: OrderService, private formBuilder: FormBuilder,private router: Router) { 

    this.myItems.push(    
      new MyItems(1),    
      new MyItems(2),    
      new MyItems(3),    
      new MyItems(4),    
      new MyItems(5)    
    );    
  }

  clients: Provider[];
  products: Product[];
  orderProductos:OrderDetail[];
  order: Order=new Order();   
  

  myItems: MyItems[] = new Array(); 
  newItem: any = {};   
  
  recorrer(){
    for (let item of this.myItems){
               item.Value 
    }
  }
  item=1;
  orderForm = this.formBuilder.group({

    id_persona: ['', {
        validators: [Validators.required]
          }],
          fecha_pedido: ['', {
        validators: [Validators.required]
          }],
  
          comentario: ['', {
            validators: [Validators.required]
              }],

          /*    id_producto: ['', {
                validators: [Validators.required]
                  }],*/
              

              productos: this.formBuilder.array([])
              

            });

            

            get id_persona() {return this.orderForm.get('id_persona');}
            get fecha_pedido() {return this.orderForm.get('fecha_pedido');}
            get comentario() {return this.orderForm.get('comentario');}
          //  get id_producto() {return this.orderForm.get('id_producto');}

            get productos() {return this.orderForm.get('productos') as FormArray;}


            AddItem() {    
          //    this.myItems.push(    
           //     this.newItem    
           //   );    
              this.newItem = {};    
            } 


    
                add(){

                  const hola =  this.orderForm.get('comentario');
                  
                }    

                agregarTelefono(){
                  const telefonoFormGroup  = this.formBuilder.group({
                    id_producto: ''
                    
                  });

                  this.productos.push(telefonoFormGroup);
                }
          
            removerTelefono(indice: number) {
              this.productos.removeAt(indice);
            }

  ngOnInit() {
    this.getClient();
    this.getProduct();
  }

  getClient(){
    this.service.getProvider()
    .subscribe(data =>{
      this.clients = data;
    })

  }

  getProduct(){
    this.service.getProduct()
    .subscribe(data =>{
      this.products = data;
    })

  }

  Guardar(){

    console.log(this.orderForm.value)
    this.service.createOrder(this.orderForm.value)
    .subscribe(data=>{
      Swal.fire('Registro Exitoso!', 'Producto agregado correctamente.', 'success');
      this.router.navigate(['listProduct']);
    })
  }



  

}

/*


import { Component, OnInit } from '@angular/core';
import {OrderService} from 'src/app/Service/order/order.service';
import {Provider} from 'src/app/Models/Provider';
import {Product} from 'src/app/Models/Product';
import {Order} from 'src/app/Models/Order';
import {OrderDetail} from 'src/app/Models/OrderDetail';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators, FormArray} from '@angular/forms';
import {FormBuilder} from '@angular/forms'
import {ErrorStateMatcher} from '@angular/material/core';
import Swal from 'sweetalert2';



export class MyItems {    
  Value: number;    
  constructor(Value:number)    
  {    
    this.Value = Value;    
  }    
}   




@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  constructor(private service: OrderService, private formBuilder: FormBuilder,private router: Router) { 

    this.myItems.push(    
      new MyItems(1),    
      new MyItems(2),    
      new MyItems(3),    
      new MyItems(4),    
      new MyItems(5)    
    );    
  }

  clients: Provider[];
  products: Product[];
  orderProductos:OrderDetail[];
  order: Order=new Order();   
  

  myItems: MyItems[] = new Array(); 
  newItem: any = {};   
  
  recorrer(){
    for (let item of this.myItems){
               item.Value 
    }
  }
  item=1;
  orderForm = this.formBuilder.group({

    id_persona: ['', {
        validators: [Validators.required]
          }],
          fecha_pedido: ['', {
        validators: [Validators.required]
          }],
  
          comentario: ['', {
            validators: [Validators.required]
              }],

              id_producto: ['', {
                validators: [Validators.required]
                  }],
              

              productos: this.formBuilder.array([])
              

            });

            

            get id_persona() {return this.orderForm.get('id_persona');}
            get fecha_pedido() {return this.orderForm.get('fecha_pedido');}
            get comentario() {return this.orderForm.get('comentario');}
            get id_producto() {return this.orderForm.get('id_producto');}

            get productos() {return this.orderForm.get('productos') as FormArray;}


    


            agregarTelefono(){
              const telefonoFormGroup  = this.formBuilder.group({
                id_producto: ''
                
              });
              this.productos.push(telefonoFormGroup);
            }
          
            removerTelefono(indice: number) {
              this.productos.removeAt(indice);
            }

  ngOnInit() {
    this.getClient();
    this.getProduct();
  }

  getClient(){
    this.service.getProvider()
    .subscribe(data =>{
      this.clients = data;
    })

  }

  getProduct(){
    this.service.getProduct()
    .subscribe(data =>{
      this.products = data;
    })

  }

  Guardar(){

    console.log(this.orderForm.value)
    this.service.createOrder(this.orderForm.value)
    .subscribe(data=>{
      Swal.fire('Registro Exitoso!', 'Producto agregado correctamente.', 'success');
      this.router.navigate(['listProduct']);
    })
  }



  

}


*/