import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Home/login/login.component';
import { ContactoComponent } from './Home/contacto/contacto.component';
import { ListComponent } from './Processes/Provider/list/list.component';
import { AddComponent } from './Processes/Provider/add/add.component';
import { EditComponent } from './Processes/Provider/edit/edit.component';
import { RegisterComponent } from './Home/register/register/register.component';
import { PageUserComponent } from './Page/pageUser/page-user/page-user.component';
import {AuthGuardService} from './Service/login/auth-guard.service';
import { AuthenticationService } from './Service/login/authentication.service';
import { HomeComponent } from './Home/home/home/home.component';
import {Http404Component} from './Page/http/http404/http404.component';
import {AddProductComponent} from './Processes/Product/add-product/add-product.component';
import {ListProductComponent} from './Processes/Product/list-product/list-product.component';
import {EditProductComponent} from './Processes/Product/edit-product/edit-product.component';
import {ListCategoryComponent} from './Processes/Category/list-category/list-category.component';
import {AddCategoryComponent} from './Processes/Category/add-category/add-category.component';
import {EditCategoryComponent} from './Processes/Category/edit-category/edit-category.component';
import {HomeAdminComponent} from './Page/homeAdmin/home-admin/home-admin.component';
import {ListAdminComponent} from './Processes/administrators/list-admin/list-admin.component';
import { AddOrderComponent } from './Processes/Order/add-order/add-order.component';
import { ListOrderComponent } from './Processes/Order/list-order/list-order.component';





const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'contacto',component:ContactoComponent},
  {path: 'register', component: RegisterComponent},

  //Inicio Sesión
  {path: 'profile', component: PageUserComponent, canActivate: [AuthGuardService]},
  {path: 'home', component: HomeAdminComponent, canActivate: [AuthGuardService]},

  //Admin
  {path:'admin',component: ListAdminComponent, canActivate: [AuthGuardService] },

  //Categoria
  {path:'category', component:ListCategoryComponent,canActivate: [AuthGuardService] },
  {path:'addCategory', component:AddCategoryComponent,canActivate: [AuthGuardService] },
  {path:'editCategory', component:EditCategoryComponent,canActivate: [AuthGuardService] },

  //Productos
  {path:'listProduct',component:ListProductComponent, canActivate: [AuthGuardService]},
  {path:'addProduct',component:AddProductComponent, canActivate: [AuthGuardService]},
  {path:'editProduct',component:EditProductComponent, canActivate: [AuthGuardService]},

  //Proveedores
  {path:'listProvider',component:ListComponent, canActivate: [AuthGuardService]},
  {path:'addProvider',component:AddComponent, canActivate: [AuthGuardService]},
  {path:'editProvider',component:EditComponent, canActivate: [AuthGuardService]},

  //Pedidos
  {path:'addOrder', component:AddOrderComponent,canActivate: [AuthGuardService]},
  {path:'listOrder', component:ListOrderComponent,canActivate: [AuthGuardService]},

  {path:'**',component:Http404Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
