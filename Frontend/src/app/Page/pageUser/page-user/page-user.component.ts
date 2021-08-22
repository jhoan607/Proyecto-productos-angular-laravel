import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails} from 'src/app/Service/login/authentication.service';



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
  Value: string;    
  constructor(Value:string)    
  {    
    this.Value = Value;    
  }    
}   

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css']
})
export class PageUserComponent implements OnInit {

  

  constructor(private service: OrderService, private formBuilder: FormBuilder,private router: Router) {

    
   }



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

              productos: this.formBuilder.array([])

            });


          
            get id_persona() {return this.orderForm.get('id_persona');}
            get fecha_pedido() {return this.orderForm.get('fecha_pedido');}
            get comentario() {return this.orderForm.get('comentario');}
            get productos() {return this.orderForm.get('productos') as FormArray;}

            clients: Provider[];
    products:Product[];
    order: Order=new Order();
  
    
  // Other variables    
  myItems: MyItems[] = new Array();    
    
  // Other variables    
  IsForUpdate: boolean = false;    
  newItem: any = {};    
  updatedItem;    
    
  // Provide some values to the array    
  
  
  AddItem() {    
    this.myItems.push(    
      this.newItem    
    );    
    this.newItem = {};    
  } 
  
  // When user selects edit option  


DeleteItem(i) {  
  this.myItems.splice(i, 1);  
}  

  ngOnInit() {
    this.getProduct();
  }

  

  getProduct(){
    this.service.getProduct()
    .subscribe(data =>{
      this.products = data;
    })

  }

  submit() {
    
    console.log(this.orderForm.value);
    this.service.createOrder(this.orderForm.value)
    .subscribe(data=>{
      Swal.fire('Registro Exitoso!', 'Producto agregado correctamente.', 'success');
      this.router.navigate(['listProduct']);
    })
  }

  


}
