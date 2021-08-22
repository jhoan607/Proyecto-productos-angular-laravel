import { Component, OnInit  } from '@angular/core';

import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/provider/service.service'
import { Provider } from 'src/app/Models/Provider';
import Swal from 'sweetalert2';
//import { MatTableDataSource } from '@angular/material/table';
//import { MatPaginator } from '@angular/material/paginator';
//import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {

  constructor(private service: ServiceService, private router: Router) { }

  proveedores: Provider[];
  proveedor :Provider=new Provider();
  filterPost = '';
  pageActual:number = 1;
  

  ngOnInit() {
    this.service.getProveedores()
      .subscribe(data => {
        this.proveedores = data;
      });
  }

  informacion(proveedor:Provider):void {
    
    localStorage.setItem("id",proveedor.id.toString());
    //this.router.navigate(["edit"]);
    this.ngOnInit();
    this.VerInformacion();
  }

  VerInformacion(){

    let id=localStorage.getItem("id");
    this.service.getProveedorId(+id)
    .subscribe(data=>{
      this.proveedor=data;
    })
  }
  


  Editar(proveedor:Provider):void{
    localStorage.setItem("id",proveedor.id.toString());
    this.router.navigate(["editProvider"]);
  }


  Delete(proveedor:Provider){
    
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
          this.service.deleteProveedor(proveedor)
          .subscribe(data=>{
            this.proveedores=this.proveedores.filter(p=>p!==proveedor);
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
