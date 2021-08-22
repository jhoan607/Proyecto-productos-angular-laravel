import { Component, OnInit } from '@angular/core';
import {Category} from 'src/app/Models/Category';
import {CategoryService} from 'src/app/Service/category/category.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private service: CategoryService, private router: Router) { }

  category:Category =new Category();

  ngOnInit() {
  }

  Guardar(category:Category){
    this.service.createCategory(category)
    .subscribe(data=>{
     // this.categories=this.categories.filter(p=>p!==category);
      Swal.fire('Registro Exitoso!', 'Producto agregado correctamente.', 'success');
    })
  }

}
