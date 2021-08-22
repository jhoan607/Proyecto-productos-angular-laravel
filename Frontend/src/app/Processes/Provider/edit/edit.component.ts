import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/provider/service.service';
import { Provider } from 'src/app/Models/Provider';
import Swal from 'sweetalert2';
import { Documento } from 'src/app/Models/Documento';
import {FormBuilder} from '@angular/forms'
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  proveedor :Provider=new Provider();
  documentos: Documento[];

  constructor(private router:Router,private service:ServiceService, private formBuilder: FormBuilder ) { }

  providerForm = this.formBuilder.group({
    nombre: ['', {
      validators: [Validators.required]
        }],

        apellido: ['', {
          validators: [Validators.required]
            }],

            tipo_documento: ['', {
              validators: [Validators.required]
                }],

                documento: ['', {
                  validators: [Validators.required]
                    }],

                    telefono: ['', {
                      validators: [Validators.required]
                        }],

                        celular: ['', {
                          validators: [Validators.required]
                            }],


                            departamento: ['', {
                              validators: [Validators.required]
                                }],

                                ciudad: ['', {
                                  validators: [Validators.required]
                                    }],

                                    estado: ['', {
                                  validators: [Validators.required]
                                    }],

   
  });

  get nombre() {return this.providerForm.get('nombre');}
  get apellido() {return this.providerForm.get('apellido');}
  get tipo_documento() {return this.providerForm.get('tipo_documento');}
  get documento() {return this.providerForm.get('documento');}
  get telefono() {return this.providerForm.get('telefono');}
  get celular() {return this.providerForm.get('celular');}
  get departamento() {return this.providerForm.get('departamento');}
  get ciudad() {return this.providerForm.get('ciudad');}
  get estado() {return this.providerForm.get('estado');}

  ngOnInit() {
    this.Editar();
    this.service.getDocumentos()
    .subscribe(data => {
      this.documentos = data;
    });
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getProveedorId(+id)
    .subscribe(data=>{
      this.proveedor=data;
    })

  }
  Actualizar(proveedor:Provider){
    this.service.updateProveedor(proveedor)
    .subscribe(data=>{
      this.proveedor=data;
      Swal.fire({
        title: 'Actualizació Exitosa!',
        text: "Proveedor actualizado correctamente",
        icon: 'success',
      })
      this.router.navigate(['listProvider']);
    })
  }

}