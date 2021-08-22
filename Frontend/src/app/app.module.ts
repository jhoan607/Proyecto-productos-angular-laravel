import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Home/login/login.component';
import { ContactoComponent } from './Home/contacto/contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import{ServiceService}from '../app/Service/provider/service.service';
import{HttpClientModule}from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import {AuthGuardService} from './Service/login/auth-guard.service';
import { AuthenticationService } from './Service/login/authentication.service';
import {ProductService} from './Service/product/product.service';
import {OrderService} from './Service/order/order.service';

import {CategoryService} from './Service/category/category.service';
import {UsersService} from './Service/users/users.service';
import {NgxPaginationModule} from 'ngx-pagination';




import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddComponent } from './Processes/Provider/add/add.component';
import { EditComponent } from './Processes/Provider/edit/edit.component';
import { ListComponent } from './Processes/Provider/list/list.component';
import { HeaderComponent } from './Templates/Header/header/header.component';
import { FooterComponent } from './Templates/Footer/footer/footer.component';
import { MenuComponent } from './Templates/Menu/menu/menu.component';
import { RegisterComponent } from './Home/register/register/register.component';
import { PageUserComponent } from './Page/pageUser/page-user/page-user.component';
import { HomeComponent } from './Home/home/home/home.component';
import { Http404Component } from './Page/http/http404/http404.component';
import { AddProductComponent } from './Processes/Product/add-product/add-product.component';
import { EditProductComponent } from './Processes/Product/edit-product/edit-product.component';
import { ListProductComponent } from './Processes/Product/list-product/list-product.component';
import { AddCategoryComponent } from './Processes/Category/add-category/add-category.component';
import { EditCategoryComponent } from './Processes/Category/edit-category/edit-category.component';
import { ListCategoryComponent } from './Processes/Category/list-category/list-category.component';
import { HomeAdminComponent } from './Page/homeAdmin/home-admin/home-admin.component';
import { ListAdminComponent } from './Processes/administrators/list-admin/list-admin.component';
import { AddAdminComponent } from './Processes/administrators/add-admin/add-admin.component';
import { MailUniqueValidationDirective } from './Validations/mail-unique-validation.directive';
import { FilterPipe } from './Pipes/filter.pipe';
import { AddOrderComponent } from './Processes/Order/add-order/add-order.component';
import { ListOrderComponent } from './Processes/Order/list-order/list-order.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactoComponent,
    AddComponent,
    EditComponent,
    ListComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    RegisterComponent,
    PageUserComponent,
    HomeComponent,
    Http404Component,
    AddProductComponent,
    EditProductComponent,
    ListProductComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    ListCategoryComponent,
    HomeAdminComponent,
    ListAdminComponent,
    AddAdminComponent,
    MailUniqueValidationDirective,
    FilterPipe,
    AddOrderComponent,
    ListOrderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    NgxPaginationModule,

  MatCardModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatChipsModule,
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSelectModule
  ],
  providers: [ServiceService,AuthenticationService, AuthGuardService,ProductService,CategoryService,UsersService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
