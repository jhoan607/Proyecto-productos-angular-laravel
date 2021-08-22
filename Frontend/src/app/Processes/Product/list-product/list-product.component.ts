import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ProductService } from '../../../Service/product/product.service'
import { Product } from 'src/app/Models/Product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(private service: ProductService, private router: Router) { }

  products: Product[];
  product :Product=new Product();
  filterPost="";
  pageActual=1;

  

  ngOnInit() {
    this.service.getProduct()
      .subscribe(data => {
        this.products = data;
      });
  }

  informacion(product:Product):void {
    
    localStorage.setItem("id",product.id.toString());
    //this.router.navigate(["edit"]);
    this.ngOnInit();
    this.VerInformacion();
  }

  VerInformacion(){

    let id=localStorage.getItem("id");
    this.service.getProductId(+id)
    .subscribe(data=>{
      this.product=data;
    })
  }
  


  Editar(product:Product):void{
    localStorage.setItem("id",product.id.toString());
    this.router.navigate(["editProduct"]);
  }


  Delete(product:Product){
    
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
          this.service.deleteProduct(product)
          .subscribe(data=>{
            this.products=this.products.filter(p=>p!==product);
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
