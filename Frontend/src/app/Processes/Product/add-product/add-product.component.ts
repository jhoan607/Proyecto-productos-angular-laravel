import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Service/product/product.service';
import { Product } from 'src/app/Models/Product';
import Swal from 'sweetalert2';
import { Provider } from 'src/app/Models/Provider';
import { Category } from 'src/app/Models/Category';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms'
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private router:Router, private service:ProductService,private formBuilder: FormBuilder) { }

  product:Product=new Product();
  providers: Provider[];
  categories: Category[];


  productForm = this.formBuilder.group({

  id_proveedor: ['', {
      validators: [Validators.required]
        }],
    referencia: ['', {
      validators: [Validators.required]
        }],

        nombre_producto: ['', {
          validators: [Validators.required]
            }],

            id_categoria: ['', {
              validators: [Validators.required]
                }],

                precio_unitario: ['', {
                  validators: [Validators.required]
                    }],

                    cantidad: ['', {
                      validators: [Validators.required]
                        }],

                        estado: ['', {
                          validators: [Validators.required]
                            }],

   
  });

  get id_proveedor() {return this.productForm.get('id_proveedor');}
  get referencia() {return this.productForm.get('referencia');}
  get nombre_producto() {return this.productForm.get('nombre_producto');}
  get id_categoria() {return this.productForm.get('id_categoria');}
  get precio_unitario() {return this.productForm.get('precio_unitario');}
  get cantidad() {return this.productForm.get('cantidad');}
  get estado() {return this.productForm.get('estado');}

  ngOnInit() {
    this.Categories();
    this.service.getProvider()
      .subscribe(data => {
        this.providers = data;
      });

  }

  Categories(){
    this.service.getCategory()
      .subscribe(data => {
        this.categories = data;
      });

  }

  Guardar(){
    this.service.createProduct(this.product)
    .subscribe(data=>{
      Swal.fire('Registro Exitoso!', 'Producto agregado correctamente.', 'success');
      this.router.navigate(['listProduct']);
    })
  }

}
