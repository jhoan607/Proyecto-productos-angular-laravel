import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Category} from 'src/app/Models/Category';
import {CategoryService} from 'src/app/Service/category/category.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms'
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  constructor(private service: CategoryService, private router: Router,private formBuilder: FormBuilder) { }

  @ViewChild('btnClose', {static: true}) btnClose: ElementRef;
  @ViewChild('btnCloseAdd', {static: true}) btnCloseAdd: ElementRef;

  categories: Category[];
  category:Category =new Category();
  pageActual=1;
  filterPost="";

  categoryForm = this.formBuilder.group({

    nombre_categoria: ['', {
        validators: [Validators.required]
          }],
      estado: ['', {
        validators: [Validators.required]
          }],
  
     
    });
  
    get nombre_categoria() {return this.categoryForm.get('nombre_categoria');}
    get estado() {return this.categoryForm.get('estado');}

  ngOnInit() {
    this.service.getCategories()
      .subscribe(data => {
        this.categories = data;
      });
    }

    limpiar(){
      this.categoryForm.reset();
    }

    Editar(category:Category):void {
    
      localStorage.setItem("id",category.id.toString());
      this.ngOnInit();
      this.VerInformacion();
    }
  
    VerInformacion(){
      let id=localStorage.getItem("id");
      this.service.getCategoryId(+id)
      .subscribe(data=>{
        this.category=data;
      })
    }

    Guardar(category:Category){
      this.service.createCategory(category)
      .subscribe(data=>{
        this.ngOnInit();
       // this.categories=this.categories.filter(p=>p!==category);
        Swal.fire('Registro Exitoso!', 'Producto agregado correctamente.', 'success');
        this.categoryForm.reset();
        this.btnCloseAdd.nativeElement.click();
        
      })
    }

    Actualizar(category:Category){
      this.service.updateCategory(category)
      .subscribe(data=>{
        this.ngOnInit();
        this.category=data;
        // this.categories=this.categories.filter(p=>p!==category);
        Swal.fire({
          title: 'Actualizació Exitosa!',
          text: "Categoria actualizada correctamente",
          icon: 'success',
        })
        this.btnClose.nativeElement.click();
      })
    }

    Delete(category:Category){
    
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          this.service.deleteCategory(category)
          .subscribe(data=>{
            this.categories=this.categories.filter(p=>p!==category);
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        })
  }
})
  
}

  }


