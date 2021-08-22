import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ProductService } from '../../../Service/product/product.service'
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  constructor(private service: ProductService, private router: Router) { }

  stopMinimo:Product[];
  stopMaximo:Product[];
  filterStopMinimo="";
  filterStopMaximo="";
  pageActual=1;

  ngOnInit() {
    this.stopMinimoProducto();
    this.stopMaximoProducto();
  }

  stopMaximoProducto(){
    this.service.getStopMaximo()
    .subscribe(data => {
      this.stopMaximo = data;
    });
  }

  stopMinimoProducto(){
    this.service.getStopMinimo()
    .subscribe(data => {
      this.stopMinimo = data;
    });
  }

}
